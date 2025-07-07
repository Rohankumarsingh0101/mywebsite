import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import TypewriterText from './TypewriterText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToWork = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Rohan Kumar Singh
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Full-Stack Developer
          </h2>
          
          <div className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-12 h-8">
            <TypewriterText
              texts={['Python', 'Kotlin', 'React', 'AWS', 'AI/ML', 'MERN Stack']}
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
          
          <button
            onClick={handleScrollToWork}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 dark:text-gray-600" size={24} />
      </div>
    </section>
  );
};

export default Hero;