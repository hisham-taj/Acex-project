// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './AdminPages/dashboard';
import Orders from './pages/order';
import Customers from './pages/customers';
import Owner from './pages/owner';
import SignUp from './pages/signup';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-gray-50">
        {/* Sidebar */}
        <aside className="w-1/5 bg-gray-900 text-white p-5">
          <h2 className="text-3xl font-semibold mb-8">Admin Dashboard</h2>
          <nav>
            <ul className="space-y-6 text-lg">
              <li>
                <Link to="/Admin/dashboard" className="hover:text-gray-400 transition-colors">🏠 Dashboard</Link>
              </li>
              <li>
                <Link to="/Admin/orders" className="hover:text-gray-400 transition-colors">🛒 Orders</Link>
              </li>
              <li>
                <Link to="/Admin/customers" className="hover:text-gray-400 transition-colors">👥 Customers</Link>
              </li>
              <li>
                <Link to="/Admin/owner" className="hover:text-gray-400 transition-colors">🔧 Owner Settings</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="w-4/5 p-8 relative bg-white shadow-lg">
          {/* Top Right Links */}
          <div className="absolute top-5 right-10 flex items-center space-x-6 text-lg">
            <Link to="/Admin/signup" className="hover:underline text-gray-600 hover:text-gray-900 transition-colors">Sign Up</Link>
            <Link to="/Admin/login" className="hover:underline text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
            <Link to="/Admin/logout" className="hover:underline text-gray-600 hover:text-gray-900 transition-colors">Logout</Link>
          </div>

          <Routes>
            <Route path="/Admin/dashboard" element={<Dashboard />} />
            <Route path="/Admin/orders" element={<Orders />} />
            <Route path="/Admin/customers" element={<Customers />} />
            <Route path="/Admin/owner" element={<Owner />} />
            <Route path="/Admin/signup" element={<SignUp />} />
            <Route path="/Admin/login" element={<Login />} />
            <Route path="/Admin/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
