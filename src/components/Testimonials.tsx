import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Brain, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Parent of Emma (Grade 7)",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The AI-powered learning system is incredible! Emma's math scores improved by 40% in just 3 months. The AI identifies exactly where she struggles and provides targeted practice. It's like having a personal tutor who never gets tired!",
      highlight: "40% improvement in 3 months"
    },
    {
      name: "Mark Thompson",
      role: "Parent of Alex (Grade 5)",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "My son Alex was struggling with reading comprehension. The AI system created a personalized reading plan that adapted to his interests - now he reads 2 hours daily! The progress tracking helps me understand his learning journey.",
      highlight: "From struggling to reading 2 hours daily"
    },
    {
      name: "Jennifer Wu",
      role: "Parent of Sophie (Grade 9)",
      image: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Sophie was intimidated by coding until she started with LearnWell's AI mentor. The AI breaks down complex concepts into digestible pieces and provides instant feedback. She's now building her own apps!",
      highlight: "Now building her own apps"
    },
    {
      name: "David Johnson",
      role: "Parent of twins Maya & Ryan (Grade 6)",
      image: "https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Having twins with different learning styles was challenging. The AI system creates unique learning paths for each child. Maya is visual, Ryan is auditory - the AI adapts perfectly to both!",
      highlight: "Personalized paths for different learning styles"
    },
    {
      name: "Lisa Chen",
      role: "Parent of Daniel (Grade 8)",
      image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The 24/7 AI assistant is a game-changer. Daniel can get help with homework anytime, and the AI explains concepts in multiple ways until he understands. His confidence has soared!",
      highlight: "24/7 AI support boosted confidence"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say About AI Learning</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real families who've experienced the power of AI-enhanced education
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 relative">
            <Quote className="h-12 w-12 text-teal-200 absolute top-4 left-4" />
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-400 to-blue-500 p-1 rounded-full">
                    <Brain className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-3">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-lg italic leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-3 inline-block">
                    <p className="text-sm font-semibold text-teal-600">
                      🎯 {testimonials[currentSlide].highlight}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentSlide].name}</h4>
                  <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join 10,000+ Happy Families</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the transformation that AI-powered learning brings to your child's education journey.
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Your AI Learning Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;