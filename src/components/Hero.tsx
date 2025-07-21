import React from 'react';
import { ArrowRight, Play, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Brain className="h-8 w-8 text-teal-600" />
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">AI-Powered Learning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Personalised Learning
              <span className="text-teal-600"> For Every Child</span>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">with AI Intelligence</span>
                <Sparkles className="h-6 w-6 text-orange-400 ml-2" />
              </div>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the future of education with our AI-powered tutoring platform. Smart algorithms adapt to your child's learning style, providing personalized lessons for students from Class 0-10 worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-teal-700 hover:to-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span>Book Free AI Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="bg-white text-teal-600 px-8 py-4 rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>See AI in Action</span>
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p className="font-medium">Learn Well. Live Well.</p>
              <p>Global Learning, Local Care - Enhanced by AI</p>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children learning with AI technology"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
              <Brain className="h-4 w-4" />
              <span>AI-Enhanced Learning!</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Tutor Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;