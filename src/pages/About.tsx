import { Target, Eye, Users, Award, MapPin, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="relative">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Doorely Creative
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              An innovative AI-driven company pioneering the future of human-machine interaction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-4">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-cyan-400/20 rounded animate-pulse"
                        style={{
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10 text-center">
                    <Lightbulb className="w-32 h-32 text-cyan-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white">Innovation Hub</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Doorely Creative is a cutting-edge technology company based in Pune, Maharashtra, India,
                specializing in Artificial Intelligence, Facial Expression Recognition, Hardware Development,
                and Software Solutions. We are passionate about building intelligent systems that bridge the
                gap between human emotion and machine understanding.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded with a vision to revolutionize how machines perceive and respond to human behavior,
                we combine advanced AI algorithms with innovative hardware to create solutions that are not
                just smart, but truly intelligent.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of expert engineers, data scientists, and researchers work collaboratively to push
                the boundaries of what's possible in AI-driven technology, delivering world-class solutions
                from the heart of India to clients across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group">
              <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <Target className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To build intelligent systems that understand and respond to human behavior, creating
                  seamless interactions between people and technology. We strive to make AI accessible,
                  ethical, and beneficial for all, while pushing the boundaries of innovation in facial
                  expression recognition, smart hardware, and software development.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Innovation', 'Ethics', 'Excellence'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="group">
              <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                  <Eye className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become a global leader in AI-powered human-machine interaction, setting new standards
                  in emotional intelligence technology. We envision a future where our innovations help
                  create safer cities, healthier communities, smarter workplaces, and more empathetic
                  technology that truly understands human needs.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Global Impact', 'Leadership', 'Future-Ready'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg">The principles that drive our innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Constantly pushing boundaries and exploring new possibilities in AI',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Working together to create solutions that make a real difference',
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Committed to delivering the highest quality in every project',
              },
              {
                icon: TrendingUp,
                title: 'Growth',
                description: 'Continuous learning and adaptation to emerging technologies',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-block p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Pune-Based, Globally Focused</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Located in the vibrant tech hub of Pune, Loni, Maharashtra, India, Doorely Creative
                leverages the city's rich talent pool and innovation ecosystem to deliver cutting-edge
                solutions to clients worldwide.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From our state-of-the-art facility in Pune, we serve clients across healthcare, education,
                security, retail, and enterprise sectors, bringing the power of AI and intelligent systems
                to organizations around the globe.
              </p>
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Our Location</div>
                  <div className="text-gray-300 text-sm">
                    Loni, Pune, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
                  </div>
                  <MapPin className="w-20 h-20 text-cyan-400 relative z-10" />
                </div>
                <div className="mt-6 text-center">
                  <div className="text-lg font-semibold text-white mb-2">Innovation from India</div>
                  <div className="text-gray-400 text-sm">Delivering excellence worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
