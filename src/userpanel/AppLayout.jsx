import React from "react";
import FooterPage from "./footer";
import { Outlet } from "react-router-dom";
import Header from './Header'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="pt-[12vh] max-md:pt-[10vh]">
        <Outlet />
      </div>

      <FooterPage />
    </div>
  );
};

export default AppLayout;
