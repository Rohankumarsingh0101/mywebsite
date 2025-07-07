import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Skill {
  name: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'devops' | 'ai';
  color: string;
}

const Skills: React.FC = () => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  const skills: Skill[] = [
    // Frontend
    { name: 'React', proficiency: 95, category: 'frontend', color: '#61DAFB' },
    { name: 'TypeScript', proficiency: 90, category: 'frontend', color: '#3178C6' },
    { name: 'Tailwind CSS', proficiency: 85, category: 'frontend', color: '#06B6D4' },
    { name: 'Next.js', proficiency: 80, category: 'frontend', color: '#000000' },
    
    // Backend
    { name: 'Python', proficiency: 95, category: 'backend', color: '#3776AB' },
    { name: 'Kotlin', proficiency: 85, category: 'backend', color: '#7F52FF' },
    { name: 'Node.js', proficiency: 88, category: 'backend', color: '#339933' },
    { name: 'PostgreSQL', proficiency: 82, category: 'backend', color: '#336791' },
    
    // DevOps
    { name: 'AWS', proficiency: 85, category: 'devops', color: '#FF9900' },
    { name: 'Docker', proficiency: 88, category: 'devops', color: '#2496ED' },
    { name: 'Kubernetes', proficiency: 75, category: 'devops', color: '#326CE5' },
    { name: 'CI/CD', proficiency: 80, category: 'devops', color: '#00D084' },
    
    // AI/ML
    { name: 'TensorFlow', proficiency: 78, category: 'ai', color: '#FF6F00' },
    { name: 'Blockchain', proficiency: 85, category: 'ai', color: '#F7931A' },
    { name: 'Machine Learning', proficiency: 75, category: 'ai', color: '#FF6B6B' },
    { name: 'Web3', proficiency: 82, category: 'ai', color: '#F16822' },
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { name: 'Backend', color: 'from-green-500 to-emerald-500' },
    devops: { name: 'DevOps', color: 'from-orange-500 to-red-500' },
    ai: { name: 'AI/ML & Web3', color: 'from-purple-500 to-pink-500' },
  };

  useEffect(() => {
    if (isIntersecting) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, skill.name]);
        }, index * 100);
      });
    }
  }, [isIntersecting]);

  const getSkillsByCategory = (category: keyof typeof categories) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
        <div
          className="h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            backgroundColor: skill.color,
            width: animatedSkills.includes(skill.name) ? `${skill.proficiency}%` : '0%'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across modern development stack and emerging technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(categories).map(([key, category]) => (
              <div
                key={key}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}>
                    <span className="text-white font-bold text-xl">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {getSkillsByCategory(key as keyof typeof categories).map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full px-8 py-4">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Always learning and adapting to new technologies
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;