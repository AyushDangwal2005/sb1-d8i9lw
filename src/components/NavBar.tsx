import React from 'react';
import { Zap } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="border-b border-white/10 backdrop-blur-md bg-black/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 ease-out text-sm font-semibold">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;