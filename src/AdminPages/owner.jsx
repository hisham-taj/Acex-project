import React from 'react';

function Owner() {
  const ceoDetails = {
    name: 'Hisham Taj',
    email: 'hisham.taj@example.com',
    phone: '+123-456-7890',
    bio: 'Hisham Taj is an accomplished CEO with over 15 years of experience in the industry. He is passionate about driving innovation and growth.',
    status: 'Active',
    photoUrl: 'https://via.placeholder.com/150' // Replace with actual photo URL
  };

  return (
    <div className="p-6 w-full h-full bg-gradient-to-r from-gray-800 to-gray-400 shadow-lg rounded-lg mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-6 text-center">Profile</h1>

      <div className="flex flex-col items-center mb-6">
        <img
          src={ceoDetails.photoUrl}
          alt={`${ceoDetails.name}'s Photo`}
          className="w-36 h-36 rounded-full border-4 border-white mb-4"
        />
        <h2 className="text-2xl font-bold text-white">{ceoDetails.name}</h2>
        <p className="text-white mb-1">{ceoDetails.email}</p>
        <p className="text-white mb-1">{ceoDetails.phone}</p>
        <p className="text-white">{ceoDetails.bio}</p>
      </div>

      <div className="text-center">
        <p className="text-white">Status: 
          <span className={`font-semibold ${ceoDetails.status === 'Active' ? 'text-green-400' : 'text-red-400'}`}>
            {` ${ceoDetails.status}`}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Owner;
