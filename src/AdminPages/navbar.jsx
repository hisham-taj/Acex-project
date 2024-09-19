import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
  <div className='bg-gray-900 w-[500px] h-20 flex justify-center items-center ml-[00px]'>
    <div className='flex gap-6'>
      <div className='h1 bg-yellow-300'>AceX</div>
      <Link exact to='/Admin/signup'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Signup</button>
      </Link>
      <Link exact to='/Nav/login'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Login</button>
      </Link>
      <Link exact to='/Nav/logout'>
        <button className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-all'>Logout</button>
      </Link>
    </div>
  </div>
</div>

  )
}

export default NavBar