import React from "react";
import { Link } from "react-router-dom";
import Button from "../commonComponents/button";

function NavBar() {
  return (
    <div className="w-full h-[15vh] flex border-b-black  mx-auto shadow-md">
      <div className="w-1/6 h-full  bg-[url('/images/acex_logo_full-removebg-preview.png')] bg-contain bg-no-repeat bg-center  max-sm:w-[20%] "></div>
      <div className="w-2/6 h-full   max-sm:w-[33%] ">
        <div className="w-full h-full flex justify-center items-center  ">
          <h1 className="text-4xl max-sm:text-lg">Admin Panel</h1>
        </div>
      </div>
      <div className="w-3/6  flex justify-around items-center  min-sm:w-[50%] ">
        <div className="w-[50%] h-full flex justify-center items-center max-sm:text-[12px]">
          <h3 className="text-center"> Welcome admin!!</h3>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <Button text={"Sign Out"} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
