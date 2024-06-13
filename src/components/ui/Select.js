import React from 'react';

const Select = ({ id, value, onChange, isMulti, children }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => {
        if (isMulti) {
          const options = e.target.options;
          const value = [];
          for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
            }
          }
          onChange(value);
        } else {
          onChange(e.target.value);
        }
      }}
      multiple={isMulti}
      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
    >
      {children}
    </select>
  );
};

export default Select;
