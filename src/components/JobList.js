import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaMapMarkerAlt, FaBriefcase, FaPlane } from 'react-icons/fa';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log("Fetching jobs...");
        const jobCollection = collection(db, 'jobs');
        const jobSnapshot = await getDocs(jobCollection);

        if (jobSnapshot.empty) {
          console.log("No matching documents.");
          setJobs([]);
          setLoading(false);
          return;
        }

        const jobList = jobSnapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("Document data:", data);
          return {
            id: doc.id,
            ...data,
          };
        });

        console.log("Processed job list:", jobList);
        setJobs(jobList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
        setError(`Failed to fetch jobs: ${error.message}`);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading job listings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (jobs.length === 0) {
    return <div>No job listings found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobs.map((job) => (
          <a
            key={job.id}
            href={job.url} // Use the `url` field for the link
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  {/* Display the company logo */}
                  <img
                    src={job.logo || '/placeholder.svg'}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{job.title}</h2>
                  <p className="text-gray-600">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <FaBriefcase className="w-5 h-5 mr-2" />
                <span>{job.type}</span>
              </div>
              {job.relocationAssistance && (
                <div className="flex items-center text-gray-600">
                  <FaPlane className="w-5 h-5 mr-2" />
                  <span>{job.relocationAssistance}</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default JobList;
