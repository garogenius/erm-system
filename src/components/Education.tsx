import React from 'react';
import { BookOpen, Video, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Educational Portal</h2>
        <p className="text-gray-600">Access free learning resources and skills training</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <BookOpen className="w-6 h-6 text-blue-600" />,
            title: 'Courses',
            description: 'Learn entrepreneurship, agriculture, and more',
            items: ['Business Basics', 'Sustainable Farming', 'Digital Skills']
          },
          {
            icon: <Video className="w-6 h-6 text-green-600" />,
            title: 'Video Tutorials',
            description: 'Watch practical demonstrations and guides',
            items: ['Market Strategies', 'Crop Management', 'Financial Planning']
          },
          {
            icon: <Award className="w-6 h-6 text-purple-600" />,
            title: 'Certifications',
            description: 'Earn credentials for your skills',
            items: ['Agriculture Tech', 'Business Management', 'Digital Marketing']
          }
        ].map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {section.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;