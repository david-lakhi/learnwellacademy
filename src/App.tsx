import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AILearning from './components/AILearning';
import Subjects from './components/Subjects';
import Mentors from './components/Mentors';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <AILearning />
      <Subjects />
      <Mentors />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;