import React from 'react';
import { Star, BookOpen, Brain, Award } from 'lucide-react';

const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Mathematics & AI Analytics",
      experience: "8 years",
      rating: 4.9,
      students: 500,
      aiExpertise: "Machine Learning Applications"
    },
    {
      name: "Prof. Michael Rodriguez",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Science & AI Simulations",
      experience: "12 years",
      rating: 4.8,
      students: 750,
      aiExpertise: "Virtual Lab Technologies"
    },
    {
      name: "Ms. Emily Johnson",
      image: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "English & AI Language Tools",
      experience: "6 years",
      rating: 4.9,
      students: 400,
      aiExpertise: "Natural Language Processing"
    },
    {
      name: "Dr. David Kumar",
      image: "https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Programming & AI Development",
      experience: "10 years",
      rating: 4.9,
      students: 600,
      aiExpertise: "Code Intelligence & Automation"
    },
    {
      name: "Ms. Lisa Wang",
      image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "Web Dev & AI Design",
      experience: "7 years",
      rating: 4.8,
      students: 350,
      aiExpertise: "AI-Powered UI/UX Design"
    },
    {
      name: "Prof. James Thompson",
      image: "https://images.pexels.com/photos/5212319/pexels-photo-5212319.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialization: "App Development & AI Integration",
      experience: "9 years",
      rating: 4.9,
      students: 450,
      aiExpertise: "Mobile AI Applications"
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our AI-Powered Mentors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert educators enhanced with AI technology to provide the most effective personalized learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200">
              <div className="text-center">
                <div className="relative mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-teal-400 to-blue-500 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                <p className="text-teal-600 font-semibold mb-1">{mentor.specialization}</p>
                <p className="text-sm text-gray-600 mb-4">{mentor.experience} Experience</p>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{mentor.students}+ students</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span className="text-sm font-medium text-teal-600">AI Expertise</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{mentor.aiExpertise}</p>
                </div>

                <button className="w-full bg-teal-600 text-white py-2 rounded-full hover:bg-teal-700 transition-colors duration-200 font-medium">
                  Book AI Session
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">All Mentors Are AI-Certified</h3>
            <p className="text-lg mb-6 opacity-90">
              Our mentors are specially trained in AI-powered teaching methodologies to maximize learning outcomes through intelligent tutoring systems.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Meet More AI Mentors
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;