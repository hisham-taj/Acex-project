import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'
import axios from 'axios'

import NavBar from './navbar'


function Admin() {

  
  return (
    <>
    <NavBar />
    <div className='flex w-full bg-pink-300 h-dvh '>
      
      <div className='w-1/6 h-full bg-slate-300 flex flex-col p-8 gap-3 sm:bg-blue-700 max-lg:bg-green-900'>
        <NavLink to='/Admin/dashboard'>Dashboard</NavLink>
        <NavLink to='/Admin/customers'>Customer</NavLink>
        <NavLink to='/Admin/orders'>Order</NavLink>
        <NavLink to='/Admin/owner'>Owner</NavLink>
      </div>
      <div className='w-5/6'>
        <Outlet />
      </div>
    </div>

    </>
  )
}

export default Admin