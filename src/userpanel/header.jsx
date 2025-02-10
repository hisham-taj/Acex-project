import React, { useState, useEffect, useRef } from "react";
import ServicesDropdown from "./service";
import CompanyDropdown from "./company";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef(null);
  const companyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setIsCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white w-full">
        <nav
          className={`w-full shadow-md fixed z-50 h-[12vh] transition-all duration-300 ${
            isScrolled ? "bg-white text-black" : "bg-[#2D2D2C] text-white"
          }`}
        >
          <div className="container w-full h-[12vh] max-md:h-[10vh] flex justify-between items-center py-4">
            <div className="w-[10%] h-full flex items-center">
              <img
                src="/images/acex_logo_full-removebg-preview.png"
                alt="Logo"
                className="w-[70%]"
              />
            </div>
          
            {/* Hamburger Menu for Mobile */}
            <button
              className="md:hidden text-xl "
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              ☰
            </button>
          
            {/* Main Navigation */}
            <div className="hidden md:flex space-x-[120px]">
              <a href="#" className="">
                Home
              </a>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className=""
                >
                  Services
                </button>
                {isServicesOpen && (
                  <ServicesDropdown setIsServicesOpen={setIsServicesOpen} />
                )}
              </div>

              {/* Company Dropdown */}
              <div ref={companyRef} className="relative">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
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

            {/* Search & Login */}
            <div className="hidden md:flex items-center space-x-4">
              
            </div>
          </div>
        </nav>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="fixed top-0 left-0 w-[70%] h-full bg-[#2D2D2C] text-white z-50 flex flex-col p-6 shadow-lg">
            <button
              className="self-end text-2xl mb-4"
              onClick={() => setIsSidebarOpen(false)}
            >
              ✖
            </button>
            <a href="#" className="mb-4">
              Home
            </a>
            <a href="#" className="mb-4">
              Services
            </a>
            <a href="#" className="mb-4">
              Company
            </a>
            <a href="#" className="mb-4">
              Blogs
            </a>
            <a href="#" className="mb-4">
              Pricing
            </a>
            
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
