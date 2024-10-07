import React, { useState } from 'react';
import ServicesDropdown from './service';  // Import the ServicesDropdown component
import CompanyDropdown from './company'; // Import the CompanyDropdown component

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [no, setNO] = useState(false);

  return (
    <nav className="bg-[#E6EBFF] text-black shadow-md  max-md:hidden">
      <div className="container h-[12vh] max-md:h-[10vh] flex justify-between items-center py-4">
        <div className="w-[10%] h-full max-md:hidden flex items-center">
          <img src="/images/acex_logo_full-removebg-preview.png" alt="Logo" className="w-[70%]" />
        </div>

        <div className="flex space-x-[120px]">
          <a href="#" className="">Home</a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setNO(true)}
              onMouseLeave={() => {
                if (!no) setIsServicesOpen(false);
              }}
              className=""
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
              className=""
            >
              Company
            </button>
            {isCompanyOpen && <CompanyDropdown setIsCompanyOpen={setIsCompanyOpen} />}
          </div>

          <a href="#" className="">Blogs</a>
          <a href="#" className="">Pricing</a>
        </div>

        <div className="flex items-center space-x-4 max-md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-4 py-1 text-sm"
          />
          <button className="bg-[#7191E6] text-white px-4 py-2 rounded-md hover:bg-blue-800">
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
