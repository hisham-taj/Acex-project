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
        <Route path="/Admin" element={<Admin />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="owner" element={<Owner />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
