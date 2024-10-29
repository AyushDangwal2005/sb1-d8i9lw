import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              The Future of Digital
            </span>
            <br />
            <span className="text-white">
              Is Already Here
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Experience breakthrough technology that pushes the boundaries of what's possible. Welcome to the next evolution of digital innovation.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 ease-out font-semibold">
              Get Started
            </button>
            <button className="border border-cyan-500/50 px-8 py-4 rounded-full hover:bg-cyan-500/10 transition-colors duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute top-1/2 right-48 transform -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
    </div>
  );
};

export default HeroSection;