'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const skills = [
    'Mobile App Developer',
    'DevOps Engineer',
    'Full Stack Developer',
    'UI/UX Designer',
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="hero" className="min-h-screen bg-blue-100 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-4">
            <div className="inline-block">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-base">
                Welcome To My Portfolio
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi There! <span className="inline-block animate-wave">👋</span>
            </h1>

            <div className="space-y-1">
              <p className="text-xl text-gray-700 font-medium">I'M</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tharusha Denuwan
              </h2>
            </div>

            <div className="space-y-1">
              <p className="text-lg text-gray-600">I am a</p>
              <div className="h-14 flex items-center">
                <h3
                  className={`text-2xl md:text-3xl font-bold text-blue-600 transition-all duration-500 ${
                    isAnimating
                      ? 'opacity-0 translate-y-4'
                      : 'opacity-100 translate-y-0'
                  }`}
                >
                  {skills[currentSkillIndex]}
                  <span className="animate-pulse">|</span>
                </h3>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I design and develop responsive, user-friendly web applications, specializing in
                both front-end and back-end development. I focus on creating seamless
                user experiences and efficient, scalable solutions.
              </p>
            </div>

            <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6">
              Let's Connect
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Blue Background Shape (static) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg md:shadow-2xl" 
                     style={{
                       borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                     }}>
                </div>
              </div>
              
              {/* Profile Image (fixed position) */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden" 
                     style={{
                       borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                     }}>
                  <img
                    src="/assets/mynew.png"
                    alt="Tharusha Denuwan"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center top',
                      transform: 'scale(1.1)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-15deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          33% { 
            transform: translateY(-8px) rotate(0.5deg);
            border-radius: 50% 50% 40% 60% / 70% 40% 60% 30%;
          }
          66% { 
            transform: translateY(4px) rotate(-0.5deg);
            border-radius: 70% 30% 50% 50% / 50% 70% 30% 60%;
          }
        }
      `}</style>
    </section>
  );
}