// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './adminPages/dashboard';
import Orders from './adminPages/order';
import Customers from './adminPages/customers';
import Owner from './adminPages/owner';
import SignUp from './adminLog/signup';
import Login from './adminLog/Login';
import Logout from './adminLog/Logout';
import Admin from './AdminComponents/Admin';

function App() {
  return (
    
    <BrowserRouter>

          <Routes>
          <Route path="/Admin" element={<Admin />} />
            <Route path="/Admin/dashboard" element={<Dashboard />} />
            <Route path="/Admin/orders" element={<Orders />} />
            <Route path="/Admin/customers" element={<Customers />} />
            <Route path="/Admin/owner" element={<Owner />} />
            <Route path="/Admin/signup" element={<SignUp />} />
            <Route path="/Admin/login" element={<Login />} />
            <Route path="/Admin/logout" element={<Logout />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
