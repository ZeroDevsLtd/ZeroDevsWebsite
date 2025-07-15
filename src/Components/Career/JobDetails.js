import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobDetails[id];

  if (!job) return <div className="max-w-xl mx-auto mt-24 p-4 text-center min-h-screen">Job not found.</div>;

  return (
    <div className="pt-24 pb-16 px-4 min-h-screen flex flex-col justify-between" style={{ background: '#f8f6f3' }}>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{job.title}</h2>
        <div className="text-gray-500 text-sm mb-4">{job.location} &bull; {job.type}</div>
        <p className="mb-6 text-gray-700">{job.description}</p>
        <h3 className="font-semibold mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
        <h3 className="font-semibold mb-2">Benefits:</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {job.benefits.map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
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
