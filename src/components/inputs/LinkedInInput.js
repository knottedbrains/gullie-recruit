// src/components/inputs/LinkedInInput.js
import React from 'react';

const LinkedInInput = ({ value, onChange }) => {
    return (
        <div className="input-group">
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn URL
            </label>
            <input
                type="url"
                id="linkedin"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your LinkedIn profile URL"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EF753E] focus:border-[#EF753E] sm:text-sm"
            />
        </div>
    );
};

export default LinkedInInput;
