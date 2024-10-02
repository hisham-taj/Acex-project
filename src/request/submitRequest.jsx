import React, { useState } from 'react';

const SubmitRequest = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we can handle form submission logic
  };

  return (
    <div className="min-h-screen bg-blue-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl p-10">
          <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">
            Submit Your Request
          </h1>
          <p className="text-lg text-center text-gray-700 mb-10">
            Fill in the form below with the details of your project or assignment. Attach relevant files to help us better understand your requirements.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Name */}
            <div>
              <label className="block text-blue-800 font-semibold mb-2">Project Name</label>
              <input
                type="text"
                placeholder="Enter project name"
                className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                required
              />
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>
            </div>

            {/* Deadline and Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Deadline</label>
                <input
                  type="date"
                  className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-800 font-semibold mb-2">Priority</label>
                <select className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* Details Section */}
            <div>
              <label className="block text-blue-800 font-semibold mb-2">Details</label>
              <textarea
                placeholder="Describe your task in detail"
                rows="6"
                className="w-full px-5 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                required
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-blue-800 font-semibold mb-2">Upload Files</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="block w-full px-5 py-2.5 border border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              {files.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-700 font-semibold">Files to be uploaded:</p>
                  <ul className="list-disc list-inside text-gray-800">
                    {files.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center mt-10">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold shadow-md hover:bg-blue-800 transform hover:scale-105 transition-transform duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Payment Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Order Summary</h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Assignment</span>
              <span className="text-lg font-bold text-blue-900">SH 8.71</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-700">Discount (25% Off)</span>
              <span className="text-lg font-bold text-green-700">- SH 2.18</span>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xl font-semibold text-gray-900">Total Amount</span>
              <span className="text-xl font-bold text-blue-900">SH 6.53</span>
            </div>

            <button className="w-full bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-pink-700 transition-transform duration-300 transform hover:scale-105">
              Secure Continue
            </button>

            {/* Payment Options */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">Payment & Security</p>
              <div className="flex justify-center space-x-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Visa_2021.svg/512px-Visa_2021.svg.png" alt="Visa" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MasterCard_Logo.svg/512px-MasterCard_Logo.svg.png" alt="MasterCard" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/PayPal_Logo.svg/512px-PayPal_Logo.svg.png" alt="PayPal" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitRequest;
