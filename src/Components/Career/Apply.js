import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { countryCodes } from './countryCodes';
import app from '../../firebase.init';
import { getFirestore, collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

const CustomFileInput = ({ id, name, accept, onChange, required, label, value, hasError }) => (
  <div className="relative w-full">
    <input
      id={id}
      name={name}
      type="file"
      accept={accept}
      onChange={onChange}
      required={required}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
    />
    <label
      htmlFor={id}
      className={`block w-full border px-3 py-2 rounded bg-white text-gray-900 cursor-pointer text-left font-normal focus-within:ring-2 transition ${hasError ? 'field-error-border focus-within:ring-red-500' : 'focus-within:ring-blue-900'}`}
      style={{ minHeight: '2.5rem' }}
    >
      {value && value.name ? value.name : label || 'Choose file...'}
    </label>
  </div>
);

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [fetchingJob, setFetchingJob] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    cv: null,
    summary: '',
    citizen: '',
    degree: '',
    passingYear: '',
    interviewed: '',
    experience: '',
    consent: false,
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const docRef = doc(db, 'jobs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJob(docSnap.data());
        } else {
          console.log("No such job document!");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setFetchingJob(false);
      }
    };

    fetchJob();
  }, [id]);

  if (fetchingJob) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Loading job details...</div>;

  if (!job) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Job not found.</div>;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
    // Clear error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!form.firstName.trim()) errors.firstName = 'First name is required';
    if (!form.lastName.trim()) errors.lastName = 'Last name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    if (!form.phone.trim()) errors.phone = 'Phone number is required';
    if (!form.cv) errors.cv = 'CV is required';
    if (!form.citizen) errors.citizen = 'Please select an option';
    if (form.citizen === 'no' && !form.countryNonBD) errors.countryNonBD = 'Please select your country';
    if (!form.degree) errors.degree = 'Please select an option';
    if (!form.passingYear) errors.passingYear = 'Please select a year';
    if (!form.interviewed) errors.interviewed = 'Please select an option';
    if (!form.experience) errors.experience = 'Please select an option';
    if (!form.consent) errors.consent = 'You must consent to proceed';
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }
    
    setFieldErrors({});
    setLoading(true);
    
    try {
      let cvBase64 = '';
      if (form.cv) {
        if (form.cv.size > 1024 * 1024) {
          setError('CV file must be less than 1MB.');
          setFieldErrors({ cv: 'CV file must be less than 1MB.' });
          setLoading(false);
          return;
        }
        cvBase64 = await fileToBase64(form.cv);
      }
      const dataToSave = {
        ...form,
        cv: cvBase64,
        jobId: id,
        jobTitle: job.title,
        submittedAt: Timestamp.now(),
      };
      await addDoc(collection(db, 'applications'), dataToSave);
      setSubmitted(true);
      setFieldErrors({});
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+1',
        phone: '',
        cv: null,
        summary: '',
        citizen: '',
        degree: '',
        passingYear: '',
        interviewed: '',
        experience: '',
        consent: false,
      });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-2 min-h-screen flex flex-col justify-between" style={{ background: '#f8f6f3' }}>
      <style>{`
        .custom-select-arrow {
          background-image: url('data:image/svg+xml;utf8,<svg fill="%2360a5fa" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 1.25rem 1.25rem;
          padding-right: 2.5rem;
        }
        input[type="radio"].custom-radio {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          height: 28px !important;
          width: 28px !important;
          min-height: 28px !important;
          min-width: 28px !important;
          border: 2px solid #d1d5db !important;
          border-radius: 50% !important;
          display: inline-block !important;
          position: relative !important;
          background-color: #ffffff !important;
          cursor: pointer !important;
          vertical-align: middle !important;
          flex-shrink: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
        }
        input[type="radio"].custom-radio:not(:checked) {
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
        }
        input[type="radio"].custom-radio:checked {
          border-color: #2563eb !important;
          background-color: #2563eb !important;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4.5'/%3e%3c/svg%3e") !important;
          background-size: 60% !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        input[type="radio"].custom-radio:focus {
          outline: 2px solid transparent !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2563eb !important;
        }
        input[type="radio"].custom-radio:hover {
          border-color: #9ca3af !important;
        }
        input[type="checkbox"].custom-checkbox {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          height: 28px !important;
          width: 28px !important;
          min-height: 28px !important;
          min-width: 28px !important;
          border: 2px solid #d1d5db !important;
          border-radius: 4px !important;
          display: inline-block !important;
          position: relative !important;
          background-color: #ffffff !important;
          cursor: pointer !important;
          vertical-align: middle !important;
          flex-shrink: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
        }
        input[type="checkbox"].custom-checkbox:not(:checked) {
          background-color: #ffffff !important;
          border-color: #d1d5db !important;
        }
        input[type="checkbox"].custom-checkbox:checked {
          border-color: #2563eb !important;
          background-color: #2563eb !important;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") !important;
          background-size: 70% !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }
        input[type="checkbox"].custom-checkbox:focus {
          outline: 2px solid transparent !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px #2563eb !important;
        }
        input[type="checkbox"].custom-checkbox:hover {
          border-color: #9ca3af !important;
        }
        .field-error {
          color: #dc2626 !important;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          display: block;
        }
        .field-error-border {
          border-color: #dc2626 !important;
        }
        .field-error-border:focus {
          border-color: #dc2626 !important;
          ring-color: #dc2626 !important;
        }
      `}</style>
      <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Apply for {job.title}</h2>
      <div className="text-gray-500 text-sm mb-8 text-center">{job.location} &bull; {job.type}</div>
      {submitted ? (
        <div className="p-12 text-center mx-auto w-full">
          <div className="text-green-600 text-2xl font-bold mb-4">Application Received!</div>
          <div className="text-gray-700">Thank you for applying. As we receive a lot of applications, we will only contact shortlisted candidates.</div>
        </div>
      ) : (
        <form className="space-y-8" encType="multipart/form-data" onSubmit={handleSubmit}>
          {/* 1. Personal Details */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">1. Personal Details</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">First Name *</label>
                <input className={`w-full border px-3 py-2 rounded bg-white text-gray-900 ${fieldErrors.firstName ? 'field-error-border' : ''}`} name="firstName" value={form.firstName} onChange={handleChange} required />
                {fieldErrors.firstName && <span className="field-error">{fieldErrors.firstName}</span>}
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Last Name *</label>
                <input className={`w-full border px-3 py-2 rounded bg-white text-gray-900 ${fieldErrors.lastName ? 'field-error-border' : ''}`} name="lastName" value={form.lastName} onChange={handleChange} required />
                {fieldErrors.lastName && <span className="field-error">{fieldErrors.lastName}</span>}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Email Address *</label>
                <input className={`w-full border px-3 py-2 rounded bg-white text-gray-900 ${fieldErrors.email ? 'field-error-border' : ''}`} type="email" name="email" value={form.email} onChange={handleChange} required />
                {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Phone *</label>
                <div className="flex gap-2">
                  <select
                    className="border px-3 py-2 rounded bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-900 custom-select-arrow"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                    style={{ minWidth: '140px', flexShrink: 0 }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                    ))}
                  </select>
                  <div className="flex-1 min-w-0">
                    <input
                      className={`w-full border px-3 py-2 rounded bg-white text-gray-900 ${fieldErrors.phone ? 'field-error-border' : ''}`}
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      required
                    />
                    {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2. Profile */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">2. Profile</h3>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Résumé / CV *</label>
              <CustomFileInput
                id="cv-upload"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                label="Upload your CV (PDF, DOC, DOCX)"
                value={form.cv}
                hasError={!!fieldErrors.cv}
              />
              {fieldErrors.cv && <span className="field-error">{fieldErrors.cv}</span>}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Personal Summary <span className="text-gray-400">(optional)</span></label>
              <textarea className="w-full border px-3 py-2 rounded bg-white text-gray-900" name="summary" value={form.summary} onChange={handleChange} rows="4"></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Cover Letter (optional)</label>
              <CustomFileInput
                id="cover-letter-upload"
                name="coverLetterFile"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                label="Upload your cover letter (PDF, DOC, DOCX)"
                value={form.coverLetterFile}
              />
              <span className="block text-gray-400 text-xs mb-2">Or write your cover letter below</span>
              <textarea className="w-full border px-3 py-2 rounded bg-white text-gray-900" name="coverLetterText" value={form.coverLetterText || ''} onChange={handleChange} rows="4" placeholder="Write your cover letter here..."></textarea>
            </div>
          </div>
          {/* 3. Questions */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">3. Questions</h3>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Are you a Bangladeshi citizen?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="citizen" value="yes" checked={form.citizen === 'yes'} onChange={handleChange} required className="custom-radio" /> Yes
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="citizen" value="no" checked={form.citizen === 'no'} onChange={handleChange} required className="custom-radio" /> No
                </label>
              </div>
              {fieldErrors.citizen && <span className="field-error">{fieldErrors.citizen}</span>}
              {form.citizen === 'no' && (
                <div className="mt-4">
                  <label className="block mb-1 font-medium">Select your country</label>
                  <select
                    className={`w-full border px-3 py-2 rounded bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-900 custom-select-arrow ${fieldErrors.countryNonBD ? 'field-error-border' : ''}`}
                    name="countryNonBD"
                    value={form.countryNonBD || ''}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select country...</option>
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                  {fieldErrors.countryNonBD && <span className="field-error">{fieldErrors.countryNonBD}</span>}
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Have you completed your undergraduate degree?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="degree" value="yes" checked={form.degree === 'yes'} onChange={handleChange} required className="custom-radio" /> Yes
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="degree" value="no" checked={form.degree === 'no'} onChange={handleChange} required className="custom-radio" /> No
                </label>
              </div>
              {fieldErrors.degree && <span className="field-error">{fieldErrors.degree}</span>}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Please select the passing year of your undergraduate degree.</label>
              <select className={`w-full border px-3 py-2 rounded bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-900 custom-select-arrow ${fieldErrors.passingYear ? 'field-error-border' : ''}`} name="passingYear" value={form.passingYear} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="N/A">N/A</option>
                {Array.from({ length: 32 }, (_, i) => 1995 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              {fieldErrors.passingYear && <span className="field-error">{fieldErrors.passingYear}</span>}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Have you interviewed before in any role at Zerodevs?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="interviewed" value="yes" checked={form.interviewed === 'yes'} onChange={handleChange} required className="custom-radio" /> Yes
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="interviewed" value="no" checked={form.interviewed === 'no'} onChange={handleChange} required className="custom-radio" /> No
                </label>
              </div>
              {fieldErrors.interviewed && <span className="field-error">{fieldErrors.interviewed}</span>}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">How many years of experience do you have in your field?</label>
              <select className={`w-full border px-3 py-2 rounded bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-900 custom-select-arrow ${fieldErrors.experience ? 'field-error-border' : ''}`} name="experience" value={form.experience} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="No Experience">No Experience</option>
                <option value="0-1">0-1</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="3-5">3-5</option>
                <option value="5+">5+</option>
                <option value="N/A">N/A</option>
              </select>
              {fieldErrors.experience && <span className="field-error">{fieldErrors.experience}</span>}
            </div>
          </div>
          {/* 4. Submit Application */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">4. Submit Application</h3>
            <div className="mb-4">
              <div className="flex items-center">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required className="custom-checkbox mr-3" />
                <span className="text-gray-700">Allow us to process your personal information. <a href="#" className="text-blue-900 underline ml-1">Privacy notice</a></span>
              </div>
              {fieldErrors.consent && <span className="field-error">{fieldErrors.consent}</span>}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                style={{
                  background: '#007bff',
                  color: '#fff',
                  border: '3px solid #007bff',
                  borderRadius: '999px',
                  padding: '12px 40px',
                  fontWeight: 700,
                  fontSize: '16px',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)',
                  letterSpacing: '1px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '320px',
                  margin: '0 auto',
                  display: 'block',
                }}
                onMouseOver={e => {
                  e.target.style.background = '#0056b3';
                  e.target.style.borderColor = '#0056b3';
                }}
                onMouseOut={e => {
                  e.target.style.background = '#007bff';
                  e.target.style.borderColor = '#007bff';
                }}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </form>
      )}
      <button className="mt-8 text-blue-900 underline hover:text-blue-800 text-center" onClick={() => navigate(-1)}>
        &larr; Back to job details
      </button>
    </div>
  );
};

export default Apply;
