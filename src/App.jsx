// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./adminLog/PrivateRoute";
import Dashboard from "./adminPages/dashboard";
import Orders from "./adminPages/order";
import Customers from "./adminPages/customers";
import Owner from "./adminPages/owner";
import SignUp from "./adminLog/signup";
import Login from "./adminLog/Login";
import Logout from "./adminLog/Logout";
import Admin from "./AdminComponents/Admin";
import AppLayout from "./userpanel/AppLayout";
import QuoteSection from "./userpanel/price";
import FloatingSidebar from "./userpanel/sidebar";
import ProcessPage from "./userpanel/processpage";
import SubmitRequest from "./request/submitRequest";
import MonitorProgress from "./request/monitorProgress";
import ReceiveWork from "./request/receivework";
import PlanDetails from "./pricing/planDetails";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log('token:', token);
    if(token){
      setIsAuth(true);
    }
    console.log('status: ',isAuth);
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/admin/logout" element={<Logout />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute isAuthenticated={!!localStorage.getItem("token")}>
              <Admin /> 
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="owner" element={<Owner />} />
        </Route>

        {/* User Routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="price" element={<QuoteSection />} />
          <Route path="sidebar" element={<FloatingSidebar />} />
        </Route>

        {/* Request Routes */}
        <Route path="/request" element={<ProcessPage />} />
        <Route path="/submitRequest" element={<SubmitRequest />} />
        <Route path="/monitorProgress" element={<MonitorProgress />} />
        <Route path="/receivework" element={<ReceiveWork />} />

        {/* Plan Details Route */}
        <Route path="/plan-details/:plan" element={<PlanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
