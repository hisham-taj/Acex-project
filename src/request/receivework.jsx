import React from 'react';

const ReceiveWork = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Receive Your Work</h1>
      <p className="text-lg mb-4">Download your completed task or project and provide feedback for final adjustments if necessary.</p>

      {/* Advanced Feature: Download Section */}
      <div className="bg-white p-6 shadow-md rounded-lg text-center">
        <p className="text-lg text-gray-700 mb-4">Your project is ready to download:</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default ReceiveWork;
