import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Securing Agricultural Supply Chain',
      description: 'Blockchain-based solution for transparent and secure agricultural supply chain tracking. Implements smart contracts for traceability from farm to consumer, ensuring food safety and authenticity.',
      technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Node.js'],
      image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'ClubSync',
      description: 'Comprehensive club management platform enabling seamless event organization, member management, and real-time communication. Features include automated billing, attendance tracking, and analytics dashboard.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'AI Code Assistant',
      description: 'Intelligent code completion and review assistant powered by machine learning. Provides real-time suggestions, bug detection, and code optimization recommendations.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and analytics. Features customizable widgets, automated reports, and integration with multiple data sources.',
      technologies: ['React', 'D3.js', 'WebSocket', 'Redis', 'MongoDB'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Microservices E-commerce',
      description: 'Scalable e-commerce platform built with microservices architecture. Includes user management, inventory, payments, and order processing services.',
      technologies: ['Kotlin', 'Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'IoT Monitoring System',
      description: 'Comprehensive IoT device monitoring and management system with real-time alerts, predictive maintenance, and energy optimization features.',
      technologies: ['Python', 'MQTT', 'InfluxDB', 'Grafana', 'Raspberry Pi'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    }
  ];

  const handleCardClick = (projectId: number) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Innovative solutions that showcase technical expertise and creative problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 masonry-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => handleCardClick(project.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isIntersecting ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="relative h-80 perspective-1000">
                  <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCard === project.id ? 'rotate-y-180' : ''
                  }`}>
                    {/* Front of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full group-hover:shadow-xl transition-shadow duration-300">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                            {project.featured && (
                              <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium flex items-center">
                              Click to flip <ChevronRight size={16} className="ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg h-full p-6 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">
                          {project.description}
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github size={16} />
                                <span className="text-sm">Code</span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm">Live Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;