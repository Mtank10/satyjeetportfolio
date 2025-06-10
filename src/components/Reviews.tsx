import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Priya Sharma",
      business: "Sharma Electronics",
      rating: 5,
      text: "Amazing service! Got 50 Google Maps reviews in just 2 weeks. My business visibility increased by 200%. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Amit Gupta",
      business: "Gupta Restaurant",
      rating: 5,
      text: "Professional team with excellent delivery. The reviews looked completely natural and helped us rank higher in local searches.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Sneha Patel",
      business: "Beauty Salon",
      rating: 5,
      text: "Best investment for our salon! Customer trust increased significantly after getting authentic reviews. Worth every rupee!",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rahul Verma",
      business: "Mobile App Developer",
      rating: 5,
      text: "App store reviews service is fantastic! Our app rating improved from 3.2 to 4.8 stars. Downloads increased by 150%.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Kavya Singh",
      business: "Online Store",
      rating: 5,
      text: "Reliable and professional service. They delivered exactly what they promised. Customer support is excellent too!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentReview ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 absolute inset-0 p-8 md:p-12'
                }`}
              >
                <div className="flex items-center justify-center mb-8">
                  <Quote className="text-blue-500 opacity-20" size={64} />
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{review.text}"
                </blockquote>

                <div className="flex items-center justify-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center space-x-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-gray-600">{review.business}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;