'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filters = ['All', 'Group Projects', 'Individual Projects'];

  // Sample projects data - you can replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Student and University Management System',
      description: 'MyUnivrs is a unified student platform designed to enhance campus life. It offers exclusive university chat groups, a student marketplace, real-time event discovery, and housing solutions. The platform connects students in a safe and trusted environment, helping them settle in faster, socialize, trade goods securely, and never miss out on campus activities.',
      category: 'Group Projects',
      technologies: ['Next.js', 'Next.js API', 'PostgreSQL', 'Tailwind CSS', 'Better Auth'],
      image: '/projects/myunivrs.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Hotel Booking System',
      description: 'Bloonsoo is an online hotel booking platform. It allows users to search, filter, and book hotels, view room details, and manage reservations. The platform is built using Next.js for the front end, Next.js API for backend routes, and PostgreSQL for data management, providing a fast, secure, and user-friendly experience.',
      category: 'Group Projects',
      technologies: ['Next.js', 'Next.js API', 'PostgreSQL', 'Tailwind CSS', 'Better Auth'],
      image: '/projects/bloonsoo.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Nursery Management System',
      description: 'Kidlink is a web application designed for nurseries to efficiently manage students, classes, teachers, and parents. It allows tracking of attendance, class schedules, student progress, and lesson plans. The system also provides features for managing notifications, assignments, and parent-teacher communication, ensuring smooth daily operations.',
      category: 'Group Projects',
      technologies: ['Next.js', 'Next.js API', 'PostgreSQL', 'Tailwind CSS', 'Better Auth'],
      image: '/projects/kidlink.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Hotel Booking System',
      description: 'Bloonsoo is an online hotel booking platform. It allows users to search, filter, and book hotels, view room details, and manage reservations. The platform is built using Next.js for the front end, Next.js API for backend routes, and PostgreSQL for data management, providing a fast, secure, and user-friendly experience.',
      category: 'Group Projects',
      technologies: ['Next.js', 'Next.js API', 'PostgreSQL', 'Tailwind CSS', 'Better Auth'],
      image: '/projects/bloonsoo.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Job Management System',
      description: 'This is a web app that connects event organizers and planners on a single platform. The system includes features such as budget filtering, location filtering, a chatbot, and more.',
      category: 'Group Projects',
      technologies: ['Next.js', 'Next.js API', 'PostgreSQL', 'Tailwind CSS', 'Better Auth'],
      image: '/projects/ejobs.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations and optimized performance.',
      category: 'Individual Projects',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: '/projects/portfolio.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 10,
      title: 'Movie Explorer App',
      description: 'A movie discovery platform that allows users to search for and explore movies based on various criteria such as genre, release date, and ratings.',
      category: 'Individual Projects',
      technologies: ['React', 'Axios', 'Node.js'],
      image: '/projects/movieapp.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 11,
      title: 'Flow-Max',
      description: 'An algorithmic system that determines the maximum possible flow or capacity between a source and a sink in a network, optimizing how resources move through connected paths.',
      category: 'Individual Projects',
      technologies: ['Java'],
      image: '/projects/flowmax.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
    {
      id: 12,
      title: 'Ticket-Management-App',
      description: 'A real-time ticket management system that facilitates dynamic interaction between vendors and customers. Vendors release tickets into a shared ticket pool, while customers can purchase them instantly.',
      category: 'Individual Projects',
      technologies: ['Java', 'Node.js', 'React','Axios'],
      image: '/projects/ticket.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: 'Completed'
    },
  ];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Get visible projects based on current limit
  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  // Handle load more functionality
  const loadMore = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Reset visible projects when filter changes
  const handleFilterChange = (filter: string) => {
    // Add a small delay to create smooth transition effect
    setActiveFilter(filter);
    setVisibleProjects(6);
    
    // Scroll to projects section when filter changes (optional smooth scroll)
    const projectsElement = document.getElementById('projects');
    if (projectsElement && filter !== 'All') {
      const navHeight = 64;
      const elementPosition = projectsElement.offsetTop - navHeight - 20; // Extra 20px offset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on, ranging from company collaborations to personal initiatives
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center gap-3 bg-gray-100/50 p-3 rounded-2xl backdrop-blur-sm">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`filter-button px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? 'active bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-md border border-gray-200/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={`${project.id}-${activeFilter}`} // Force re-render on filter change
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:scale-[1.02] animate-fade-in"
              style={{
                animationDelay: `${index * 80}ms`, // Reduced stagger delay
                animationFillMode: 'both'
              }}
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
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
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
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        {(hasMoreProjects || visibleProjects > 6) && (
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {hasMoreProjects && (
                <button
                  onClick={loadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Load More Projects ({filteredProjects.length - visibleProjects} remaining)
                </button>
              )}
              {visibleProjects > 6 && (
                <button
                  onClick={() => setVisibleProjects(6)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        )}

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
