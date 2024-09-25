import React, { useState, useRef, useEffect } from "react";
import NavBar from "./navbar";
import { Outlet, NavLink } from "react-router-dom";

function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState); // Toggle the sidebar state
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
      <div className="max-md:block lg:hidden   w-full bg-gray-200 p-4 flex justify-between items-center">
        <button
          ref={buttonRef}
          className="max-sm:block bg-blue-500 text-white p-2 rounded-md"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <span className="ml-auto">Welcome Admin</span>
      </div>

    <div className="flex flex-row   ">
      <div
        ref={menuRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed lg:relative lg:translate-x-0 w-[20%] h-screen max-sm:w-[35%]  bg-gray-700 text-white  p-4 transform transition-transform duration-300 ease-in-out`}
      >
        <nav className="flex flex-col gap-3">
          <NavLink to="/Admin/dashboard">Dashboard</NavLink>
          <NavLink to="/Admin/customers">Customer</NavLink>
          <NavLink to="/Admin/orders">Order</NavLink>
          <NavLink to="/Admin/owner">Owner</NavLink>
        </nav>
      </div>
      <div className="w-full h-screen bg-gray-300">
        <Outlet />
      </div>
      </div>

    </>
  );
}

export default Admin;
