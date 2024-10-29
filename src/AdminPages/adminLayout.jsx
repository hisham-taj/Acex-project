import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../AdminComponents/navbar";
import Menu from "../AdminComponents/menu";

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <Menu/>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
