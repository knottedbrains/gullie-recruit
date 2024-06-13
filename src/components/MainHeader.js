// src/components/MainHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MountainIcon } from './icons';
import Button from './ui/Button';

const MainHeader = () => (
  <header className="w-full bg-white py-4 shadow-sm">
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
      <img src="gullie-logo-black.png" alt="Gullie Logo" width={120} height={28} />

      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium">Jobs</Link>
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium">Employers</Link>
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium">About</Link>
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium">Contact</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="px-4 py-2 rounded-md text-[#EF753E] hover:bg-[#EF753E] hover:text-white">
          Sign In
        </Button>
        <Button className="px-4 py-2 rounded-md bg-[#EF753E] text-white hover:bg-[#e66a37]">Sign Up</Button>
      </div>
    </div>
  </header>
);

export default MainHeader;
