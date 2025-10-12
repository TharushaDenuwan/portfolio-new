'use client';

import { useState } from 'react';

export default function CertificatesSection() {
  const [visibleCertificates, setVisibleCertificates] = useState(6);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: 'Express Essentials',
      issuer: 'LinkedIn Learning',
      date: '2025',
      description: 'Completed the "Express Essentials: Build Powerful Web Apps with Node.js" course on LinkedIn Learning, gaining hands-on experience in building dynamic, server-side web applications using Express.js and Node.js. Learned to design routes, handle requests and responses, and structure scalable web applications efficiently.',
      image: '/certificates/express.jpg',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/1ee067024122cdc78915ec2a7c952f9cc7aad85b23a2bcb001a215ffc8bbfd03?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmznQXXu%2BRJCJ6U2NQVCbYg%3D%3D',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Middleware'],
      status: 'Verified'
    },
    {
      id: 2,
      title: 'TypeScript Essential Training',
      issuer: 'LinkedIn Learning',
      date: '2025',
      description: 'Completed the "TypeScript Essential Training" course on LinkedIn Learning, gaining a solid understanding of TypeScript’s core features such as static typing, interfaces, generics, and classes. Learned how to enhance JavaScript applications with improved code reliability, scalability, and maintainability.',
      image: '/certificates/ts.jpg',
      credentialUrl: 'https://www.linkedin.com/learning/certificates/b060e534c91daca3e982c8c21191d6670afef9d1af1dbaf83a64f1c4ed86fb8b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BmznQXXu%2BRJCJ6U2NQVCbYg%3D%3D',
      skills: ['TypeScript', 'Generics', 'Interfaces & Types', 'Modules & Namespaces'],
      status: 'Verified'
    },
    {
      id: 3,
      title: 'Java Application Development',
      issuer: 'UCSC',
      date: '2023',
      description: 'Completed Training Course on Java Application Development using JavaSE at the University of Colombo School of Computing (UCSC). Developed proficiency in JavaSE fundamentals, gaining practical skills in building and deploying Java applications.',
      image: '/certificates/java.jpg',
      credentialUrl: '',
      skills: ['Java SE', 'OOP', 'Exception handling', 'Java fundamentals'],
      status: 'Verified'
    },
    {
      id: 4,
      title: 'Foundation Certificate',
      issuer: 'Information Institute of Technology (IIT)',
      date: '2024',
      description: 'Awarded the Foundation Certificate in Higher Education with Distinction from the Informatics Institute of Technology (IIT), demonstrating a high level of academic aptitude and readiness for university-level study in IT',
      image: '/certificates/foundation.jpg',
      credentialUrl: '',
      skills: [''],
      status: 'Verified'
    },
    {
      id: 5,
      title: 'Linux Essentials',
      issuer: 'CISCO',
      date: '2025',
      description: 'Successfully completed the Cisco Networking Academy Linux Essentials course, gaining verified proficiency in Linux system navigation, command-line execution, and fundamental security and file permission management.',
      image: '/certificates/linuxessentials.jpg',
      credentialUrl: 'https://www.credly.com/badges/332cfd33-ee43-441e-a23b-4ef9ee4c9fae/linked_in_profile',
      skills: ['Linux system', 'Linux command line', 'Linux security'],
      status: 'Verified'
    },
    {
      id: 6,
      title: 'Linux Unhatched',
      issuer: 'CISCO',
      date: '2023',
      description: 'Certification focusing on Linux fundamentals, command-line usage, and basic system administration.',
      image: '/certificates/linuxunhatched.jpg',
      credentialUrl: 'https://www.credly.com/badges/2f1a9e27-cef4-4caf-bf37-ce46b2afd495/linked_in_profile',
      skills: ['Linux', 'Command Line', 'System Administration'],
      status: 'Verified'
    },
    
  ];

  // Get visible certificates based on current limit
  const displayedCertificates = certificates.slice(0, visibleCertificates);
  const hasMoreCertificates = certificates.length > visibleCertificates;

  // Handle load more functionality
  const loadMore = () => {
    setVisibleCertificates(prev => prev + 6);
  };

  // Handle certificate image click
  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 pb-20 relative">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Professional certifications and courses that validate my skills and commitment to continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCertificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group hover:scale-105"
            >
              {/* Certificate Image */}
              <div 
                className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                {certificate.image ? (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                    <div className="text-6xl text-blue-600/30">🏆</div>
                  </div>
                )}
                {/* Overlay hint */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    Click to view
                  </div>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    {certificate.status}
                  </span>
                </div>
                {/* Date Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs rounded-full font-medium">
                    {certificate.date}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {certificate.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm">
                    {certificate.issuer}
                  </p>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div>
                  {certificate.credentialUrl ? (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:shadow-lg inline-block"
                    >
                      View Credential
                    </a>
                  ) : (
                    <div className="w-full bg-gray-400 text-white text-center py-2 px-4 rounded-lg font-medium text-sm cursor-not-allowed inline-block">
                      No Online Credential
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        {(hasMoreCertificates || visibleCertificates > 6) && (
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {hasMoreCertificates && (
                <button
                  onClick={loadMore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Load More Certificates ({certificates.length - visibleCertificates} remaining)
                </button>
              )}
              {visibleCertificates > 6 && (
                <button
                  onClick={() => setVisibleCertificates(6)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        )}

        {/* Empty State */}
        {certificates.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No certificates found
            </h3>
            <p className="text-gray-500">
              Certificates will be displayed here once added.
            </p>
          </div>
        )}

        {/* Statistics */}
        {/* <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {certificates.length}
              </div>
              <div className="text-gray-600 font-medium">Total Certificates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {certificates.filter(c => c.status === 'Verified').length}
              </div>
              <div className="text-gray-600 font-medium">Verified</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(certificates.flatMap(c => c.skills)).size}
              </div>
              <div className="text-gray-600 font-medium">Skills Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {new Date().getFullYear() - Math.min(...certificates.map(c => parseInt(c.date)))}+
              </div>
              <div className="text-gray-600 font-medium">Years of Learning</div>
            </div>
          </div>
        </div> */}

        {/* Modal for Certificate Image */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              >
                ✕
              </button>

              {/* Certificate Image */}
              <div className="relative">
                {selectedCertificate.image ? (
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-100 to-blue-200">
                    <div className="text-8xl text-blue-600/30">🏆</div>
                  </div>
                )}
              </div>

              {/* Certificate Info */}
              <div className="p-6 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-lg">
                      {selectedCertificate.issuer} • {selectedCertificate.date}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    {selectedCertificate.status}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedCertificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCertificate.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {selectedCertificate.credentialUrl ? (
                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      View Credential
                    </a>
                  ) : (
                    <div className="flex-1 bg-gray-400 text-white text-center py-3 px-6 rounded-lg font-medium cursor-not-allowed">
                      No Online Credential
                    </div>
                  )}
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
