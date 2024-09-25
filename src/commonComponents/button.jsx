import React from "react";

const Button = ({ text }) => {
  return (
    <button className='w-[30%] h-[4vh] bg-red-700 text-white text-sm rounded-lg max-sm:w-[75%] max-sm:text-[10px] max-md:text-[13px] max-lg:w-[60%] hover:bg-black '>
      {text}
    </button>
  );
};

export default Button;
// w-[15px] h-[100px] flex items-center  justify-center bg-red-600 text-white rounded-lg hover:bg-red-300 transition-colors duration-300
