import React from "react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate(); // For navigation

  // Function to handle the plan selection
  const handleSelectPlan = (plan) => {
    // Navigate to the plan details page (you can customize the route)
    navigate(`/plan-details/${plan}`);
  };

  return (
    <div
      className="bg-[#FFB800] py-16 bg-no-repeat mt-3"
      style={{
        backgroundImage: `
          url('/images/img_circles-white_wide.svg'),
          url('/images/img_circles-gray-02_wide.svg'),
          url('/images/img_circle-dark_thin_big.svg'),
          url('/images/img_dollar.svg')
        `,
        backgroundSize: "10vh, 45vh, 8vh, 6vh", 
        backgroundPosition: "1% 1%, 90% 95%, 90% 5%, 50% 1%",      }}
    >
      <div className="container mx-auto ">
        <h2 className="text-3xl font-semibold  text-center">
          Affordable Pricing
        </h2>
        <p className="mt-4  text-center">
          Choose a package that fits your budget.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-md:gap-1">
          {/* Basic Plan */}
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold ">Basic</h3>
            <p className="text-lg mt-2">$49.99</p>
            <button
              className="mt-6 bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan("basic")}
            >
              Select Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold ">Standard</h3>
            <p className="text-lg mt-2">$99.99</p>
            <button
              className="mt-6 bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan("standard")}
            >
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold ">Premium</h3>
            <p className="text-lg mt-2">$149.99</p>
            <button
              className="mt-6 bg-black text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan("premium")}
            >
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
