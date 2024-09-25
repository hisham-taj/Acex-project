// src/components/Customers.jsx
import React from 'react';
import Button from '../commonComponents/button';

function Customers() {
  return (
   
   <div className='flex flex-row gap-8 max-w-6xl h-auto bg-slate-400 mx-auto'>
     <table className='table-auto w-full border '>
      <thead className=''>
        <tr >
          <th className=' w-1/6 max-sm:text-[10px]'>UserId</th>
          <th className=' w-1/6 max-sm:text-[10px]'>Name</th>
          <th className=' w-1/6 max-sm:text-[10px]'>Oreders</th>
          <th className=' w-1/6 max-sm:text-[10px]'>Course</th>
          <th className=' w-1/6 max-sm:text-[10px]'>Project</th>
          <th className=' w-1/6 max-sm:text-[10px]'>Active</th>
        
        </tr>
      </thead>
      <tbody className='border text-auto text-center '>
        <tr>
          <td className='w-1/6 '>loop</td>
          <td className='w-1/6'>loop</td>
          <td className='w-1/6'>loop</td>
          <td className='w-1/6'>loop</td>
          <td className='w-1/6'>loop</td>
          <td className='w-1/6'><Button text={'Block'}/></td>
            </tr>
      </tbody>
    </table>
    
   </div>
  );
}

export default Customers;