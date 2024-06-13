// src/components/UserHeader.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, InboxIcon, UserIcon } from './icons';

const UserHeader = () => (
  <header className="w-full bg-white py-4 shadow-sm">
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="gullie-logo-black.png" alt="Gullie Logo" width={120} height={28} />
      </div>
      <nav className="hidden md:flex items-center gap-6 ml-auto">
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium flex flex-col items-center gap-1">
          <BriefcaseIcon className="h-5 w-5" />
          Jobs
        </Link>
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium flex flex-col items-center gap-1">
          <InboxIcon className="h-5 w-5" />
          Inbox
        </Link>
        <Link to="#" className="text-gray-500 hover:text-gray-900 font-medium flex flex-col items-center gap-1">
          <UserIcon className="h-5 w-5" />
          Profile
        </Link>
      </nav>
    </div>
  </header>
);

export default UserHeader;
