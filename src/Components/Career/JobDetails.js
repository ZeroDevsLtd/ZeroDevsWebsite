import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../../firebase.init';

const db = getFirestore(app);

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const docRef = doc(db, 'jobs', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setJob(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Loading job details...</div>;

  if (!job) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Job not found.</div>;

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen flex flex-col justify-between" style={{ background: '#f8f6f3' }}>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{job.title}</h2>
        <div className="text-gray-500 text-sm mb-4">{job.location} &bull; {job.type}</div>
        <p className="mb-6 text-gray-700">{job.description}</p>

        {job.responsibilities && job.responsibilities.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">What You Will Do:</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {job.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {job.requirements && job.requirements.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {job.benefits && job.benefits.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">What You Will Receive:</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {job.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </>
        )}

        {job.training && job.training.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Training & Support:</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {job.training.map((t, idx) => (
                <li key={idx}>{t}</li>
              ))}
            </ul>
          </>
        )}

        {job.whyJoin && job.whyJoin.length > 0 && (
          <>
            <h3 className="font-semibold mb-2">Why Join ZeroDevs?</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {job.whyJoin.map((w, idx) => (
                <li key={idx}>{w}</li>
              ))}
            </ul>
          </>
        )}

        <button
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
          onClick={() => navigate(`/apply/${id}`)}
        >
          Apply Now
        </button>
      </div>
      <button className="mt-8 text-blue-900 underline hover:text-blue-900 text-center" onClick={() => navigate(-1)}>
        &larr; Back to all jobs
      </button>
    </div>
  );
};

export default JobDetails;
