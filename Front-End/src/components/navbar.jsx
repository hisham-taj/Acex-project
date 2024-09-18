import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
      <div className='bg-violet-200 w-full h-20'>
        <div className='flex gap-5 ml-[45rem] justify-center pt-4'>
          <Link exact to='/Nav/signup'>
            <button className='text-black bg-slate-50 w-36'>Signup</button>
          </Link>
          <Link exact to='/Nav/login'> 
            <button className='text-black bg-slate-50 w-36'>Login</button>
          </Link>
          <Link exact to='/Nav/logout'>
            <button className='text-black bg-slate-50 w-36'>Logout</button>
          </Link>
          <Link exact to='/Nav/About'>
            <button className='text-black bg-slate-50 w-36'>About</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar