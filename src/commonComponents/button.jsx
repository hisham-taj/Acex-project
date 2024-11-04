import React from "react";

const Button = ({ text , onClick}) => {
  return (
    <button onClick={onClick} className='w-[100%] h-[4vh] bg-red-700 text-white text-sm rounded-lg max-sm:w-[95%] max-sm:text-[8px] max-md:text-[13px] max-lg:w-[70%] hover:bg-black '>
      {text} 
    </button>
  );
};

export default Button;
