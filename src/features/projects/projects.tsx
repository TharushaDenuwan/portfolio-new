'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Group Projects', 'Individual Projects'];

  // Sample projects data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Event Management System',
      description: 'This is a web app that connects event organizers and planners on a single platform. The system includes features such as budget filtering, location filtering, a chatbot, and more.',
      category: 'Group Projects',
      technologies: ['React', 'Node.js', 'Mongodb', 'Github'],
      image: '/projects/extravaganza.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Student Management System (CLI)',
      description: 'This is a Java-based application designed to help manage personal finances efficiently. The system allows users to add, remove, and update student financial records, providing a simple and organized way to track and manage expenses, budgets, and financial data.',
      category: 'Individual Projects',
      technologies: ['Java'],
      image: '/projects/studentms.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'website on Affordable and clean energy',
      description: 'This is a web platform that promotes affordable and clean energy solutions. The system provides insights into renewable energy sources, cost-effective alternatives, and sustainable practices.',
      category: 'Group Projects',
      technologies: ['Html', 'CSS', 'JavaScript'],
      image: '/projects/energy.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations and optimized performance.',
      category: 'Individual Projects',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: '/projects/portfolio.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.',
      category: 'Group Projects',
      technologies: ['Flutter', 'Firebase', 'Node.js'],
      image: '/projects/banking.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather dashboard with location-based forecasts, interactive maps, and weather alerts. Integrates with multiple weather APIs.',
      category: 'Individual Projects',
      technologies: ['React', 'Weather API', 'Chart.js'],
      image: '/projects/weather.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on, ranging from company collaborations to personal initiatives
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-2 rounded-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                    <div className="text-6xl text-blue-600/30">📁</div>
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full whitespace-nowrap ml-2">
                    {project.category === 'Group Projects' ? 'Group' : 'Personal'}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">📂</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}

        {/* Statistics */}
        {/* <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 font-medium">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-gray-600 font-medium">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {projects.filter(p => p.category === 'Company Projects').length}
              </div>
              <div className="text-gray-600 font-medium">Company Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.filter(p => p.category === 'Individual Projects').length}
              </div>
              <div className="text-gray-600 font-medium">Personal Projects</div>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
