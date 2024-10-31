import React from 'react';
import { MapPin, BookOpen, Store, Menu, X, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import ResourceMap from './components/ResourceMap';
import MarketAccess from './components/MarketAccess';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Impact Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-green-600" />}
              title="Resource Mapping"
              description="Locate nearby financial aid, social services, and healthcare facilities with our intuitive mapping tool."
            />
            <FeatureCard 
              icon={<Store className="w-8 h-8 text-blue-600" />}
              title="Market Access"
              description="Connect directly with buyers and expand your reach beyond local markets."
            />
            <FeatureCard 
              icon={<BookOpen className="w-8 h-8 text-purple-600" />}
              title="Educational Portal"
              description="Access free learning resources and skills training for sustainable development."
            />
          </div>
        </section>

        <ResourceMap />
        <MarketAccess />
        <Education />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rural Empowerment</h3>
              <p className="text-gray-400">Bridging the gap between communities and opportunities.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#resources" className="hover:text-white transition">Resources</a></li>
                <li><a href="#market" className="hover:text-white transition">Market</a></li>
                <li><a href="#education" className="hover:text-white transition">Education</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@ruralempowerment.org</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rural Empowerment Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;