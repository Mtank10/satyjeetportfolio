import React from 'react';
import { Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Review
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Boost your business with authentic Google Maps and App Store reviews. 
              Trusted by 200+ businesses across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              View Pricing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Star className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Reviews Delivered</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Users className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Award className="text-purple-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">99%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;