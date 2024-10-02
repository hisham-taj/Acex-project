import React from 'react';

const companyLinks = [
  { title: 'About Us', href: '#' },
  { title: 'Why Choose Us', href: '#' },
  { title: 'Mission & Vision', href: '#' },
  { title: 'Guarantees', href: '#' },
  { title: 'How It Works', href: '#' },
  { title: 'FAQ', href: '#' },
  { title: 'Contact Us', href: '#' },
];

const CompanyDropdown = ({ setIsCompanyOpen }) => {
  return (
    <div
      className="absolute left-0 bg-white shadow-lg w-64 mt-2 z-10 border border-gray-200 rounded-lg"
      onMouseEnter={() => setIsCompanyOpen(true)}
      onMouseLeave={() => setIsCompanyOpen(false)}
    >
      <div className="p-4">
        <ul className="space-y-3">
          {companyLinks.map((link, index) => (
            <li key={index} className="hover:text-blue-600 text-gray-800 text-sm">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDropdown;
