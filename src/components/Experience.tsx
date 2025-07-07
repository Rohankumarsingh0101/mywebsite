import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Bharat Electronics Limited (BEL)',
      role: 'Software Developer Apprentice',
      duration: '2024 - Present',
      location: 'Hyderabad, India',
      achievements: [
        'Developed a real-time UDP-to-WebSocket broadcast service in Python using asyncio that converts raw flight data from the Indian Air Force radar into GeoJSON format, with dynamic API-based filtering for live dashboard updates and automated performance validations.',
        'Designed and implemented a Unified Record Formatter on a MERN stack using React.js and Node.js to process CSV/Excel data from multiple radars and aircraft. This solution performs real-time arithmetic calculations and exports processed results as ZIP-compressed files.',
        'Developed a dynamic full-stack web application using Node.js, Express, and MongoDB that streamlines data management by enabling inline editing, file uploads, and Excel exports for complex platform and route features.'
      ],
      technologies: ['React', 'Node.js', 'Python', 'MATLAB', 'MongoDB']
    },
    {
      id: 2,
      company: 'KT Solutions',
      role: 'Software Developer Intern',
      duration: 'Jun 2024 – Dec 2024',
      location: 'Remote',
      achievements: [
        'Designed scalable e-commerce platforms using React and Node.js; built microservices in Kotlin/Python.',
        'Orchestrated AWS S3, SQS, EC2; implemented Prometheus Splunk observability.',
        'Created LLM-driven code generation tools, reducing dev time by 30%'
      ],
      technologies: ['React', 'Node.js', 'Kotlin', 'Python', 'AWS', 'Prometheus', 'Splunk']
    },
    {
      id: 3,
      company: 'Agneyas Labs',
      role: 'Software Engineering Intern',
      duration: 'Nov 2023 – May 2024',
      location: 'Bangalore, India',
      achievements: [
        'Designed frontend apps with AngularJS and TypeScript.',
        'Built backend services in Python for data processing.',
        'Debugged critical issues to enhance performance.',
        'Managed website deployment on WordPress (Apache2)'
      ],
      technologies: ['AngularJS', 'Python', 'React', 'WordPress', 'PowerBI', 'TypeScript']
    },
    {
      id: 4,
      company: 'Indent',
      role: 'Software Developer Intern',
      duration: '2023',
      location: 'Hyderabad, India',
      achievements: [
        'Engineered a distributed networking platform using React.js, React Native, and TypeScript with MongoDB for scalable user data management.',
        'Developed backend services in Kotlin and Python to support asynchronous workflows via AWS SQS and S3, while incorporating advanced QA methodologies for functional, regression, and progression testing.',
        'Collaborated on integrating LLMs for AI-powered auto-documentation and frontend scaffolding tools, supplemented by automated test scripts for efficient sanity validations.',
        'Enhanced system observability by integrating Splunk and AWS CloudWatch for proactive monitoring, leading to a 30% reduction in latency.',
        'Delivered features following Agile methodologies, actively participating in rigorous test planning, sprint demos, retrospectives, and cross-team code reviews.'
      ],
      technologies: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'AWS', 'Kotlin', 'MongoDB']
    }
  ];

  const nextExperience = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[activeIndex];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A journey through innovative projects and technical excellence
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prevExperience}
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Previous experience"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {currentExperience.company}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {currentExperience.role}
                  </p>
                </div>

                <button
                  onClick={nextExperience}
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Next experience"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-center space-x-4 text-gray-600 dark:text-gray-300">
                  <Calendar size={20} />
                  <span>{currentExperience.duration}</span>
                  <MapPin size={20} />
                  <span>{currentExperience.location}</span>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3 max-w-4xl mx-auto">
                    {currentExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {currentExperience.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === activeIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to experience ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;