import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "../index.css";
import { useNavigate } from "react-router-dom";


function SignUp() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/admin');
    }
  })

  const validateForm = () => {
    if (!userName) {
      console.log("usrnm");

      setError("Username is required");
      return false;
    }
    if (userName.length < 3) {
      setError("Username must be at least 3 characters");
      return false;
    }
    if (!email) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const Data = { userName, email, password, confirmPassword };
    if (!validateForm()) return;

    axios
      .post("http://localhost:3000/admin/signup", Data)
      .then((res) => {
        console.log("Success:", res.data);
        setError("");
        navigate("/admin/login");
      })
      .catch((err) => {
        console.error("Error:", err);
        if (err.response && err.response.data) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError("Network error, please try again later.");
        }
      });
  };

  return (
    <div className=" w-full h-screen bg-cover bg-center  bg-[url('/images/17973908.jpg')] flex flex-col">
      {/* Transparent box at the top for logo and text */}
      <div className=" w-full bg-white bg-opacity-30 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/acex_logo_full-removebg-preview.png"
            alt="Logo"
            className=" w-24 "
          />
          <h1 className="text-2xl max-md:text-lg font-bold text-black">
            Academic Centre for Excellence
          </h1>
        </div>
        <div>
          <p className="text-gray-700 max-md:text-sm">
            Solution for everything
          </p>
        </div>
      </div>

      <div className=" w-full h-full flex justify-center  items-center">
        <div className="w-full  max-w-md max-md:w-[70%] max-md:h-[75%]  bg-opacity-10 bg-[#000000] flex items-center justify-center flex-col p-6 rounded-lg shadow-lg">
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={handleSignup} className="space-y-4">
            {" "}
            <h1 className="text-center text-xl font-bold mb-6">Register</h1>
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="w-full p-3 rounded-lg bg-gray-200 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-200 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg bg-gray-200 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-gray-200 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setCPassword(e.target.value)}
            />
            <button
              className="w-full py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all"
              type="submit"
            >
              Signup
            </button>
          </form>

          <div className="mt-4 flex justify-between text-sm text-gray-400">
          <button
          onClick={() => navigate("/admin/login")} 
          className="hover:underline font-bold text-black bg-white py-1 px-2 rounded-lg"
        >
          Already registered? Go to login page
        </button>
          </div>
          {/* <span>or</span>
          <button className="bg-white text-blue-800 text-xl">Signup with Google</button> */}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
