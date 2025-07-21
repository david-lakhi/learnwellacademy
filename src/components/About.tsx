import React from 'react';
import { Globe, Heart, Target, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About LearnWell Academy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of education through AI-powered personalized learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our AI-Driven Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At LearnWell Academy, we believe every child deserves a personalized learning experience that adapts to their unique needs. Our revolutionary AI technology analyzes learning patterns, identifies strengths and weaknesses, and creates customized learning paths for students from Class 0-10 worldwide.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by educators and technologists, we combine the best of human expertise with artificial intelligence to deliver outcomes that traditional tutoring simply cannot match. Our AI continuously learns from each interaction, making every lesson smarter and more effective.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-600">AI-powered learning available worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Smart Technology</h4>
                  <p className="text-sm text-gray-600">Advanced AI algorithms for personalization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Child-Centric</h4>
                  <p className="text-sm text-gray-600">Designed with children's needs in mind</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Results</h4>
                  <p className="text-sm text-gray-600">AI-driven improvement tracking</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI-powered learning environment"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="h-5 w-5 text-teal-600" />
                <span className="font-semibold text-gray-900">AI Learning Analytics</span>
              </div>
              <p className="text-sm text-gray-600">
                Our AI tracks progress in real-time, adapting lessons to maximize learning outcomes for each student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;