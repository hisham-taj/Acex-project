// src/components/Dashboard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6 w-full h-full bg-gradient-to-r from-gray-800 to-gray-400 shadow-lg rounded-lg mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Total Orders</h2>
          <p className="text-gray-700">Manage and view all your orders.</p>
          <NavLink to="/Admin/orders" className="text-blue-500 hover:underline mt-2 block">
            View Orders
          </NavLink>
        </div>

        {/* Example Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Customers</h2>
          <p className="text-gray-700">View and manage your customer list.</p>
          <NavLink to="/Admin/customers" className="text-blue-500 hover:underline mt-2 block">
            View Customers
          </NavLink>
        </div>

        {/* Example Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <p className="text-gray-700">Manage your account settings.</p>
          <NavLink to="/Admin/owner" className="text-blue-500 hover:underline mt-2 block">
            View Profile
          </NavLink>
        </div>

        {/* Additional Cards as needed */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Reports</h2>
          <p className="text-gray-700">Generate and view reports.</p>
          <NavLink to="/reports" className="text-blue-500 hover:underline mt-2 block">
            View Reports
          </NavLink>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p className="text-gray-700">Adjust your application settings.</p>
          <NavLink to="/settings" className="text-blue-500 hover:underline mt-2 block">
            Go to Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
