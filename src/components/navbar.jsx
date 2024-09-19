import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
  <div className='bg-gray-900 w-full h-20 flex justify-center items-center'>
    <div className='flex gap-6'>
      <Link exact to='/Nav/signup'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Signup</button>
      </Link>
      <Link exact to='/Nav/login'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Login</button>
      </Link>
      <Link exact to='/Nav/logout'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Logout</button>
      </Link>
      <Link exact to='/Nav/About'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>About</button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default NavBar