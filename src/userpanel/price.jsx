import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900 text-center">Affordable Pricing</h2>
        <p className="mt-4 text-gray-700 text-center">Choose a package that fits your budget.</p>
        <div className="mt-8 grid grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Basic</h3>
            <p className="text-lg mt-2">$49.99</p>
            <button className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Select Plan
            </button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Standard</h3>
            <p className="text-lg mt-2">$99.99</p>
            <button className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Select Plan
            </button>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800">Premium</h3>
            <p className="text-lg mt-2">$149.99</p>
            <button className="mt-6 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
