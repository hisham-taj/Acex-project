import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingSection = () => {
  const navigate = useNavigate(); // For navigation

  // Function to handle the plan selection
  const handleSelectPlan = (plan) => {
    // Navigate to the plan details page (you can customize the route)
    navigate(`/plan-details/${plan}`);
  };

  return (
    <div className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-white text-center">Affordable Pricing</h2>
        <p className="mt-4 text-white text-center">Choose a package that fits your budget.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-[#E8EDFF] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Basic</h3>
            <p className="text-lg mt-2">$49.99</p>
            <button
              className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan('basic')}
            >
              Select Plan
            </button>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Standard</h3>
            <p className="text-lg mt-2">$99.99</p>
            <button
              className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan('standard')}
            >
              Select Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Premium</h3>
            <p className="text-lg mt-2">$149.99</p>
            <button
              className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              onClick={() => handleSelectPlan('premium')}
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
