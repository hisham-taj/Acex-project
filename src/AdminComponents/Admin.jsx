import React, { useState, useRef, useEffect } from "react";
import NavBar from "./navbar";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";


function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin" || location.pathname === "/admin/";
  const adminName = localStorage.getItem("adminName")
  console.log(adminName);
  
  

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div className="lg:hidden h-[10vh] w-full bg-gray-200 flex">
        <div className="w-[50%] h-full  flex items-center ">
          <button
            ref={buttonRef}
            className="max-sm:w-[40px] max-sm:h-[40px] max-md:w-[50px] max-md:h-[30px] max-lg:w-[10%] max-lg:bg-[#202A38] text-white p-2 rounded-md flex justify-center items-center text-[10px] max-sm:text-[7px]"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-3 w-3" />
          </button>
        </div>
        <div className="w-[50%] h-full flex items-center justify-end ">
          <span className="text-sm text-black mr-3">Welcome {adminName}!!</span>
        </div>
      </div>

      <div className="flex flex-row   ">
        <div
          ref={menuRef}
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } absolute lg:relative lg:translate-x-0 w-[20%] h-screen max-sm:w-[35%]  bg-[#181E27] text-white  p-4 transform transition-transform duration-300 ease-in-out z-10`}
        >
          <nav className="flex flex-col gap-3">
            <NavLink to="/admin/dashboard" onClick={()=> setIsSidebarOpen(false)}>Dashboard</NavLink>
            <NavLink to="/admin/customers" onClick={()=> setIsSidebarOpen(false)}>Customer</NavLink>
            <NavLink to="/admin/orders" onClick={()=> setIsSidebarOpen(false)}>Order</NavLink>
            <NavLink to="/admin/owner" onClick={()=> setIsSidebarOpen(false)}>Profile</NavLink>
          </nav>
        </div>
        <div
          className={`w-full h-full bg-slate-300 ${
            isSidebarOpen ? "blur-sm" : ""
          }`}
        >
          { <Outlet />}
          
        </div>
      </div>
    </>
  );
}

export default Admin;



export const AdminContents = () => {

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4 ">
        Welcome to Acex Admin Panel
      </h2>
      <p className="text-lg mb-6 font-serif">
        Manage and monitor all operations of Acex, the assignment-helping firm.
        From here, you can access key metrics, review recent activities, and
        navigate to various management sections.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Total Orders</h3>
          <p className="text-2xl mt-2">350</p>
          <p className="text-sm text-gray-500 mt-1">
            Assignments processed so far
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Active Customers</h3>
          <p className="text-2xl mt-2">120</p>
          <p className="text-sm text-gray-500 mt-1">Current active customers</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Pending Assignments</h3>
          <p className="text-2xl mt-2">25</p>
          <p className="text-sm text-gray-500 mt-1">
            Assignments waiting to be completed
          </p>
        </div>
      </div>


      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
        <ul className="list-disc ml-6">
          <li>New customer John Doe registered</li>
          <li>Assignment #12345 for Mathematics was submitted</li>
          <li>Order #56789 completed for Jane Smith</li>
          <li>Profile updated for customer Peter Parker</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
          <NavLink to="/Admin/orders" className="text-xl font-semibold">
            Manage Orders
          </NavLink>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg text-center">
          <NavLink to="/Admin/customers" className="text-xl font-semibold">
            Manage Customers
          </NavLink>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg text-center">
          <NavLink to="/Admin/reports" className="text-xl font-semibold">
            View Reports
          </NavLink>
        </div>
      </div>
    </div>
  );
};
