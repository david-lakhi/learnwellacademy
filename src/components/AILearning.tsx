import React from 'react';
import { Brain, Target, TrendingUp, Zap, Bot, BookOpen } from 'lucide-react';

const AILearning = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning Paths",
      description: "AI analyzes your child's learning style and creates personalized study plans that evolve with their progress.",
      color: "from-teal-400 to-blue-500"
    },
    {
      icon: Target,
      title: "Intelligent Assessment",
      description: "Real-time evaluation of strengths and weaknesses with instant feedback and targeted improvement suggestions.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Progress Prediction",
      description: "AI forecasts learning outcomes and adjusts difficulty levels to ensure optimal challenge and growth.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Doubt Resolution",
      description: "AI-powered doubt clearing system provides immediate explanations and alternative learning approaches.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Bot,
      title: "24/7 AI Study Companion",
      description: "Your personal AI tutor is always available to help with homework, practice problems, and concept clarification.",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Smart Content Curation",
      description: "AI selects and organizes learning materials based on your child's interests and learning preferences.",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section id="ai-learning" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-teal-600" />
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">AI Technology</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How AI Makes Learning <span className="text-teal-600">Smarter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the revolutionary power of artificial intelligence in education. Our AI technology transforms traditional learning into an intelligent, adaptive, and highly effective experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Brain className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Experience AI-Powered Learning?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students who are already benefiting from our intelligent tutoring system. See how AI can transform your child's learning journey.
            </p>
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Your Free AI Demo Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILearning;