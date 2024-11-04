import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../commonComponents/button";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };
  return (
    <div className="w-[15vw]">
      <Button  onClick={handleLogout} text={"Sign Out"}  />
    </div>
  );
}

export default LogoutButton;
