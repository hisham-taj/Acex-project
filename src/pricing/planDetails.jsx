// src/components/PlanDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PlanDetails = () => {
  const { plan } = useParams(); // Extract the 'plan' parameter from the URL

  // Plan Details Data
  const planDetails = {
    basic: {
      title: 'Basic Plan',
      price: '$49.99',
      features: [
        '24/7 Customer Support',
        'Basic Analytics',
        '5 GB Storage',
        'Access to Community Forums',
        'Single Device Access',
        'Email Support',
      ],
      description:
        'Get started with all essential tools and support. The Basic Plan provides everything you need to begin your journey at an affordable price.',
      extras: [
        '5-day money-back guarantee',
        'Exclusive 10% discount on first month',
      ],
    },
    standard: {
      title: 'Standard Plan',
      price: '$99.99',
      features: [
        'Everything in Basic',
        'Advanced Analytics',
        '50 GB Storage',
        'Priority Email Support',
        'Multi-Device Access',
        'Monthly Performance Reports',
      ],
      description:
        'The Standard Plan offers more power and features, including advanced analytics and increased storage, perfect for small to mid-sized teams.',
      extras: [
        '10-day money-back guarantee',
        'Exclusive access to premium resources',
      ],
    },
    premium: {
      title: 'Premium Plan',
      price: '$149.99',
      features: [
        'Everything in Standard',
        'Unlimited Storage',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Advanced Security Features',
        'Custom Integrations',
      ],
      description:
        'The Premium Plan provides enterprise-level tools, dedicated support, and custom features, ideal for businesses that need full control.',
      extras: [
        '30-day money-back guarantee',
        'Free setup consultation',
        'Early access to new features',
      ],
    },
  };

  const selectedPlan = planDetails[plan];

  if (!selectedPlan) {
    return <div className="container mx-auto py-16 text-center">Plan not found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white py-20">
      <div className="container mx-auto p-10 bg-gray-800 rounded-xl shadow-2xl relative overflow-hidden">
        {/* Gradient Decoration */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-500 to-pink-500 opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-600 opacity-50 rounded-full blur-3xl"></div>

        {/* Title and Price */}
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 text-center">
            {selectedPlan.title}
          </h1>
          <p className="text-5xl text-gray-300 font-bold mb-8 text-center">
            {selectedPlan.price}
          </p>

          {/* Plan Description */}
          <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            {selectedPlan.description}
          </p>

          {/* Features and Extras Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Extras Section */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out">
              <h2 className="text-3xl font-semibold text-pink-400 mb-4">Additional Benefits</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
                {selectedPlan.extras.map((extra, index) => (
                  <li key={index}>{extra}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition duration-300 ease-in-out">
              Get Started with {selectedPlan.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
