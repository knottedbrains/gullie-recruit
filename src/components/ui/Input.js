// src/components/ui/Input.js
import React from 'react';

const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border p-2 rounded ${className}`}
      {...props}
    />
  );
};

export default Input;
