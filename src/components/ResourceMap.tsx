import React from 'react';
import { MapPin } from 'lucide-react';

const ResourceMap = () => {
  return (
    <section id="resources" className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Resource Mapping</h2>
        <p className="text-gray-600">Find essential services and support in your area</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Financial Aid Centers</h3>
                <p className="text-gray-600">Locate nearby financial institutions and aid programs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Healthcare Facilities</h3>
                <p className="text-gray-600">Find hospitals, clinics, and medical services</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Social Services</h3>
                <p className="text-gray-600">Access government programs and community support</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg h-[300px] flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceMap;