import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, orderBy, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import app from '../../firebase.init';

const db = getFirestore(app);

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [applications, setApplications] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Hardcoded Admin Credentials
    const ADMIN_EMAIL = 'info@zerodevs.com';
    const ADMIN_PASS = 'ZeroDevs@1230';

    const [activeTab, setActiveTab] = useState('applications'); // 'applications', 'jobs', 'postJob'
    const [expandedApp, setExpandedApp] = useState(null); // Track which application is expanded
    const [jobForm, setJobForm] = useState({
        title: '',
        location: '',
        type: 'Full Time',
        description: '',
        responsibilities: '',
        requirements: '',
        benefits: '',
        training: '',
        whyJoin: ''
    });
    const [posting, setPosting] = useState(false);
    const [postSuccess, setPostSuccess] = useState('');

    useEffect(() => {
        const checkAuth = localStorage.getItem('zd_admin_auth');
        if (checkAuth === 'true') {
            setIsAuthenticated(true);
            fetchApplications();
            fetchJobs();
        }
    }, []);

    const fetchApplications = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, 'applications'), orderBy('submittedAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const apps = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setApplications(apps);
        } catch (err) {
            console.error("Error fetching applications:", err);
            setError('Failed to fetch applications.');
        } finally {
            setLoading(false);
        }
    };

    const fetchJobs = async () => {
        try {
            const q = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            const jobsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setJobs(jobsList);
        } catch (err) {
            console.error("Error fetching jobs:", err);
        }
    };

    const handleDeleteApplication = async (id) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await deleteDoc(doc(db, 'applications', id));
                setApplications(applications.filter(app => app.id !== id));
            } catch (err) {
                console.error("Error deleting application:", err);
                alert('Failed to delete application');
            }
        }
    };

    const handleDeleteJob = async (id) => {
        if (window.confirm('Are you sure you want to delete this job posting?')) {
            try {
                await deleteDoc(doc(db, 'jobs', id));
                setJobs(jobs.filter(job => job.id !== id));
            } catch (err) {
                console.error("Error deleting job:", err);
                alert('Failed to delete job');
            }
        }
    };

    const handleToggleJobStatus = async (job) => {
        const newStatus = job.status === 'active' ? 'inactive' : 'active';
        if (window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) {
            try {
                await updateDoc(doc(db, 'jobs', job.id), { status: newStatus });
                setJobs(jobs.map(j => j.id === job.id ? { ...j, status: newStatus } : j));
            } catch (err) {
                console.error("Error updating job status:", err);
                alert('Failed to update job status');
            }
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
            setIsAuthenticated(true);
            localStorage.setItem('zd_admin_auth', 'true');
            fetchApplications();
            fetchJobs();
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('zd_admin_auth');
        setApplications([]);
        setJobs([]);
    };

    const downloadCV = (base64, name) => {
        const link = document.createElement("a");
        link.href = base64;
        link.download = `${name}_CV.pdf`; // Assuming PDF/Doc based on mime type usually within base64
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePostJob = async (e) => {
        e.preventDefault();
        setPosting(true);
        setPostSuccess('');
        setError('');

        try {
            // Helper to split text by newlines and clean up
            const toList = (text) => text.split('\n').map(item => item.trim()).filter(item => item);

            const jobData = {
                title: jobForm.title,
                location: jobForm.location,
                type: jobForm.type,
                description: jobForm.description,
                responsibilities: toList(jobForm.responsibilities),
                requirements: toList(jobForm.requirements),
                benefits: toList(jobForm.benefits),
                training: toList(jobForm.training),
                whyJoin: toList(jobForm.whyJoin),
                createdAt: new Date(),
                status: 'active'
            };

            await addDoc(collection(db, 'jobs'), jobData);
            setPostSuccess('Job posted successfully!');
            fetchJobs(); // Refresh jobs list
            setJobForm({
                title: '',
                location: '',
                type: 'Full Time',
                description: '',
                responsibilities: '',
                requirements: '',
                benefits: '',
                training: '',
                whyJoin: ''
            });
        } catch (err) {
            console.error("Error posting job:", err);
            setError('Failed to post job.');
        } finally {
            setPosting(false);
        }
    };


    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <style>{`
                    input[type="email"].admin-login-input,
                    input[type="password"].admin-login-input {
                        background-color: #ffffff !important;
                        background: #ffffff !important;
                        color: #111827 !important;
                        -webkit-text-fill-color: #111827 !important;
                    }
                    input[type="email"].admin-login-input:-webkit-autofill,
                    input[type="password"].admin-login-input:-webkit-autofill {
                        -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
                        -webkit-text-fill-color: #111827 !important;
                        background-color: #ffffff !important;
                        background: #ffffff !important;
                    }
                    input[type="email"].admin-login-input::placeholder,
                    input[type="password"].admin-login-input::placeholder {
                        color: #9ca3af !important;
                    }
                `}</style>
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
                    {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="admin-login-input w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#111827',
                                    WebkitTextFillColor: '#111827'
                                }}
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="admin-login-input w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#111827',
                                    WebkitTextFillColor: '#111827'
                                }}
                                autoComplete="current-password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <div className="space-x-4 flex flex-wrap gap-2">
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={`px-4 py-2 rounded transition font-medium ${activeTab === 'applications' ? 'shadow-md' : 'hover:bg-gray-100 border'}`}
                            style={activeTab === 'applications' ? { backgroundColor: '#2563EB', color: 'white' } : { backgroundColor: 'white', color: '#374151', borderColor: '#D1D5DB' }}
                        >
                            Applications
                        </button>
                        <button
                            onClick={() => setActiveTab('jobs')}
                            className={`px-4 py-2 rounded transition font-medium ${activeTab === 'jobs' ? 'shadow-md' : 'hover:bg-gray-100 border'}`}
                            style={activeTab === 'jobs' ? { backgroundColor: '#2563EB', color: 'white' } : { backgroundColor: 'white', color: '#374151', borderColor: '#D1D5DB' }}
                        >
                            Jobs Lists
                        </button>
                        <button
                            onClick={() => setActiveTab('postJob')}
                            className={`px-4 py-2 rounded transition font-medium ${activeTab === 'postJob' ? 'shadow-md' : 'hover:bg-gray-100 border'}`}
                            style={activeTab === 'postJob' ? { backgroundColor: '#2563EB', color: 'white' } : { backgroundColor: 'white', color: '#374151', borderColor: '#D1D5DB' }}
                        >
                            Post Job
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded hover:opacity-90 transition shadow-md font-medium"
                            style={{ backgroundColor: '#EF4444', color: 'white' }}
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {activeTab === 'applications' && (
                    loading ? (
                        <div className="text-center py-12">Loading applications...</div>
                    ) : (
                        <div className="bg-white shadow overflow-x-auto rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {applications.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No applications found.</td>
                                        </tr>
                                    ) : (
                                        applications.map((app) => (
                                            <React.Fragment key={app.id}>
                                                <tr className="cursor-pointer hover:bg-gray-50" onClick={() => setExpandedApp(expandedApp === app.id ? null : app.id)}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {app.submittedAt?.seconds ? new Date(app.submittedAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{app.firstName} {app.lastName}</div>
                                                        <div className="text-sm text-gray-500">{app.email}</div>
                                                        <div className="text-sm text-gray-500">{app.countryCode} {app.phone}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {app.jobTitle}
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-gray-500">
                                                        <div className="max-w-xs truncate" title={app.summary}>{app.summary || 'No summary'}</div>
                                                        <div className="mt-1">
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                                                                Exp: {app.experience}
                                                            </span>
                                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                                                Degree: {app.degree}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2" onClick={(e) => e.stopPropagation()}>
                                                        <button
                                                            onClick={() => setExpandedApp(expandedApp === app.id ? null : app.id)}
                                                            className="text-blue-600 hover:text-blue-900 mr-2"
                                                        >
                                                            {expandedApp === app.id ? 'Hide' : 'View All'}
                                                        </button>
                                                        {app.cv && (
                                                            <button
                                                                onClick={() => downloadCV(app.cv, `${app.firstName}_${app.lastName}`)}
                                                                className="text-blue-600 hover:text-blue-900 mr-2"
                                                            >
                                                                CV
                                                            </button>
                                                        )}
                                                        <button
                                                            onClick={() => handleDeleteApplication(app.id)}
                                                            className="px-3 py-1.5 rounded hover:opacity-90 transition text-xs font-semibold"
                                                            style={{ backgroundColor: '#EF4444', color: 'white' }}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                                {expandedApp === app.id && (
                                                    <tr>
                                                        <td colSpan="5" className="px-6 py-4 bg-gray-50">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                                                <div>
                                                                    <strong className="text-gray-700">Full Name:</strong>
                                                                    <p className="text-gray-900">{app.firstName} {app.lastName}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Email:</strong>
                                                                    <p className="text-gray-900">{app.email}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Phone:</strong>
                                                                    <p className="text-gray-900">{app.countryCode} {app.phone}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Job Title:</strong>
                                                                    <p className="text-gray-900">{app.jobTitle}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Citizen:</strong>
                                                                    <p className="text-gray-900">{app.citizen === 'yes' ? 'Yes (Bangladeshi)' : `No (${app.countryNonBD || 'Not specified'})`}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Degree Completed:</strong>
                                                                    <p className="text-gray-900">{app.degree === 'yes' ? 'Yes' : 'No'}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Passing Year:</strong>
                                                                    <p className="text-gray-900">{app.passingYear || 'N/A'}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Experience:</strong>
                                                                    <p className="text-gray-900">{app.experience || 'N/A'}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">Previously Interviewed:</strong>
                                                                    <p className="text-gray-900">{app.interviewed === 'yes' ? 'Yes' : 'No'}</p>
                                                                </div>
                                                                <div>
                                                                    <strong className="text-gray-700">CV:</strong>
                                                                    <p className="text-gray-900">{app.cv ? '✓ Uploaded' : '✗ Not uploaded'}</p>
                                                                </div>
                                                                {app.coverLetterFile && (
                                                                    <div>
                                                                        <strong className="text-gray-700">Cover Letter File:</strong>
                                                                        <p className="text-gray-900">✓ Uploaded</p>
                                                                    </div>
                                                                )}
                                                                <div className="md:col-span-2">
                                                                    <strong className="text-gray-700">Personal Summary:</strong>
                                                                    <p className="text-gray-900 whitespace-pre-wrap">{app.summary || 'No summary provided'}</p>
                                                                </div>
                                                                {app.coverLetterText && (
                                                                    <div className="md:col-span-2">
                                                                        <strong className="text-gray-700">Cover Letter:</strong>
                                                                        <p className="text-gray-900 whitespace-pre-wrap">{app.coverLetterText}</p>
                                                                    </div>
                                                                )}
                                                                <div>
                                                                    <strong className="text-gray-700">Submitted Date:</strong>
                                                                    <p className="text-gray-900">
                                                                        {app.submittedAt?.seconds ? new Date(app.submittedAt.seconds * 1000).toLocaleString() : 'N/A'}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )
                )}

                {activeTab === 'jobs' && (
                    <div className="bg-white shadow overflow-x-auto rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {jobs.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No jobs posted.</td>
                                    </tr>
                                ) : (
                                    jobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {job.createdAt?.seconds ? new Date(job.createdAt.seconds * 1000).toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.location}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <button
                                                    onClick={() => handleToggleJobStatus(job)}
                                                    className={`px-2 py-1 rounded text-xs font-semibold ${job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                                                >
                                                    {job.status === 'active' ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <button
                                                    onClick={() => handleDeleteJob(job.id)}
                                                    className="px-3 py-1.5 rounded hover:opacity-90 transition text-xs font-semibold"
                                                    style={{ backgroundColor: '#EF4444', color: 'white' }}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'postJob' && (
                    <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Post a New Job</h2>
                        {postSuccess && <div className="bg-green-100 text-green-800 p-3 rounded mb-6">{postSuccess}</div>}
                        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-6">{error}</div>}

                        <form onSubmit={handlePostJob} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                        value={jobForm.title}
                                        onChange={e => setJobForm({ ...jobForm, title: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                        value={jobForm.location}
                                        onChange={e => setJobForm({ ...jobForm, location: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Type</label>
                                <select
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.type}
                                    onChange={e => setJobForm({ ...jobForm, type: e.target.value })}
                                >
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Job Summary / Description</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.description}
                                    onChange={e => setJobForm({ ...jobForm, description: e.target.value })}
                                    placeholder="Brief overview of the role..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities (One per line)</label>
                                <textarea
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.responsibilities}
                                    onChange={e => setJobForm({ ...jobForm, responsibilities: e.target.value })}
                                    placeholder="- Develop new features&#10;- fix bugs"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Requirements (One per line)</label>
                                <textarea
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.requirements}
                                    onChange={e => setJobForm({ ...jobForm, requirements: e.target.value })}
                                    placeholder="- 3+ years React experience&#10;- Knowledge of Git"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Benefits (One per line)</label>
                                <textarea
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.benefits}
                                    onChange={e => setJobForm({ ...jobForm, benefits: e.target.value })}
                                    placeholder="- Competitive salary&#10;- Health insurance"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Training & Support (One per line)</label>
                                <textarea
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.training}
                                    onChange={e => setJobForm({ ...jobForm, training: e.target.value })}
                                    placeholder="- Structured training&#10;- Mentorship"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Why Join ZeroDevs? (One per line)</label>
                                <textarea
                                    rows="4"
                                    className="w-full border rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                                    value={jobForm.whyJoin}
                                    onChange={e => setJobForm({ ...jobForm, whyJoin: e.target.value })}
                                    placeholder="- High growth&#10;- Career path"
                                ></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={posting}
                                    className={`px-6 py-2 rounded font-medium hover:opacity-90 transition ${posting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    style={{ backgroundColor: '#2563EB', color: 'white' }}
                                >
                                    {posting ? 'Posting...' : 'Post Job'}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
