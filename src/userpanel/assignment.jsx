import React from 'react';

const AssignmentHelpPage = () => {
  return (
    <div className="min-h-auto bg-gray-50 p-6">
      {/* Header */}
      <header className="text-center py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
        <h1 className="text-4xl font-bold">Premium Assignment Help Services</h1>
        <p className="mt-2 text-lg">Providing reliable academic assistance tailored to your needs.</p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto mt-10 flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-lg font-bold text-blue-700 mb-4">Academic Assistance Includes:</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-blue-700 cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📄</span> Assignments
            </li>
            <li className="flex items-center text-gray-700 cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📚</span> Coursework
            </li>
            <li className="flex items-center text-gray-700 cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📝</span> Essays
            </li>
            <li className="flex items-center text-gray-700 cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📑</span> Dissertations
            </li>
            <li className="flex items-center text-gray-700 cursor-pointer hover:text-blue-900">
              <span className="text-2xl mr-3">📖</span> Homework
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <main className="w-3/4 bg-white p-8 ml-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Our Assignment Help?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Managing academic assignments can be overwhelming, but our team of skilled experts is here to help.
            We focus on delivering well-researched, accurately formatted, and professional-grade assignments
            that meet your institution's standards, allowing you to focus on what matters most.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
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
