import React from 'react';

const FloatingSidebar = () => {
  return (
    <div className="fixed right-0 top-1/3 space-y-4">
      <div className="bg-blue-700 text-white py-2 px-4 rounded-l-md shadow-md">
        <span>35% OFF</span>
      </div>
      <div className="bg-aqua-500 text-white py-2 px-4 rounded-l-md shadow-md">
        <span>Live Chat</span>
      </div>
    </div>
  );
};

export default FloatingSidebar;
