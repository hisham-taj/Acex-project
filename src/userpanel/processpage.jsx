import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">How We Make It Happen</h1>
        <p className="mt-3 text-xl text-gray-500">
          Your journey to success begins with us
        </p>
      </header>

      {/* Steps Section */}
      <div className="container mx-auto mt-14">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Step 1 */}
          <Link to="/submitRequest" className="transform hover:scale-105 transition-transform duration-300"> {/* Link to Submit Request page */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-3xl shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Submit Task"
                className="mx-auto mb-6 w-32 h-32 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-orange-700 mb-4">Submit Your Request</h2>
              <p className="text-gray-600">
                Provide details about your task or project. Be as specific as
                possible for the best results.
              </p>
            </div>
          </Link>

          {/* Step 2 */}
          <Link to="/monitorProgress" className="transform hover:scale-105 transition-transform duration-300"> {/* Link to Monitor Progress page */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Track Progress"
                className="mx-auto mb-6 w-32 h-32 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-pink-700 mb-4">Monitor Progress</h2>
              <p className="text-gray-600">
                Stay in the loop by tracking real-time updates and communicate
                with your assigned expert.
              </p>
            </div>
          </Link>

          {/* Step 3 */}
          <Link to="/receivework" className="transform hover:scale-105 transition-transform duration-300"> {/* Link to Receive Work page */}
            <div className="bg-gradient-to-br from-green-100 to-teal-100 p-8 rounded-3xl shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Receive Work"
                className="mx-auto mb-6 w-32 h-32 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-teal-700 mb-4">Receive Your Work</h2>
              <p className="text-gray-600">
                Get your completed task, tailored to perfection, with feedback
                implemented as requested.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-14">
        <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white text-lg rounded-full font-semibold shadow-lg hover:bg-teal-600 transform hover:scale-105 transition-transform duration-300">
          Let’s Start Your Journey
        </button>
      </div>
    </div>

    
  );
};

export default ProcessPage;
