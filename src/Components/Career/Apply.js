import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { countryCodes } from './countryCodes';

const jobDetails = {
  1: {
    title: 'Frontend Developer',
    location: 'Dhaka, Bangladesh',
    type: 'Full Time',
    description: 'We are looking for a skilled React developer with experience in Tailwind CSS and modern JavaScript frameworks. 2+ years experience required.',
    responsibilities: [
      'Develop and maintain user-facing features using React.js',
      'Write clean, scalable, and efficient code',
      'Collaborate with UI/UX designers and backend developers',
      'Optimize applications for maximum speed and scalability',
    ],
    requirements: [
      '2+ years experience with React',
      'Strong knowledge of JavaScript and ES6+',
      'Experience with Tailwind CSS',
      'Familiarity with REST APIs',
    ],
    benefits: [
      'Competitive salary',
      'Flexible working hours',
      'Friendly team environment',
    ],
  },
  2: {
    title: 'Backend Developer',
    location: 'Remote',
    type: 'Full Time',
    description: 'Seeking a Node.js/Express developer familiar with REST APIs and MongoDB. 3+ years experience preferred.',
    responsibilities: [
      'Design and implement RESTful APIs',
      'Maintain and optimize database systems',
      'Work closely with frontend developers',
      'Ensure application security and data protection',
    ],
    requirements: [
      '3+ years experience with Node.js/Express',
      'Experience with MongoDB',
      'Understanding of RESTful API design',
      'Familiarity with cloud deployment',
    ],
    benefits: [
      'Remote work',
      'Growth opportunities',
      'Supportive team',
    ],
  },
  3: {
    title: 'UI/UX Designer',
    location: 'Dhaka, Bangladesh',
    type: 'Contract',
    description: 'Creative designer needed for web and mobile app projects. Proficiency in Figma or Adobe XD required.',
    responsibilities: [
      'Design user interfaces for web and mobile apps',
      'Create wireframes, prototypes, and mockups',
      'Work with developers to implement designs',
      'Conduct user research and usability testing',
    ],
    requirements: [
      'Portfolio of design projects',
      'Proficiency in Figma or Adobe XD',
      'Strong sense of modern UI/UX',
      'Ability to work with developers',
    ],
    benefits: [
      'Project-based compensation',
      'Creative freedom',
      'Collaborative environment',
    ],
  },
};

const Apply = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobDetails[id];
  const [submitted, setSubmitted] = useState(false);
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

  if (!job) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Job not found.</div>;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend or email service
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 px-2 min-h-screen flex flex-col justify-between" style={{ background: '#f8f6f3' }}>
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
                <input className="w-full border px-3 py-2 rounded" name="firstName" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Last Name *</label>
                <input className="w-full border px-3 py-2 rounded" name="lastName" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Email Address *</label>
                <input className="w-full border px-3 py-2 rounded" type="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Phone *</label>
                <div className="flex gap-2">
                  <select
                    className="border px-2 py-2 rounded bg-gray-50"
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    required
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.name} ({c.code})</option>
                    ))}
                  </select>
                  <input
                    className="w-full border px-3 py-2 rounded"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 2. Profile */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">2. Profile</h3>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Résumé / CV *</label>
              <input className="w-full border px-3 py-2 rounded" type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Personal Summary <span className="text-gray-400">(optional)</span></label>
              <textarea className="w-full border px-3 py-2 rounded" name="summary" value={form.summary} onChange={handleChange} rows="4"></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Cover Letter (optional)</label>
              <input className="w-full border px-3 py-2 rounded mb-2" type="file" name="coverLetterFile" accept=".pdf,.doc,.docx" onChange={handleChange} />
              <span className="block text-gray-400 text-xs mb-2">Or write your cover letter below</span>
              <textarea className="w-full border px-3 py-2 rounded" name="coverLetterText" value={form.coverLetterText || ''} onChange={handleChange} rows="4" placeholder="Write your cover letter here..."></textarea>
            </div>
          </div>
          {/* 3. Questions */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">3. Questions</h3>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Are you a Bangladeshi citizen?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="citizen" value="yes" checked={form.citizen === 'yes'} onChange={handleChange} required /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="citizen" value="no" checked={form.citizen === 'no'} onChange={handleChange} required /> No
                </label>
              </div>
              {form.citizen === 'no' && (
                <div className="mt-4">
                  <label className="block mb-1 font-medium">Select your country</label>
                  <select
                    className="w-full border px-3 py-2 rounded"
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
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Have you completed your undergraduate degree?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="degree" value="yes" checked={form.degree === 'yes'} onChange={handleChange} required /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="degree" value="no" checked={form.degree === 'no'} onChange={handleChange} required /> No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Please select the passing year of your undergraduate degree.</label>
              <select className="w-full border px-3 py-2 rounded" name="passingYear" value={form.passingYear} onChange={handleChange} required>
                <option value="">Select...</option>
                {Array.from({length: 30}, (_, i) => 1995 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Have you interviewed before in any role at Zerodevs?</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="interviewed" value="yes" checked={form.interviewed === 'yes'} onChange={handleChange} required /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="interviewed" value="no" checked={form.interviewed === 'no'} onChange={handleChange} required /> No
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium">How many years of experience do you have in your field?</label>
              <select className="w-full border px-3 py-2 rounded" name="experience" value={form.experience} onChange={handleChange} required>
                <option value="">Select...</option>
                <option value="0-1">0-1</option>
                <option value="1-2">1-2</option>
                <option value="2-3">2-3</option>
                <option value="3-5">3-5</option>
                <option value="5+">5+</option>
              </select>
            </div>
          </div>
          {/* 4. Submit Application */}
          <div className="bg-white rounded-lg shadow p-8 w-full">
            <h3 className="text-xl font-semibold mb-4">4. Submit Application</h3>
            <div className="mb-4 flex items-center">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required className="mr-2" />
              <span className="text-gray-700">Allow us to process your personal information. <a href="#" className="text-blue-900 underline ml-1">Privacy notice</a></span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 w-full md:w-auto" type="submit">Submit Application</button>
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
