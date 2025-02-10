import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../AdminComponents/navbar";

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
