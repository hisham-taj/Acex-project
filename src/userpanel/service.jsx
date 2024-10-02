import React, { useState } from 'react';

const servicesData = [
  {
    title: 'Assignment Writing Help',
    services: [
      'Conclusion Writing Service',
      'Do My Assignment',
      'ATHE Assignment',
      'HND Assignment',
      'Solve My Assignment',
      'High School Assignment',
      'Resume Writing Help',
      'My Assignment Help',
      'Report Writing',
      'Cheap Assignment Help',
      'University Assignment',
      'BTEC Assignment',
      'Last Minute Assignment',
      'Urgent Assignment',
      'Assignment Proofreading Service',
      'Academic Writing Service',
      'Ghost Writer',
      'Personal Statement Writing Service',
      'Custom Assignment',
      'Assignment Editing Services',
      'CTH Assignment',
      'Make My Assignment',
      'Management Assignment',
      'Assignment Writing Tips',
      'Global Assignment Help',
      'Open Book Exam',
      'Write My Assignment',
    ],
  },
  {
    title: 'Dissertation Help',
    services: [
      'Dissertation Topics',
      'Business Dissertation Topics',
      'Psychology Dissertation Topics',
      'Nursing Dissertation Topics',
      'Fashion Dissertation Topics',
      'Tourism Dissertation Topics',
      'Politics Dissertation Topics',
      'Education Dissertation Topics',
      'Academic Dissertation',
      'Marketing Dissertation Topics',
      'Finance Dissertation Topics',
      'MBA Dissertation Topics',
      'Management Dissertation Topics',
      'English Dissertation Topics',
      'Computer Science Dissertation ',
      'E-Commerce Dissertation Topics',
      'PhD Dissertation',
      'Biology Dissertation',
      'Law Dissertation Topics',
      'Economics Dissertation Topics',
      'History Dissertation Topics',
      'Accounting Dissertation Topics',
      'Human Resource Dissertation Topics',
      'Media Dissertation Topics',
      'Operations Management Dissertation Topics',
      'Engineering Dissertation',
      'Psychology Dissertation',
    ],
  },
  {
    title: 'Coursework Help',
    services: [
      'Java Coursework',
      'Finance Coursework',
      'Science Coursework',
      'Law Coursework',
      'Maths Coursework',
      'Teaching Assistance Level 2',
      'Accounting Coursework',
      'Marketing Coursework',
      'Chemistry Coursework',
      'Pharmacology Coursework',
      'Biology Coursework',
      'Business Coursework',
      'English Coursework',
      'Economics Coursework',
      'College Coursework',
      'Psychology Coursework',
    ],
  },
  {
    title: 'Do My Homework',
    services: [
      'Science',
      'Math',
      'Physics',
      'Management',
      'Nursing',
      'History',
      'C++',
      'Humanities',
      'Primary Homework',
      'Geometry',
      'Biology',
      'Marketing',
      'Finance',
      'Algebra',
      'Probability',
      'Statistics',
      'Law',
      'Chemistry',
      'Business',
      'Accounting',
      'Economics',
      'CPM',
      'HTML',
      'English',
    ],
  },
];

const ServicesDropdown = ({ setIsServicesOpen }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div
      className="absolute left-0 bg-white shadow-lg w-[1000px] mt-6 z-10 border border-gray-200 rounded-lg"
      onMouseEnter={() => setIsServicesOpen(true)}
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <div className="grid grid-cols-4 gap-4 p-4">
        {/* Left column with categories */}
        <div className="col-span-1 bg-gray-100 text-gray-800 p-6 rounded-l-lg border-r border-gray-300">
          <h3 className="font-semibold text-base mb-4 text-gray-700">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {servicesData.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 border-b border-gray-300 hover:text-red-500 ${
                  activeCategory === index ? 'text-red-500' : ''
                }`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                {category.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right columns with services */}
        <div className="col-span-3 grid grid-cols-3 gap-4 text-sm text-gray-800">
          {activeCategory !== null &&
            servicesData[activeCategory].services.map((service, idx) => (
              <ul key={idx} className="space-y-1">
                <li className="hover:text-blue-500">{service}</li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
