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
        <div className="w-[80%] h-[39%] max-md:mt-5 max-md:h-[25%] bg-white flex">
          <div className="w-[20%] max-md:w-[25%]  flex items-center">
            <img
              className="h-[100%]"
              src="/images/img_man-thinking.webp"
              alt=""
            />
          </div>
          <div className="w-[80%]  flex items-center justify-center flex-col">
            <h1 className="text-black text-[12px] md:text-4xl font-heading font-bold">
              Finding it challenging to navigate your assignment requirements?
            </h1>
            <p className="font-heading text-[10px] md:text-xl text-black">
              {" "}
              Ask our experts for help and get it done in no time!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
