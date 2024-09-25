import React from 'react';

const MainBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-aqua-400 text-white py-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Get the Best Assignment Help Online</h1>
          <p className="mt-6 text-lg">Reliable assistance from professionals, tailored to your needs.</p>
          <div className="mt-8">
            <a href="#" className="bg-white text-blue-800 px-8 py-3 rounded-md shadow-lg hover:bg-gray-100">
              Get Started Now
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Banner Image"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
