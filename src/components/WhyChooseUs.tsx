import React from 'react';
import { Award, Clock, Users, Brain, Target, Zap, Globe, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Advanced algorithms adapt to each child's learning style, pace, and preferences for maximum effectiveness.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Certified AI-Enhanced Teachers",
      description: "Expert educators trained in AI-powered teaching methodologies with proven track records.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Intelligent Progress Tracking",
      description: "Real-time AI analytics track progress, identify gaps, and optimize learning paths automatically.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant AI Doubt Resolution",
      description: "24/7 AI assistant provides immediate answers and explanations for any learning challenges.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Flexible AI Scheduling",
      description: "Smart scheduling system adapts to your timezone and finds optimal learning times for your child.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Interactive AI Learning",
      description: "Gamified learning experiences powered by AI to keep children engaged and motivated.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Global AI Network",
      description: "Access to worldwide AI-powered resources and peer learning opportunities.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Safe AI Environment",
      description: "Child-safe AI interactions with parental controls and privacy protection built-in.",
      color: "from-gray-500 to-gray-700"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI-Powered Learning?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with our intelligent tutoring system that adapts, learns, and grows with your child
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <Brain className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The AI Advantage</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our AI doesn't just deliver content—it understands your child's unique learning patterns, emotional state, and optimal study times to create truly personalized education experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors duration-200 font-semibold">
                Experience AI Learning
              </button>
              <button className="bg-white text-teal-600 px-8 py-3 rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200 font-semibold">
                Learn More About Our AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;