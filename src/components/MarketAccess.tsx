import React from 'react';
import { Store, TrendingUp, Users } from 'lucide-react';

const MarketAccess = () => {
  return (
    <section id="market" className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Market Access</h2>
        <p className="text-gray-600">Connect directly with buyers and expand your reach</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Featured Products</h3>
          <div className="space-y-4">
            {['Organic Produce', 'Handcrafted Goods', 'Local Specialties'].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{item}</span>
                <button className="text-green-600 hover:text-green-700">View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Market Insights</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Store className="w-6 h-6 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Direct Sales</h4>
                <p className="text-gray-600">Connect with buyers without intermediaries</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Market Trends</h4>
                <p className="text-gray-600">Stay updated with current market demands</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-purple-600" />
              <div>
                <h4 className="font-semibold text-gray-800">Buyer Network</h4>
                <p className="text-gray-600">Access a growing network of verified buyers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAccess;