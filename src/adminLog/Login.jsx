import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

function Login({setIsAuth}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      navigate("/admin")
    }
  },[navigate])

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }
    if (!password) {
      setError('Password is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const Data = { email, password };

    if (!validateForm()) return;

    axios
    axios.post(`${import.meta.env.VITE_API_URL}/admin/signup`, Data)
    .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", res.data.token);
        console.log('token stored',res.data.token);
        
        const decoded = jwtDecode(token);         
        const adminName = decoded.userName;
        localStorage.setItem("adminName", adminName);
        console.log('decoded',decoded);
        console.log('admin name : ',adminName);
        console.log("Success:", res.data);
        setIsAuth(true)
        
        setError("");
        navigate("/admin");
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
    <div className="w-full h-screen bg-cover bg-center bg-[url('/images/bg-1.png')] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full bg-white bg-opacity-30 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/acex_logo_full-removebg-preview.png" alt="Logo" className="w-24" />
          <h1 className="text-2xl max-md:text-xl font-bold text-black">Academic Centre for Excellence</h1>
        </div>
        <div>
          <p className="text-gray-700 max-sm:text-sm">Solution for everything</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-opacity-10 bg-[#000000] flex items-center justify-center flex-col p-6 rounded-lg shadow-lg">
        <form onSubmit={handleLogin} className="w-full bg-white p-6 rounded-lg">
          <h1 className="text-center text-xl font-bold mb-6">Login</h1>

          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-lg text-center"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-lg text-center"
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button className="w-full p-3 bg-black text-white rounded-lg text-center" type="submit">
            Login
          </button>
        </form>
        
        <div className="mt-4">
          <button className="text-sm text-blue-700 hover:underline">Forgot Password?</button>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <button
            onClick={() => navigate("/admin/signup")} 
            className="hover:underline font-bold text-black bg-white py-1 px-2 rounded-lg"
          >
            New Admin? Register Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
