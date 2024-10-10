import React from 'react';

const AssignmentHelpPage = () => {
  return (
    <div className="min-h-auto p-6 ">
      {/* Header */}
         
      <header className="bg-[url('/images/img_circles-gray-02_wide.svg'),url('/images/img_circle-theme-color.svg')] bg-no-repeat  bg-[length:8vh,12vh] bg-[position:top_left,bottom_right] text-center py-8 bg-black text-white shadow-md ">
        <h1 className="text-4xl font-bold max-sm:text-2xl">Premium Assignment Help Services</h1>
        <p className="mt-2 text-lg max-md:text-base">Providing reliable academic assistance tailored to your needs.</p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-10 flex max-md:flex-col">
        {/* Sidebar */}
        <aside className="w-1/4 bg-[#F3F3F3] p-6 rounded-lg shadow-lg border border-gray-200 max-md:w-full">
          <h2 className="text-lg font-bold text-red-700 mb-4">Academic Assistance Includes:</h2>
          <ul className="space-y-4">
            <li className="flex items-center  cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📄</span> Assignments
            </li>
            <li className="flex items-center  cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📚</span> Coursework
            </li>
            <li className="flex items-center cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📝</span> Essays
            </li>
            <li className="flex items-center  cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📑</span> Dissertations
            </li>
            <li className="flex items-center  cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📖</span> Homework
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <main className="w-3/4 bg-[#F3F3F3] p-8 ml-6 rounded-lg shadow-lg border border-gray-200 max-md:w-full max-md:ml-0">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Why Choose Our Assignment Help?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Managing academic assignments can be overwhelming, but our team of skilled experts is here to help.
            We focus on delivering well-researched, accurately formatted, and professional-grade assignments
            that meet your institution's standards, allowing you to focus on what matters most.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-2 ">✔</span>
              <p>In-depth Research</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <p>Flawless Writing</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <p>Keen Proofreading</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              <p>Professional Editing</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Get Expert Assistance
          </button>
        </main>
      </div>
    </div>
  );
};

export default AssignmentHelpPage;
