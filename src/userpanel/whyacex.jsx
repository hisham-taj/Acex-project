import React from "react";

const WhyAcex = () => {
  const phone = "919544121458";

  return (
    <div className="w-[100%] h-[70vh] max-md:50vh container mx-auto mt-5 bg-[#F3F3F3] flex items-center justify-center bg-no-repeat"
    style={{
      backgroundImage: `
      url('/images/img_circle-additional-dark-016_wide.svg'),
      url('/images/img_circle-dark_thin_big.svg'),
      url('/images/img_circle-dark_thin_big.svg')
    `,
    backgroundSize: "50vh, 8vh, 48vh", 
  backgroundPosition: "-15% 0%, 10% 1%, -10% 0%" 
    }}>
      <div className="w-[80%] h-[70%] flex flex-col">
        <div className="w-full h-[30%]  flex items-end justify-center">
          <h2 className="font-heading  sm:text-[20px] md:text-[30px] lg:text-[36px]  uppercase font-semibold">
            Get in touch with us directly via WhatsApp for immediate assistance.
          </h2>
        </div>
        <div className="w-full h-[40%] flex justify-center items-center">
          <p className="mt-2 text-[14px] md:text-[18px] ">
            Need help right away? Contact us on WhatsApp — we're available 24/7.
          </p>
        </div>
        <div className="w-full h-[30%]  flex justify-center">
          <a
            href={`https://wa.me/${phone}}`} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-[22vw] h-[50%] max-md:w-[32vw] max-md:text-[12px] md:text-[16px] bg-green-500 text-white font-heading font-semibold rounded-[20px] hover:bg-green-600 transition duration-200 flex overflow-hidden items-center justify-center ">
             <span> Chat With Us</span>
             <img className="w-[10%] max-md:w-[12%] m-3" src="/images/whatsapp-svgrepo-com (1).svg" alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyAcex;
