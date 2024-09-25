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
    <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/logout" element={<Logout />} />
    </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />} >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/owner" element={<Owner />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
