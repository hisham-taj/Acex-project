import React, { useState } from 'react';
import ServicesDropdown from './service';  // Import the ServicesDropdown component
import CompanyDropdown from './company'; // Import the CompanyDropdown component

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [no, setNO] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/new_logo.png" alt="Logo" className="w-32" />
        </div>

        <div className="flex space-x-[120px]">
          <a href="#" className="text-blue-800 hover:text-blue-600">Home</a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setNO(true)}
              onMouseLeave={() => {
                if (!no) setIsServicesOpen(false);
              }}
              className="text-blue-800 hover:text-blue-600"
            >
              Services
            </button>
            {isServicesOpen && <ServicesDropdown setIsServicesOpen={setIsServicesOpen} />}
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              className="text-blue-800 hover:text-blue-600"
            >
              Company
            </button>
            {isCompanyOpen && <CompanyDropdown setIsCompanyOpen={setIsCompanyOpen} />}
          </div>

          <a href="#" className="text-blue-800 hover:text-blue-600">Blogs</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-4 py-1 text-sm"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Login
          </button>

          {/* Cart Option */}
          <div className="relative">
            <img
              src="/images/cart-icon.png"
              alt="Cart"
              className="w-8 h-8 cursor-pointer"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-2">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
