import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobCollection = db.collection('jobs');
        const jobSnapshot = await jobCollection.get();
        const jobList = jobSnapshot.docs.map(doc => doc.data());
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
