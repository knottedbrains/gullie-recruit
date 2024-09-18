// src/components/inputs/ResumeUploader.js
import React from 'react';

const ResumeUploader = ({ onUpload }) => {
    return (
        <div className="input-group">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Upload your resume
            </label>
            <input
                type="file"
                id="resume"
                onChange={(e) => onUpload(e.target.files[0])}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EF753E] focus:border-[#EF753E] sm:text-sm"
            />
        </div>
    );
};

export default ResumeUploader;
