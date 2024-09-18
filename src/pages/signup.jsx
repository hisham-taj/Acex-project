import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import '../index.css';

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const Data = { userName, email, password, confirmPassword };

    axios.post('http://localhost:9990/signup', Data)
      .then(res => {
        console.log("Success:", res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold text-center text-white mb-4">Sign Up</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="userName"
            placeholder="Username"
            className="w-full p-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-gray-200 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400 transition-all" type="submit">
            Submit
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm text-gray-400">
          <button className="hover:underline">Login</button>
          <button className="hover:underline">Forget Password</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
