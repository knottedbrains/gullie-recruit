// src/components/ui/Switch.js

import React from 'react';

export function Switch({ id, checked, onCheckedChange, className }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className={className}
    />
  );
}

export default Switch;
