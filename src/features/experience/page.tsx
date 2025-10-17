'use client';

export default function ExperiencePage() {
  return (
    <section id="experience" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700">Work Experience</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Selected professional roles and accomplishments that showcase my full-stack engineering experience.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline column */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs">
              <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow">
                <h3 className="text-lg font-semibold text-gray-900">Interaction</h3>
                <p className="text-sm text-gray-600 mt-2">Timeline view — click a role for details</p>
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <div className="text-sm text-gray-700">June 2025 — Present</div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">DONEXT PVT. LTD — Intern (Full‑Stack Engineer)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Intern — Full‑Stack Engineer</h3>
                  <p className="mt-1 text-sm text-gray-600">DONEXT PVT.LTD · June 2025 — Present</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">Full‑Time Intern</span>
                  <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium">Remote</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8">
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li>Developed and maintained full‑stack applications using Next.js, Next.js API routes, and PostgreSQL ensuring responsive design and optimized performance.</li>
                    <li>Implemented CRUD operations for products and hotels with filtering, pagination and search using Drizzle ORM and Zod for input validation and schema enforcement.</li>
                    <li>Integrated AWS deployment pipelines, Git version control, and CI/CD workflows to improve delivery speed and reliability.</li>
                    <li>Collaborated with designers and backend engineers to deliver production‑ready features and maintainable codebases.</li>
                  </ul>
                </div>

                <div className="md:col-span-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-800">Technologies</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Next.js', 'Next.js API', 'PostgreSQL', 'Drizzle ORM', 'Zod', 'AWS', 'Git', 'CI/CD', 'Tailwind CSS', 'React'].map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/60 border border-white/30 text-gray-800 shadow-sm">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <h5 className="text-sm font-semibold text-gray-800">Impact</h5>
                      <p className="text-sm text-gray-600 mt-2">Implemented server-side pagination and efficient queries to reduce load times by up to <strong>30%</strong> for product and hotel listings.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <strong>Highlights:</strong> performance tuning, API design, schema validation, and cloud deployments.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
