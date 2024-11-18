import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-400 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <p className="text-red-500 text-sm mb-2 uppercase">Get Every Single Solution</p>
          <h1 className="text-4xl font-bold text-black mb-4">
            I’m Web Developer <br /> Afan Shehzad
          </h1>
          <p className="text-black mb-6">
            Proactively grow global best practices, enabled by adaptive leadership and 
            advanced teamwork. Pushing boundaries to bring ideas to life.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-950">
              Learn More
            </button>
            <button className="px-6 py-2 border border-gray-800 bg-slate-200 text-gray-800 font-semibold rounded-md hover:bg-slate-300">
              Hire Me
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="../../Home.avif"
            alt="Designer"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
