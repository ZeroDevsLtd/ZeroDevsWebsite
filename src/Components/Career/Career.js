import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import content from '../../content/websiteContent';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../../firebase.init';

const db = getFirestore(app);

const Career = () => {
	const navigate = useNavigate();
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, 'jobs'));
				const jobsData = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));
				setJobs(jobsData);
			} catch (error) {
				console.error("Error fetching jobs:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	return (
		<div className="pt-24 pb-12 px-4 min-h-screen" style={{ background: '#f8f6f3' }}>
			<h1 className="text-3xl font-bold mb-8 text-center">{content.career.title}</h1>
			<p className="text-center text-gray-600 mb-8">{content.career.intro}</p>

			{loading ? (
				<div className="text-center py-12">Loading open positions...</div>
			) : (
				<div className="space-y-4 max-w-4xl mx-auto">
					{jobs.length === 0 ? (
						<div className="text-center text-gray-500">No open positions at the moment.</div>
					) : (
						jobs.map((job) => (
							<div
								key={job.id}
								className="flex items-center justify-between bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer p-6 border border-gray-200 hover:border-blue-900 group"
								onClick={() => navigate(`/job/${job.id}`)}
							>
								<div>
									<h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-900">{job.title}</h2>
									<div className="text-gray-500 text-sm mt-1">{job.location} &bull; {job.type}</div>
									<div className="text-gray-700 text-sm mt-2 line-clamp-2">{job.description}</div>
								</div>
								<button
									className="ml-4 flex items-center text-blue-900 font-medium group-hover:underline group-hover:text-blue-900"
									onClick={e => { e.stopPropagation(); navigate(`/job/${job.id}`); }}
								>
									View <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
								</button>
							</div>
						))
					)}
				</div>
			)}
		</div>
	);
};

export default Career;
