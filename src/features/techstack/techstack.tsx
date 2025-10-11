'use client';

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
  const professionalSkills = [
    { name: 'JAVA', img: java, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'HTML', img: html, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'CSS', img: css, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'TAILWIND CSS', img: tailwind, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'NEXT.JS', img: nextjs, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'REACT', img: react, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'NODE.JS', img: nodejs, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'ANGULAR', img: angular, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'SPRINGBOOT', img: springboot, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'JAVASCRIPT', img: javascript, color: 'bg-white text-blue-800 border-blue-200' },
  ];

  const tools = [
    { name: 'VISUAL STUDIO CODE', img: vscode, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'VISUAL STUDIO', img: vs, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'MYSQL', img: mysql, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'SQL', img: sql, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'MONGODB', img: mongodb, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'POSTGRESQL', img: postgresql, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'GITHUB', img: github, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'DOCKER', img: docker, color: 'bg-white text-blue-800 border-blue-200' },
    { name: 'INTELLIJ', img: intellij, color: 'bg-white text-blue-800 border-blue-200' }
  ];

  return (
    <section className="bg-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        
        {/* Professional Skillset Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Skillset
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and programming languages I work with to build amazing applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {professionalSkills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg border-2 cursor-pointer group`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={skill.img.src} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="font-bold text-sm leading-tight">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools I Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Development tools and platforms that help me build, test, and deploy applications efficiently
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`${tool.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg border-2 cursor-pointer group`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={tool.img.src} 
                    alt={tool.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="font-bold text-sm leading-tight">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
