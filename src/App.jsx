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
import Header from './userpanel/header';
import NavBar from './userpanel/navbar';
import MainBanner from './userpanel/Mainbanner';
import QuoteSection from './userpanel/price';
import FloatingSidebar from './userpanel/sidebar'
import UserHero from './userpanel/UserHero';
import Whyacex from './userpanel/whyacex'
import AssignmentHelpPage from './userpanel/assignment';
import ProcessPage from './userpanel/processpage';
import Carousel from './userpanel/Carousel';
import ExpertModules from './userpanel/expertmodule';
import FaqPage from './userpanel/faqpage';
import FooterPage from './userpanel/footer';
import SalientFeatures from './userpanel/review';
import PlanDetails from './pricing/planDetails';
import SubmitRequest from './request/submitRequest';
import MonitorProgress from './request/monitorProgress';
import ReceiveWork from './request/receivework';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/plan-details/:plan" element={<PlanDetails />} />
      </Routes>
      <Routes>
        <Route path="/admin/signup" element={<SignUp />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/logout" element={<Logout />} />
      </Routes>
      <Routes>
        <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="owner" element={<Owner />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/user" element={<Header />} >
          <Route index element={<UserHero />} />
          <Route path="mainbanner" element={<MainBanner />} />
          <Route path="price" element={<QuoteSection />} />
          <Route path="sidebar" element={<FloatingSidebar />} />

        </Route>
      </Routes>
      <Routes>
        <Route path="/request" element={<ProcessPage />} />
        <Route path="/submitRequest" element={<SubmitRequest/>} />
        <Route path="/monitorProgress" element={<MonitorProgress/>} />
        <Route path="/receivework" element={<ReceiveWork/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
