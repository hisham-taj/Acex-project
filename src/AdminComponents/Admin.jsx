import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import axios from 'axios'

import Sidebar from '../adminPages/Sidebar'
function Admin() {
  const functionz = () => {

  }
  return (
    <div className='flex w-full bg-pink-300 h-dvh '>
      <div className='w-1/6 h-full bg-slate-300 flex flex-col p-8 gap-3 max-sm:bg-blue-700 max-lg:bg-green-900'>
        <NavLink to='/Admin/dashboard'>Dashboard</NavLink>
        <NavLink to='/Admin/customers'>Customer</NavLink>
        <NavLink to='/Admin/orders'>Order</NavLink>
        <NavLink to='/Admin/owner'>Owner</NavLink>
      </div>
      <div >
        <Outlet />
      </div>
    </div>


  )
}

export default Admin