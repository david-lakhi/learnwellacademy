import React, { useState } from 'react';
import { Menu, X, GraduationCap, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'AI Learning', href: '#ai-learning' },
    { name: 'Subjects', href: '#subjects' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-teal-600" />
              <Sparkles className="h-3 w-3 text-orange-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-gray-900">LearnWell Academy</span>
            <span className="text-xs bg-gradient-to-r from-teal-600 to-blue-600 text-white px-2 py-1 rounded-full">AI-Powered</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-blue-700 transition-all duration-200 font-medium shadow-lg">
              Book Free AI Demo
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-blue-700 transition-all duration-200 font-medium">
                Book Free AI Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;