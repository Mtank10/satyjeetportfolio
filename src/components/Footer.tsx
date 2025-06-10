import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Shield, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Satyjeet Kumar</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for authentic Google Maps and App Store reviews. 
              Helping businesses grow with genuine customer feedback.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-full">
                <Star size={20} />
              </div>
              <div className="bg-green-600 p-2 rounded-full">
                <Shield size={20} />
              </div>
              <div className="bg-purple-600 p-2 rounded-full">
                <Users size={20} />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <div>
                  <p className="font-medium">+91 6352021720</p>
                  <p className="text-sm text-gray-400">Primary</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={20} />
                <div>
                  <p className="font-medium">+91 6352021720</p>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400" size={20} />
                <div>
                  <p className="font-medium">satyjeet@email.com</p>
                  <p className="text-sm text-gray-400">Business Email</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Office Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1" size={20} />
                <div>
                  <p className="font-medium">Business Address</p>
                  <p className="text-sm text-gray-400">
                    Surender Nagar<br/>
                    Ahemdabad<br/>
                    Gujarat
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="text-yellow-400 mt-1" size={20} />
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-sm text-gray-400">
                    Mon - Sat: 9:00 AM - 8:00 PM<br/>
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#reviews" className="block text-gray-300 hover:text-white transition-colors">
                Client Reviews
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Satyjeet Kumar - Review Services. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-400">Trusted by 500+ businesses</span>
              <div className="flex items-center space-x-1">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-sm text-gray-400">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;