
import React, { useState } from 'react';


function Login() {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
  return (
    <div className=" w-full h-screen bg-cover bg-center  bg-[url('/images/bg-1.png')] flex items-center justify-center">
       {/* Transparent box at the top for logo and text */}
       <div className="absolute top-0 left-0 w-full bg-white bg-opacity-30 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/acex_logo_full-removebg-preview.png" alt="Logo" className=" w-24 " />
          <h1 className="text-2xl font-bold text-black">Academic Centre for Excellence</h1>
        </div>
        <div>
          <p className="text-gray-700">Solution for everything</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-opacity-10 bg-[#000000] flex items-center justify-center flex-col p-6 rounded-lg shadow-lg">
        <form action='/signup' method='get' className='w-full bg-white p-6 rounded-lg'>
          <h1 className='text-center text-xl font-bold mb-6'>Login</h1>

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
      </div>
    </div>
  );
}

export default Login;

