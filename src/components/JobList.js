import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsCollection = await db.collection('jobs').get();
      setJobs(jobsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
