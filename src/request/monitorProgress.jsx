import React from 'react';

const MonitorProgress = () => {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">Monitor Progress</h1>
      <p className="text-lg mb-4">Keep track of your project's progress in real-time and communicate with your assigned expert.</p>

      {/* Advanced Feature: Progress Bar */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Project Status</h2>
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div className="bg-blue-600 h-6 rounded-full" style={{ width: '70%' }}></div>
        </div>
        <p className="text-lg">70% completed</p>
      </div>

      <div className="mt-6">
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300">
          Contact Expert
        </button>
      </div>
    </div>
  );
};

export default MonitorProgress;
