import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const ScrollProgress: React.FC = () => {
  const scrollPosition = useScrollPosition();
  
  const scrollPercentage = Math.min(
    (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
    100
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-100 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default ScrollProgress;