import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";  // Import the required Splide CSS

const MainBanner = () => {
  const logos = [
    <img
      loading="lazy"
      src="/images/stanford-university-logo.jpg"
      alt="Stanford University"
    />,
    <img
      loading="lazy"
      src="/images/university-of-toronto-logo.jpg"
      alt="Toronto University"
      className="w-[12vh]"
    />,
    <img
      loading="lazy"
      src="/images/carleton-university-logo.webp"
      alt="Carleton University"
    />,
    <img loading="lazy" src="/images/columbia-university.webp" alt="" />,
    <img
      loading="lazy"
      src="/images/East_London_University_logo.png"
      alt=""
      className="w-[6vh]"
    />,
    <img
      loading="lazy"
      src="/images/University_of_Hertfordshire_Logo.svg"
      alt=""
      className="w-[18vh] ml-[-50px]"
    />,
    <img
      loading="lazy"
      src="/images/chester-logo.jpg"
      alt=""
      className="w-[12vh]"
    />,
    <img
      loading="lazy"
      src="/images/Cardiff_University_logo_logotype-700x673 22.png"
      alt=""
      className="w-[9vh]"
    />,
    <img loading="lazy" src="/images/coventry.svg" alt="" className="w-10vh" />,
  ];

  const options = {
    type: "loop",
    autoWidth: true,
    autoplay: true,
    interval: 0,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
    speed: 50000,  // Very slow for continuous smooth effect
    resetProgress: false,
  };
  
  return (
    <>
      <div className="bg-gray-700 w-[100%] h-[22vh] text-white">
        <div className="w-full flex justify-center items-center flex-col">
          <h1 className="text-5xl max-md:text-xl font-bold">
            Get the Best Assignment Help Online
          </h1>
          <h2 className="mt-6 text-2xl max-md:text-base font-serif">
            Helping Students Excel Across Prestigious Universities
          </h2>
        </div>
      </div>

      <div className="w-full h-[7vh] flex justify-center items-center overflow-hidden">
        <div className="w-[30%] h-full text-black flex justify-center items-center">
          <p>Trusted by students of :</p>
        </div>

        <div className="w-[70%] h-full flex justify-center items-center overflow-hidden">
        <Splide options={options}>
  {[...logos, ...logos].map((logo, index) => (
    <SplideSlide key={index}>
      <div className="flex justify-center items-center mx-4">
        {logo}
      </div>
    </SplideSlide>
  ))}
</Splide>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
