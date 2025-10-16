'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 64; // Height of the fixed navigation (h-16 = 64px)
      const elementPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  // Smooth scroll to top function
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', href: '#about', targetId: 'about' },
    { name: 'Skills', href: '#skills', targetId: 'skills' },
    { name: 'Projects', href: '#projects', targetId: 'projects' },
    { name: 'Certifications', href: '#certifications', targetId: 'certifications' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl w-full">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left side - Portfolio Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link
              href="/"
              onClick={handleScrollToTop}
              className="inline-flex items-baseline space-x-1 text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
            >
            <span className="text-3xl sm:text-4xl font-extrabold leading-none text-blue-600">Port</span>
              <span className="text-base sm:text-lg font-medium">folio</span>
            </Link>
          </div>

          {/* Middle - Navigation Items (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.targetId)}
                  className="text-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-blue-700 "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Contact */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} w-full overflow-hidden`}>
        <div className="px-3 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-xl border-t border-white/20 w-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.targetId)}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-blue-50 w-full truncate"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 mt-4 w-full text-center truncate"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
