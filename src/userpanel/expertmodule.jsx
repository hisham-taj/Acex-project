import React from "react";

const ExpandedModulesCovered = () => {
  const modules = [
    { title: "Marketing", description: "Strategic insights and marketing solutions." },
    { title: "Business", description: "Empower your business acumen." },
    { title: "Information Technology", description: "Cutting-edge IT solutions." },
    { title: "Computer Architecture", description: "Fundamentals of hardware and systems." },
    { title: "Finance", description: "Master finance with expert guidance." },
    { title: "Nursing", description: "Healthcare excellence." },
    { title: "Accounting", description: "Manage finances with expert accounting." },
    { title: "Law", description: "Legal expertise at your fingertips." },
    { title: "HR", description: "Human resources for better workforce management." },
    { title: "Political Science", description: "Understanding political frameworks." },
    { title: "History", description: "Uncover historical events and analysis." },
    { title: "Management", description: "Leadership skills for business success." },
    { title: "Psychology", description: "Insights into human behavior and mind." },
    { title: "Economics", description: "Economics theories and real-world applications." },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 p-6 bg-[#FFB800] bg-[url('images/bullseye-gradient.svg')] bg-[length:100%] bg-no-repeat rounded-lg shadow-lg">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-whit font-bold  mb-2">Modules Covered By Our Experts</h2>
        <p className=" text-md ">We provide expert guidance across a wide variety of academic disciplines.</p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded-lg shadow-md transform transition-all hover:scale-105 cursor-pointer text-black"
          >
            <h3 className="text-lg text-[]  font-semibold mb-1">{module.title}</h3>
            <p className="text-sm">{module.description}</p>
          </div>
        ))}
      </div>

      {/* Assistance Banner */}
      <div className="mt-8 bg-black text-white p-4 rounded-lg shadow-lg text-center ">
        <h3 className="text-2xl font-bold">Need Assistance with Your Assignments?</h3>
        <p className="text-md mt-2">Our experts are ready to guide you through your academic journey!</p>
        <a
          href="#"
          className="mt-3 inline-block bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition-all"
        >
          Get Assistance Now
        </a>
      </div>
    </div>
  );
};

export default ExpandedModulesCovered;
