// src/components/JobCard.js
import React from 'react';
import { MapPinIcon, BriefcaseIcon, PlaneIcon } from './icons';

const JobCard = ({ job }) => (
  <div className="group relative p-4 border rounded-lg shadow-lg">
    <a href="#" className="absolute inset-0 z-10">
      <span className="sr-only">View job</span>
    </a>
    <div className="flex items-center gap-2">
      <img src={job.logo || '/placeholder.svg'} width={40} height={40} alt="Company logo" className="rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="text-gray-500">{job.company}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <MapPinIcon className="w-5 h-5 text-gray-500" />
      <p className="text-gray-500">{job.location}</p>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <BriefcaseIcon className="w-5 h-5 text-gray-500" />
      <p className="text-gray-500">{job.type}</p>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <PlaneIcon className="w-5 h-5 text-gray-500" />
      <p className="text-gray-500">{job.relocationAssistance}</p>
    </div>
  </div>
);

export default JobCard;
