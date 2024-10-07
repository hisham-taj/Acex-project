import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const Header = () => {
  return (
    <div className='bg-[#E6EBFF]'>
      {/* Gradient Background Wrapper */}
      <div className="bg-[#E6EBFF] text-black w-full py-2 flex justify-between items-center ">
        
          <div className=" w-[50%] text-[12px]">
            <p>Contact us: +44 7723 580422 | help@assignmentservice.com</p>
          </div>
         
          <div className="w-[50%] h-full  md:hidden lg:hidden xl:hidden  flex justify-end items-center">
          <img src="/images/acex_logo_full-removebg-preview.png" alt="Logo" className="w-[25%]" />
        </div>
        
        
      </div>

      <NavBar />

      <Outlet />
    </div>
  );
};

export default Header;
