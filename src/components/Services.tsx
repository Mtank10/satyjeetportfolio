import React from 'react';
import { MapPin, Smartphone, Star, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Google Maps Reviews",
      price: "₹13-15",
      unit: "per review",
      icon: <MapPin className="text-red-500" size={48} />,
      features: [
        "Authentic Google account reviews",
        "Local IP addresses",
        "Gradual delivery (1-2 per day)",
        "5-star rating guarantee",
        "30-day refill warranty"
      ],
      popular: false
    },
    {
      title: "App Store Reviews",
      price: "₹16-17",
      unit: "per review",
      icon: <Smartphone className="text-blue-500\" size={48} />,
      features: [
        "iOS & Android app reviews",
        "Real device reviews",
        "Custom review content",
        "Various rating options",
        "24/7 support included"
      ],
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium review services to boost your business credibility and attract more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${service.popular ? 'border-blue-500' : 'border-gray-200'}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-600 ml-2">{service.unit}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Package?</h3>
          <p className="text-gray-600 mb-6">
            Contact us for bulk orders, custom requirements, or enterprise solutions.
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;