'use client';

import { useState, useRef, useEffect } from 'react';
import java from '../../../public/techstack/javaa.png'
import html from '../../../public/techstack/htmll.png'
import css from '../../../public/techstack/csss.png'
import tailwind from '../../../public/techstack/tailwind.png'
import nextjs from '../../../public/techstack/nextjs.png'
import react from '../../../public/techstack/reactt.png'
import nodejs from '../../../public/techstack/nodejs.png'
import angular from '../../../public/techstack/angular.png'
import springboot from '../../../public/techstack/springboot.png'
import javascript from '../../../public/techstack/javascript.png'

import vscode from '../../../public/techstack/vscode.png'
import vs from '../../../public/techstack/vs.png'
import mysql from '../../../public/techstack/mysql.png'
import sql from '../../../public/techstack/sql.png'
import mongodb from '../../../public/techstack/mongodb.png'
import postgresql from '../../../public/techstack/postgresql.png'
import github from '../../../public/techstack/github.png'
import docker from '../../../public/techstack/docker.png'
import intellij from '../../../public/techstack/intellij.png'

export default function TechStackSection() {
  const [isMobile, setIsMobile] = useState(false);
  const skillsScrollRef = useRef<HTMLDivElement>(null);
  const toolsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? ref.current.scrollLeft - scrollAmount 
        : ref.current.scrollLeft + scrollAmount;
      
      ref.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const professionalSkills = [
    { name: 'JAVA', img: java, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'HTML', img: html, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'CSS', img: css, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'TAILWIND CSS', img: tailwind, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'NEXT.JS', img: nextjs, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'REACT', img: react, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'NODE.JS', img: nodejs, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'ANGULAR', img: angular, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'SPRINGBOOT', img: springboot, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'JAVASCRIPT', img: javascript, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
  ];

  const tools = [
    { name: 'VISUAL STUDIO CODE', img: vscode, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'VISUAL STUDIO', img: vs, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'MYSQL', img: mysql, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'SQL', img: sql, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'MONGODB', img: mongodb, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'POSTGRESQL', img: postgresql, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'GITHUB', img: github, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'DOCKER', img: docker, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' },
    { name: 'INTELLIJ', img: intellij, color: 'bg-white/20 backdrop-blur-md text-gray-800 border-white/30' }
  ];

  return (
    <section id="skills" className="bg-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        
        {/* Professional Skillset Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Professional Skillset
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and programming languages I work with to build amazing applications
            </p>
          </div>

          {/* Sliding Container - Right Direction */}
          <div className="relative">
            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <>
                <button
                  onClick={() => handleScroll(skillsScrollRef, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleScroll(skillsScrollRef, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="overflow-hidden relative">
              <div 
                ref={skillsScrollRef}
                className={`flex whitespace-nowrap ${isMobile ? 'overflow-x-auto scrollbar-hide' : 'animate-slide-right'}`}
                style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
              >
                {/* First set */}
                {professionalSkills.map((skill, index) => (
                  <div
                    key={`first-${index}`}
                    className={`${skill.color} p-6 rounded-2xl text-center hover:scale-105 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border-2 cursor-pointer group hover:border-white/50 flex-shrink-0 mx-3 min-w-[160px]`}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img 
                        src={skill.img.src} 
                        alt={skill.name} 
                        className="w-14 h-14 object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="font-semibold text-sm leading-tight drop-shadow-sm whitespace-normal">
                      {skill.name}
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop - only on desktop */}
                {!isMobile && professionalSkills.map((skill, index) => (
                  <div
                    key={`second-${index}`}
                    className={`${skill.color} p-6 rounded-2xl text-center hover:scale-105 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border-2 cursor-pointer group hover:border-white/50 flex-shrink-0 mx-3 min-w-[160px]`}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img 
                        src={skill.img.src} 
                        alt={skill.name} 
                        className="w-14 h-14 object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="font-semibold text-sm leading-tight drop-shadow-sm whitespace-normal">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Tools I Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Development tools and platforms that help me build, test, and deploy applications efficiently
            </p>
          </div>

          {/* Sliding Container - Left Direction */}
          <div className="relative">
            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <>
                <button
                  onClick={() => handleScroll(toolsScrollRef, 'left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => handleScroll(toolsScrollRef, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white/90 text-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="overflow-hidden relative">
              <div 
                ref={toolsScrollRef}
                className={`flex whitespace-nowrap ${isMobile ? 'overflow-x-auto scrollbar-hide' : 'animate-slide-left'}`}
                style={isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
              >
                {/* First set */}
                {tools.map((tool, index) => (
                  <div
                    key={`first-${index}`}
                    className={`${tool.color} p-6 rounded-2xl text-center hover:scale-105 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border-2 cursor-pointer group hover:border-white/50 flex-shrink-0 mx-3 min-w-[180px]`}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img 
                        src={tool.img.src} 
                        alt={tool.name} 
                        className="w-14 h-14 object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="font-semibold text-sm leading-tight drop-shadow-sm whitespace-normal">
                      {tool.name}
                    </div>
                  </div>
                ))}
                {/* Second set for seamless loop - only on desktop */}
                {!isMobile && tools.map((tool, index) => (
                  <div
                    key={`second-${index}`}
                    className={`${tool.color} p-6 rounded-2xl text-center hover:scale-105 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl border-2 cursor-pointer group hover:border-white/50 flex-shrink-0 mx-3 min-w-[180px]`}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <img 
                        src={tool.img.src} 
                        alt={tool.name} 
                        className="w-14 h-14 object-contain drop-shadow-sm"
                      />
                    </div>
                    <div className="font-semibold text-sm leading-tight drop-shadow-sm whitespace-normal">
                      {tool.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
