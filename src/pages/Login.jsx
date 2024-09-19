import React, { useState } from 'react'
import axios from 'axios';
function Login() {
const [email,setEmail]= useState('')
const [password,setPassword]= useState('')

  return (
    <div>
       <div className='w-96 h-[500px] bg-[#7f897f] flex items-center justify-center flex-col ml-[590px] mt-10' >
            
            <form  action='/signup'  method='get' className= ' w-96 h-96 bg-black rounded-lg '> 
                <h1 className='text-center'>Login</h1>
               
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className='mb-5 rounded-lg text-center ml-24'
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='mb-5 rounded-lg text-center ml-24'
                    onChange={(e) => setPassword(e.target.value)}
                /><br />
               
                <button className='w-20 h-6 text-center text-sm pt-0  ml-36' type='submit'>Login</button>
            </form>
            <div>
            <button>Forget Password</button></div>
            
        </div>
    </div>
    
  )
}

export default Login