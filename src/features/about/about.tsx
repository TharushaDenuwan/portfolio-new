'use client';

export default function AboutSection() {
  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Introduction Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
                LET ME INTRODUCE MYSELF
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Technical Experience
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I have experience in working with languages like <span className="font-semibold text-blue-600">C++</span>, <span className="font-semibold text-blue-600">HTML</span>, <span className="font-semibold text-blue-600">CSS</span>, <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">Spring Boot</span> and <span className="font-semibold text-blue-600">Java</span>.
              </p>
            </div>

            {/* Interests Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Areas of Interest
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                My fields of interest include building new <span className="font-semibold text-blue-600">Web Technologies</span> and products, as well as <span className="font-semibold text-blue-600">Mobile Application Development</span> and <span className="font-semibold text-blue-600">Windows Application Development</span>.
              </p>
            </div>

            {/* Current Focus */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Current Focus
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                I consistently leverage my passion for product development by utilizing <span className="font-semibold text-blue-600">Spring Boot</span>, <span className="font-semibold text-blue-600">Node.js</span> along with Modern Javascript Library and Frameworks such as <span className="font-semibold text-blue-600">React.js</span> and <span className="font-semibold text-blue-600">Next.js</span> whenever possible.
              </p>
            </div>


          </div>

          {/* Right Section - Avatar/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl shadow-lg">
                <img
                  src="/assets/about.png"
                  alt="Tharusha Denuwan - Avatar"
                  className="rounded-2xl w-full max-w-md object-cover shadow-lg"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links - Centered */}
        <div className="mt-16 pt-16 border-t border-gray-200 text-center">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            FIND ME ON
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to connect with me
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/TharushaDenuwan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tharusha-denuwan-b969b8314"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:tharushadenuwan35@gmail.com"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/tharusha_denuwan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
