import React, { useState, useEffect } from "react";

const CreativeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [
    {
      title: "Plagiarism Checker",
      description: "Ensure your work is plagiarism-free with a detailed report!",
      img: "https://via.placeholder.com/150",
      bgColor: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
    },
    {
      title: "Essay Typer Tool",
      description: "Generate essays as per your topic requirements effortlessly.",
      img: "https://via.placeholder.com/150",
      bgColor: "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600",
    },
    {
      title: "Grammar Checker",
      description: "Perfect your content by fixing all grammar errors instantly.",
      img: "https://via.placeholder.com/150",
      bgColor: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 4000); // Carousel auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [tools.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-12 p-6  text-[#3D52A0] rounded-lg shadow-2xl transform transition-all hover:scale-105">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-extrabold  mb-4">Explore Our Free Tools</h2>
        <p className=" text-lg">Boost your academic performance with our powerful tools!</p>
      </div>

      {/* Carousel Content */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {tools.map((tool, index) => (
            <div key={index} className="min-w-full flex justify-center items-center p-8">
              <div className={`p-8 rounded-lg shadow-xl text-center ${tool.bgColor} transform transition-all hover:scale-105`}>
                <img src={tool.img} alt={tool.title} className="w-20 h-20 mx-auto mb-6 rounded-full shadow-lg" />
                <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                <p className="text-white text-lg mb-4">{tool.description}</p>
                <a href="#" className="text-white underline font-bold hover:text-yellow-300">Try Now ➜</a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-4 rounded-full shadow-md hover:bg-purple-800 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-4 rounded-full shadow-md hover:bg-purple-800 transition-all"
        >
          &gt;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6">
        {tools.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 mx-1 cursor-pointer rounded-full transition-all ${
              currentIndex === idx ? "bg-purple-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CreativeCarousel;
