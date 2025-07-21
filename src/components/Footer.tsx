import React from 'react';
import { GraduationCap, Brain, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-teal-400" />
                <Brain className="h-4 w-4 text-orange-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">LearnWell Academy</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Revolutionizing education through AI-powered personalized learning experiences for students worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">AI Learning</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">How AI Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Personalized Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Progress Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">AI Tutors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Smart Scheduling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Mathematics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Programming</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">hello@learnwellacademy.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-teal-400 mt-1" />
                <span className="text-gray-400">123 Innovation Drive<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 LearnWell Academy. All rights reserved. | Powered by AI Technology
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">AI Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;