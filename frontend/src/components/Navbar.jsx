import React from "react";
import { MenuIcon, BellIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

// Sample TrackU logo (using an emoji for now)
const TrackULogo = () => (
  <div className="text-white text-4xl font-bold mr-4">📊</div>
);

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md py-4 px-8 flex justify-between items-center">
        {/* Logo and TrackU Name on the left side */}
        <div className="flex items-center">
          <TrackULogo />
          <span className="text-3xl font-extrabold text-indigo-400">TrackU</span>
        </div>

        {/* Centered Dashboard Name */}
        <div className="text-lg font-semibold absolute left-1/2 transform -translate-x-1/2">
          TrackU Dashboard
        </div>

        {/* Right side with customer menu and other icons */}
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <button className="bg-white text-indigo-600 py-2 px-4 rounded-md hover:bg-gray-100">
              Customer Menu
            </button>
            {/* Dropdown menu */}
            <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white text-indigo-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Account</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Expenditures</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Help</a>
            </div>
          </div>
          <BellIcon className="w-6 h-6" />
          <MenuIcon className="w-6 h-6 md:hidden" />
          <div className="relative group">
            <div className="cursor-pointer rounded-full bg-indigo-700 text-white flex items-center justify-center w-10 h-10 border-2 border-white">
              <span className="text-xl font-semibold">P</span>
            </div>
              <div className="absolute right-4 w-48 mt-2 origin-top-right bg-white text-indigo-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile Setting</a>
              <Link to ="/" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Thin white line below the navbar */}
      <div className="border-b border-white"></div>
    </>
  );
};

export default Navbar;
