import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Rural Communities Through Technology
            </h1>
            <p className="text-xl mb-8">
              Connect with resources, markets, and opportunities to build a sustainable future for your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;