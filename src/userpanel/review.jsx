import React from 'react';

const SalientFeatures = () => {
  return (
    <div className="bg-black bg-[url('images/endless-constellation.svg')] text-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-center  mb-6">Salient Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Feature 1 */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-yellow-300">40+</h3>
          <p className="mt-2 text-lg">Subjects Covered</p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-yellow-300">400+</h3>
          <p className="mt-2 text-lg">Topics Covered</p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-yellow-300">150+</h3>
          <p className="mt-2 text-lg">University Courses Covered</p>
        </div>
      </div>

      <div className="border-t border-gray-600 my-8"></div>

      {/* Reviews Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-xl font-semibold">Our Customers Love Us!</p>
        <div className="flex items-center mt-4">
          <span className="text-[#F8E71C] text-3xl">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <p className="ml-4 ">Rated 4.7/5 based on 5563 customer reviews</p>
        </div>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-all">Review Us</button>
      </div>

      <p className="text-center mt-8  text-sm">Recommended by 85,090+ Students and more than 900 Academic Writing Experts</p>
    </div>
  );
};

export default SalientFeatures;
