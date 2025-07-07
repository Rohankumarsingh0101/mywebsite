import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-5 gap-12 items-center transition-all duration-1000 transform ${
            isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img
                src="/WhatsApp Image 2025-07-07 at 14.28.31.jpeg"
                alt="Rohan Kumar Singh"
                className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Rohan Kumar Singh, a full‑stack developer specializing in AI‑enabled code generation, 
                  cloud‑native architectures, and distributed systems. I build end‑to‑end solutions using 
                  Python, Kotlin, and the MERN stack—delivering real‑time UDP‑to‑WebSocket pipelines for 
                  live radar dashboards and Kubernetes‑managed microservices for high‑traffic e‑commerce platforms.
                </p>
                <p>
                  My AI expertise includes creating LLM‑driven tools that automate boilerplate, cutting 
                  development time by up to 30%. I integrate Prometheus and Splunk to ensure robust 
                  observability across production environments, enabling rapid diagnosis and optimization 
                  of performance bottlenecks.
                </p>
                <p>
                  In defense projects, I engineered a GeoJSON converter that streams Indian Air Force radar 
                  data into interactive maps with dynamic filtering and automated performance tests. At KT 
                  Solutions, I designed AWS‑native infrastructures leveraging S3, SQS, EC2, and Lambda for 
                  scalable microservices.
                </p>
                <p>
                  Driven by clean code, meticulous architecture, and iterative testing, I thrive on 
                  transforming complex requirements into elegant, reliable software. I welcome new challenges 
                  and opportunities to drive innovation through software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;