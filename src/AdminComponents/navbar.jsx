import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../adminLog/Logout";

function NavBar() {
  return (
    <div className="w-full h-[10vh] flex ">
       <div className="w-[20%] h-full max-sm:w-[20%]">
        <Link to="/admin">
          <div className="w-full h-full bg-[url('/images/acex_logo_full-removebg-preview.png')] bg-contain bg-no-repeat bg-center"></div>
        </Link>
      </div>
      <div className="w-[60%] h-full  bg-gradient-to-b from-slate-700 to to-black text-white">
        <div className="w-full h-full flex justify-center items-center  ">
          <h1 className="text-2xl max-sm:text-lg">Admin Panel</h1>
        </div>
      </div>
      <div className="w-[20%]  flex justify-around items-center  ">
        <div className="w-full h-full flex justify-end items-center">
          <LogoutButton/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
