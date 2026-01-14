import { Link } from 'react-router-dom';
import { Brain, Cpu, Eye, Smartphone, ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 inline-block">
            <div className="relative">
              <Brain className="w-24 h-24 text-cyan-400 mx-auto animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full"></div>

              <svg className="absolute -inset-8 w-40 h-40" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  strokeDasharray="4 4"
                  className="animate-spin"
                  style={{ animationDuration: '20s' }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Powering Intelligence Through Innovation
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI solutions, facial expression recognition, and cutting-edge hardware development from Pune, India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/ai-solutions"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore AI Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg font-semibold hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Brain, label: 'AI Solutions', count: '50+' },
              { icon: Eye, label: 'Face Recognition', count: '99.9%' },
              { icon: Cpu, label: 'Hardware Systems', count: '100+' },
              { icon: Smartphone, label: 'Software Projects', count: '200+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.count}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-gray-400 text-lg">Transforming industries with intelligent technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: 'Artificial Intelligence',
                description: 'Custom AI models tailored to your business needs with deep learning capabilities',
                link: '/ai-solutions',
                gradient: 'from-cyan-500/20 to-blue-500/20',
              },
              {
                icon: Eye,
                title: 'Facial Expression Recognition',
                description: 'Advanced emotion detection for security, healthcare, and user experience',
                link: '/facial-recognition',
                gradient: 'from-blue-500/20 to-purple-500/20',
              },
              {
                icon: Cpu,
                title: 'Hardware Development',
                description: 'AI-powered IoT devices and edge computing solutions',
                link: '/hardware',
                gradient: 'from-purple-500/20 to-pink-500/20',
              },
              {
                icon: Smartphone,
                title: 'Software Solutions',
                description: 'Full-stack development with MERN expertise and cloud integration',
                link: '/software',
                gradient: 'from-pink-500/20 to-cyan-500/20',
              },
            ].map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <service.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-cyan-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Doorely Creative?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Cutting-Edge Technology',
                description: 'Latest AI frameworks and neural network architectures for superior performance',
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'World-class solutions from Pune with international quality benchmarks',
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security with 99.9% uptime guarantee',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <feature.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's build intelligent systems that understand and adapt to human behavior
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
