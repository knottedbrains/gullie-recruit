// src/components/inputs/EmailInput.js
import React from 'react';

const EmailInput = ({ value, onChange }) => {
    return (
        <div className="input-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter your email"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EF753E] focus:border-[#EF753E] sm:text-sm"
            />
        </div>
    );
};

export default EmailInput;
