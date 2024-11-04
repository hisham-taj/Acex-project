// import React, { useState, useRef, useEffect } from "react";
// import NavBar from "./navbar";
// import { Outlet, NavLink, useLocation } from "react-router-dom";
// import { MenuIcon } from "@heroicons/react/outline";

// function Menu() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const menuRef = useRef(null);
//   const buttonRef = useRef(null);
//   const location = useLocation();
//   const isAdminPage = location.pathname === "/admin";
//   const adminName = localStorage.getItem("adminName")

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prevState) => !prevState);
//   };


//   useEffect(() => {
//     // console.log(isSidebarOpen);
//   }, [isSidebarOpen]);

//   const handleClickOutside = (event) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target) &&
//       buttonRef.current &&
//       !buttonRef.current.contains(event.target)
//     ) {
//       setIsSidebarOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <NavBar />
//       <div className="lg:hidden h-[10vh] w-full bg-gray-200 flex">
//         <div className="w-[50%] h-full  flex items-center ">
//           <button
//             ref={buttonRef}
//             className="max-sm:w-[40px] max-sm:h-[40px] max-md:w-[50px] max-md:h-[30px] max-lg:w-[10%] max-lg:bg-[#202A38] text-white p-2 rounded-md flex justify-center items-center text-[10px] max-sm:text-[7px]"
//             onClick={toggleSidebar}
//           >
//             <MenuIcon className="h-3 w-3" />
//           </button>
//         </div>
//         <div className="w-[50%] h-full flex items-center justify-end ">
//           {/* <span className="text-sm text-black mr-3">Welcome </span> */}
//         </div>
//       </div>

//       <div className="flex flex-row   ">
//         <div
//           ref={menuRef}
//           className={`${
//             isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//           } absolute lg:relative lg:translate-x-0 w-[20%] h-screen max-sm:w-[35%]  bg-[#181E27] text-white  p-4 transform transition-transform duration-300 ease-in-out z-10`}
//         >
//           <nav className="flex flex-col gap-3">
//             <NavLink to="/admin/dashboard" onClick={()=> setIsSidebarOpen(false)}>Dashboard</NavLink>
//             <NavLink to="/admin/customers" onClick={()=> setIsSidebarOpen(false)}>Customer</NavLink>
//             <NavLink to="/admin/orders" onClick={()=> setIsSidebarOpen(false)}>Order</NavLink>
//             <NavLink to="/admin/owner" onClick={()=> setIsSidebarOpen(false)}>Profile</NavLink>
//           </nav>
//         </div>
//         <div
//           className={`w-full h-full bg-slate-300 ${
//             isSidebarOpen ? "blur-sm" : ""
//           }`}
//         >
//           {isAdminPage? <AdminContents/> : <Outlet />}
          
//         </div>
//       </div>
//     </>
//   );
// }

// export default Menu;