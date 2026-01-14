import { Code, Smartphone, Cloud, Database, Globe, Lock, Zap, Layers } from 'lucide-react';

export default function Software() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React & Next.js', 'Progressive Web Apps', 'Real-time features', 'SEO optimized'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      features: ['React Native', 'Native performance', 'Offline support', 'Push notifications'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Database,
      title: 'AI Dashboards',
      description: 'Intelligent dashboards with real-time analytics and insights',
      features: ['Data visualization', 'Real-time updates', 'Custom metrics', 'Interactive reports'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Systems',
      description: 'Scalable cloud solutions with enterprise-grade infrastructure',
      features: ['AWS & Azure', 'Microservices', 'Auto-scaling', 'Load balancing'],
      gradient: 'from-pink-500/20 to-cyan-500/20',
    },
  ];

  const mernStack = [
    {
      icon: Database,
      name: 'MongoDB',
      description: 'NoSQL database for flexible data storage',
      color: 'text-green-400',
    },
    {
      icon: Code,
      name: 'Express.js',
      description: 'Fast, minimalist web framework',
      color: 'text-gray-400',
    },
    {
      icon: Layers,
      name: 'React',
      description: 'Component-based UI library',
      color: 'text-cyan-400',
    },
    {
      icon: Zap,
      name: 'Node.js',
      description: 'JavaScript runtime environment',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="relative">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <Code className="w-20 h-20 text-cyan-400 mx-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Software Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Full-stack development expertise delivering scalable, secure, and intelligent software solutions
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Software Services</h2>
            <p className="text-gray-400 text-lg">End-to-end development for modern applications</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, fIndex) => (
                      <div
                        key={fIndex}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-slate-900/50 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              MERN Stack Expertise
            </h2>
            <p className="text-gray-400 text-lg">Full-stack JavaScript development at its finest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mernStack.map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                  <tech.icon className={`w-10 h-10 ${tech.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Why MERN Stack?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The MERN stack provides a complete JavaScript solution from database to frontend,
                  enabling faster development, better code reusability, and seamless data flow between
                  all layers of your application.
                </p>
                <div className="space-y-3">
                  {[
                    'Single language across full stack',
                    'High performance and scalability',
                    'Rich ecosystem of libraries',
                    'Fast development cycles',
                    'Strong community support',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden border border-cyan-500/20">
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-8">
                    {mernStack.map((tech, i) => (
                      <div
                        key={i}
                        className="bg-slate-900/50 rounded-lg border border-cyan-400/30 flex items-center justify-center animate-pulse"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '3s',
                        }}
                      >
                        <tech.icon className={`w-12 h-12 ${tech.color}`} />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-4 border-cyan-400/30 rounded-full"></div>
                    <div className="absolute w-24 h-24 border-4 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Enterprise Software Solutions</h2>
            <p className="text-gray-400 text-lg">Robust systems for business-critical operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: 'Security First',
                description: 'Enterprise-grade security with encryption, authentication, and compliance',
                features: ['OAuth 2.0 & JWT', 'Data encryption', 'GDPR compliant', 'Regular security audits'],
              },
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Optimized for speed with caching, CDN, and efficient algorithms',
                features: ['Redis caching', 'Database optimization', 'CDN integration', 'Code splitting'],
              },
              {
                icon: Cloud,
                title: 'Cloud Native',
                description: 'Built for the cloud with containerization and orchestration',
                features: ['Docker containers', 'Kubernetes ready', 'CI/CD pipelines', 'Multi-region support'],
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <solution.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{solution.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Development Process</h2>
            <p className="text-gray-400 text-lg">Agile methodology for rapid, iterative development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Planning', description: 'Requirements gathering and architecture design' },
              { step: '02', title: 'Design', description: 'UI/UX design and database schema' },
              { step: '03', title: 'Development', description: 'Agile sprints with continuous integration' },
              { step: '04', title: 'Testing', description: 'Comprehensive testing and QA' },
              { step: '05', title: 'Deployment', description: 'Production deployment and monitoring' },
            ].map((process, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group text-center"
              >
                <div className="text-4xl font-bold text-cyan-500/20 group-hover:text-cyan-500/30 transition-colors mb-3">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-xs">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technologies We Master</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React',
              'Node.js',
              'MongoDB',
              'Express',
              'TypeScript',
              'Next.js',
              'GraphQL',
              'PostgreSQL',
              'Redis',
              'Docker',
              'AWS',
              'Firebase',
            ].map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all text-center group"
              >
                <div className="text-cyan-400 font-semibold group-hover:scale-110 transition-transform">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
