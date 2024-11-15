import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 py-4 px-8">
      <div className="text-2xl ml-4 font-semibold pb-6 border-b border-gray-700">
        Menu
      </div>
      <ul className="mt-6 space-y-4">
        <Link to="/dashboard" className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer">
          <li>
            <HomeIcon className="inline-block w-5 h-5 mr-2" />
            Dashboard
          </li>
        </Link>
        <Link to="/expenses" className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer">
          <li>
            <ChartBarIcon className="inline-block w-5 h-5 mr-2" />
            Expenses
          </li>
        </Link>
        <Link to="/future-expenses" className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer">
          <li>
            <CogIcon className="inline-block w-5 h-5 mr-2" />
            Future Expenses
          </li>
        </Link>
        <Link to="/credit-score" className="flex items-center hover:bg-gray-700 p-3 rounded cursor-pointer">
          <li>
            <CreditCardIcon className="inline-block w-5 h-5 mr-2" />
            CIBIL Score Tracker
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
