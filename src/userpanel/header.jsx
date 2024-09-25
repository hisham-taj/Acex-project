import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const Header = () => {
  return (
    <div>
      {/* Gradient Background Wrapper */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white w-full py-2">
        <div className="flex justify-between items-center w-full px-6">
          <div className="text-sm">
            <p>Contact us: +44 7723 580422 | help@assignmentservice.com</p>
          </div>
          <div>
            <a href="#" className="bg-aqua-500 hover:bg-aqua-600 text-white px-4 py-1 rounded-md">
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* NavBar component */}
      <NavBar />

      {/* Outlet for Routing */}
      <Outlet />
    </div>
  );
};

export default Header;
