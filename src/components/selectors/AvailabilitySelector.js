// src/components/selectors/AvailabilitySelector.js
import React, { useState } from 'react';

const availabilities = [
  { id: 'full-time', name: 'Full-time' },
  { id: 'part-time', name: 'Part-time' },
  { id: 'contract', name: 'Contract' },
  { id: 'temporary', name: 'Temporary' },
  // Add more availability options as needed
];

const AvailabilitySelector = ({ value, onChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckboxChange = (availabilityId) => {
    if (value.includes(availabilityId)) {
      onChange(value.filter((id) => id !== availabilityId));
    } else {
      onChange([...value, availabilityId]);
    }
  };

  return (
    <div className="relative inline-block w-full text-left">
      <button
        id="dropdownBgHoverButton"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-white bg-[#EF753E] hover:bg-[#e66a37] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Select Availability
        <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {dropdownOpen && (
        <div id="dropdownBgHover" className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow dark:bg-gray-700">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
            {availabilities.map((availability) => (
              <li key={availability.id}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    id={`checkbox-${availability.id}`}
                    type="checkbox"
                    checked={value.includes(availability.id)}
                    onChange={() => handleCheckboxChange(availability.id)}
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label htmlFor={`checkbox-${availability.id}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {availability.name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvailabilitySelector;
