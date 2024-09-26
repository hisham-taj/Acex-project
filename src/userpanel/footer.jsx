import React from 'react';

const FooterPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Contact Information */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Contact Us</h3>
          <p className="text-lg">Facing Issues with Assignments?</p>
          <p className="font-semibold text-lg">Talk to Our Experts Now!</p>
          <p className="mt-2">Phone: <span className="text-gray-400">+44 1234 567890</span></p>
          <p>Email: <span className="text-gray-400">help@assignmenthelp.com</span></p>
        </div>

        {/* Top Assignment Searches */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Top Assignment Searches</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-400 transition-all">Do My Assignment</li>
            <li className="hover:text-pink-400 transition-all">Essay Help</li>
            <li className="hover:text-pink-400 transition-all">Dissertation Help</li>
            <li className="hover:text-pink-400 transition-all">Resume Writing Help</li>
            <li className="hover:text-pink-400 transition-all">Coursework Help</li>
            <li className="hover:text-pink-400 transition-all">Thesis Help</li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-400 transition-all">About Us</li>
            <li className="hover:text-pink-400 transition-all">Reviews</li>
            <li className="hover:text-pink-400 transition-all">Contact Us</li>
            <li className="hover:text-pink-400 transition-all">FAQ</li>
            <li className="hover:text-pink-400 transition-all">Experts</li>
          </ul>
        </div>

        {/* Download & Social Media */}
        <div>
          <h3 className="text-2xl font-semibold text-pink-500 mb-4">Download App & Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 transition-all">App Store</a>
            <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 transition-all">Google Play</a>
          </div>
          <h4 className="font-semibold text-lg mt-6">Connect with Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-white hover:text-pink-400 transition-all">Facebook</a>
            <a href="#" className="text-white hover:text-pink-400 transition-all">Twitter</a>
            <a href="#" className="text-white hover:text-pink-400 transition-all">LinkedIn</a>
            <a href="#" className="text-white hover:text-pink-400 transition-all">Instagram</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 AssignmentHelp. All Rights Reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:text-pink-400 transition-all">Refund Policy</a>
          <a href="#" className="hover:text-pink-400 transition-all">Cancellation Policy</a>
          <a href="#" className="hover:text-pink-400 transition-all">Privacy Policy</a>
          <a href="#" className="hover:text-pink-400 transition-all">Terms & Conditions</a>
        </div>
        <p className="mt-4 text-sm">Disclaimer: AssignmentHelp provides custom writing services for reference purposes.</p>
      </div>
    </footer>
  );
};

export default FooterPage;
