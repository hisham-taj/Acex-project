import React, { useState, useEffect } from "react";
// import "@splidejs/splide/css";

const MainBanner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bgStyles = {
    backgroundImage: `
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-theme-color.svg'),
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-theme-color.svg'),
      url('/images/img_circles-yellow.svg')
    `,
    backgroundSize: isSmallScreen
      ? "25vh, 10vh, 4vh, 15vh,4vh, 6vh"
      : "30vh, 15vh, 5vh, 20vh, 5vh, 8vh",
    backgroundPosition: isSmallScreen
      ? "-30% 0%, 90% 1%, 90% 0%, 2% 90%, 2% 80%, 100% 100%"
      : "-10% 0%, 100% 1%, 95% 0%, 1% 100%, 1% 90%, 100% 100%",
  };

  const innerBoxBg = {
    backgroundImage: `
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-theme-color.svg'),
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-theme-color.svg')
      
    `,
    backgroundSize: isSmallScreen
      ? "10vh, 10vh, 4vh, 10vh,4vh"
      : "15vh, 15vh, 5vh, 5vh, 5vh",
    backgroundPosition: isSmallScreen
      ? "-10% 0%, 90% 1%, 90% 0%, 2% 90%, 2% 80%"
      : "-10% 0%, 100% 1%, 95% 0%, 1% 100%, 1% 90%",
  };

  return (
    <>
      <div
        className="bg-[#2D2D2C] text-white w-[100%] h-[70vh] max-md:h-[55vh] bg-no-repeat flex flex-col items-center"
        style={bgStyles}
      >
        <div className="w-full h-[50%] flex justify-center items-center flex-col">
          <h1 className="text-[20px] max-sm:text-base md:text-4xl lg:text-5xl font-heading font-bold uppercase leading-custom">
            Get the Best Assignment Help Online
          </h1>
          <h2 className="mt-6 text-2xl max-md:text-sm text-yellow-300 font-heading font-bold uppercase leading-custom">
            Helping Students Excel Across Prestigious Universities
          </h2>
          <div className="flex ">
            <img
              className="bg-[#434343]"
              src="/images/ico_review-stars.svg"
              alt=""
            />
            <p className="m-2 bg-[#434343]">4.9</p>
            <p className="m-2 text-[14px] italic">
              based on 14423 customer reviews
            </p>
          </div>
        </div>
        <div className="w-[70%] h-[30%] max-md:mt-5 max-md:h-[25%] bg-white rounded-xl flex flex-col bg-no-repeat animate-backgroundShift" style={innerBoxBg}>
  <div className="w-[100%] h-[60%] flex items-center justify-center space-x-4">
    <img className="w-[5vh] " src="/public/images/notebook-svgrepo-com.svg" alt="" />
    <h1 className="text-black text-[12px] md:text-2xl font-heading font-bold text-center ">
      ={">"} Transform Your Assignments, Elevate Your Future
    </h1>
  </div>
  <p className="font-heading text-[10px] md:text-xl text-black text-center mt-2">
    Ask our experts for help and get it done in no time!
  </p>
</div>

      </div>
    </>
  );
};

export default MainBanner;
