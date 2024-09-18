import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './pages/signup'
import Login from './pages/Login';
import About from './pages/About';
import Logout from './pages/Logout';
import './App.css'
import './index.css'
import Admin from './components/Admin'

function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route> 
      {/* <Route path="/Nav" element={}></Route> */}
      <Route path="/Nav/signup" element={<SignUp />} />
      <Route path="/Nav/login" element={<Login />} />
      <Route path="/Nav/logout" element={<Logout />} />
      <Route path="/Nav/About" element={< About/>} />
      <Route  path='/Admin'  element={ <Admin/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
 

export default App