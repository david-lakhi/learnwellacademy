import React from 'react';
import { Calculator, Atom, BookOpen, Code, Smartphone, Globe, Brain } from 'lucide-react';

const Subjects = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "AI-powered problem solving from basic arithmetic to advanced calculus",
      aiFeature: "Smart step-by-step solutions",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Atom,
      title: "Science",
      description: "Interactive experiments and AI-generated explanations for Physics, Chemistry, Biology",
      aiFeature: "Virtual lab simulations",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BookOpen,
      title: "English",
      description: "AI-enhanced language learning with personalized reading and writing support",
      aiFeature: "Intelligent grammar correction",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Code,
      title: "Programming",
      description: "Learn C, C++, Java, Python with AI-powered code review and debugging",
      aiFeature: "Real-time code analysis",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Build mobile apps with AI-guided project development and testing",
      aiFeature: "Automated code generation",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Create websites with AI-powered design suggestions and optimization",
      aiFeature: "Smart UI/UX recommendations",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Enhanced Subject Learning</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every subject is supercharged with artificial intelligence to provide personalized, adaptive learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className={`${subject.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100`}>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${subject.color} flex items-center justify-center mb-6 mx-auto`}>
                <subject.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{subject.title}</h3>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">{subject.description}</p>
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Brain className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">{subject.aiFeature}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find Your Subject?</h3>
            <p className="text-gray-600 mb-6">
              Our AI tutoring system is constantly expanding. Contact us to discuss specialized subjects and AI-powered learning solutions.
            </p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors duration-200 font-semibold">
              Explore More Subjects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;