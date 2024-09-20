import React from "react";

const Button = ({ text }) => {
  return (
    <button className='w-[70%] h-[5vh] bg-red-500 text-white text-sm rounded-lg max-sm:w-[100%] max-sm:text-[13px]'>
      {text}
    </button>
  );
};

export default Button;
// w-[15px] h-[100px] flex items-center  justify-center bg-red-600 text-white rounded-lg hover:bg-red-300 transition-colors duration-300
