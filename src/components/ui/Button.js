// src/components/ui/Button.js
import React from 'react';
import { HeartIcon } from '../icons';

const Button = ({ children, variant, size, className, ...props }) => {
  let baseStyle = 'px-4 py-2 rounded-md focus:outline-none';
  let variantStyle = '';
  let sizeStyle = '';

  if (variant === 'outline') {
    variantStyle = 'border border-gray-300 text-gray-500 hover:bg-gray-100';
  } else if (variant === 'ghost') {
    variantStyle = 'text-gray-500 hover:bg-gray-100';
  } else {
    variantStyle = 'bg-[#EF753E] text-black hover:bg-[#e66a37]';
  }

  if (size === 'icon') {
    sizeStyle = 'p-2';
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

const FavoriteButton = ({ onClick }) => (
  <Button variant="outline" className="flex items-center gap-2" onClick={onClick}>
    <HeartIcon className="h-5 w-5" />
    Add to favorites
  </Button>
);

const SubmitProfileButton = ({ onClick }) => (
  <Button className="px-4 py-2 rounded-md bg-[#EF753E] text-white hover:bg-[#e66a37]" onClick={onClick}>
    Submit profile for this job
  </Button>
);

export { FavoriteButton, SubmitProfileButton };
export default Button;
