import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Rohan Kumar Singh
            </h3>
            <p className="text-gray-400 mb-4">
              Full-Stack Developer & AI Code Specialist
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>

          <div className="border-t border-gray-800 pt-6 w-full text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
              <span>© 2024 Rohan Kumar Singh. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;