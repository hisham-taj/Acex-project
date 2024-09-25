import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/images/new_logo.png" alt="Logo" className="w-32" />
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-blue-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Services</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Company</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Blogs</a>
          <a href="#" className="text-blue-800 hover:text-blue-600">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-4 py-1 text-sm"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Login
          </button>

          {/* Cart Option */}
          <div className="relative">
            <img
              src="/images/cart-icon.png" // Ensure the path to your cart icon image is correct
              alt="Cart"
              className="w-8 h-8 cursor-pointer"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-2">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
