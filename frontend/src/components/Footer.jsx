// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-8 text-center">
      <p>© 2024 TrackU. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
