// src/components/inputs/SearchInput.js
import React from 'react';

const SearchInput = ({ value, onChange, className }) => {
    return (
        <div className={`input-group ${className}`}>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search jobs
            </label>
            <input
                type="search"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter job title or keyword"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EF753E] focus:border-[#EF753E] sm:text-sm"
            />
        </div>
    );
};

export default SearchInput;
