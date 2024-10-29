import React, { useState, useEffect } from "react";
import ServicesDropdown from "./service";
import CompanyDropdown from "./company";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [no, setNO] = useState(false);

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const scrollTop = window.scrollY || document.documentElement.scrollTop;
       setIsScrolled(scrollTop > 30); 
     };
 
     window.addEventListener("scroll", handleScroll);
 
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <>
      <div className="bg-white">
        <nav
          className={`w-full  shadow-md fixed top-0 left-0 z-50 h-[12vh] transition-all duration-300 ${
            isScrolled ? "bg-white text-black" : "bg-[#2D2D2C] text-white"
          }`}
        >
          <div className=" container h-[12vh] max-md:h-[10vh]  flex justify-between items-center py-4">
            <div className="w-[10%] h-full  flex items-center">
              <img
                src="/images/acex_logo_full-removebg-preview.png"
                alt="Logo"
                className="w-[70%]"
              />
            </div>

            <div className="flex space-x-[120px] max-md:hidden">
              <a href="#" className="">
                Home
              </a>

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
                {isServicesOpen && (
                  <ServicesDropdown setIsServicesOpen={setIsServicesOpen} />
                )}
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
                {isCompanyOpen && (
                  <CompanyDropdown setIsCompanyOpen={setIsCompanyOpen} />
                )}
              </div>

              <a href="#" className="">
                Blogs
              </a>
              <a href="#" className="">
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4 max-xl:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md px-4 py-1 text-sm"
              />
              <button className="bg-[#7191E6] text-white px-4 py-2 rounded-md hover:bg-blue-800">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
