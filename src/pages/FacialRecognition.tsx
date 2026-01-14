import { Eye, Smile, Frown, Meh, Heart, Shield, Building2, GraduationCap, Users } from 'lucide-react';

export default function FacialRecognition() {
  const applications = [
    {
      icon: Users,
      title: 'Human Behavior Analysis',
      description: 'Understand customer reactions, employee engagement, and user experience through real-time emotion detection',
      benefits: ['Customer sentiment analysis', 'Employee productivity insights', 'User experience optimization'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Shield,
      title: 'Security & Surveillance',
      description: 'Enhanced security systems with emotion-based threat detection and access control',
      benefits: ['Anomaly detection', 'Access control systems', 'Threat assessment'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Heart,
      title: 'Healthcare & Mental Health',
      description: 'Monitor patient emotional states for better diagnosis and treatment planning',
      benefits: ['Patient monitoring', 'Mental health assessment', 'Therapy effectiveness tracking'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: GraduationCap,
      title: 'Smart Classrooms & Workplaces',
      description: 'Optimize learning and work environments by understanding engagement levels',
      benefits: ['Student engagement tracking', 'Meeting effectiveness', 'Training optimization'],
      gradient: 'from-pink-500/20 to-cyan-500/20',
    },
  ];

  const emotions = [
    { icon: Smile, label: 'Happy', color: 'text-green-400' },
    { icon: Frown, label: 'Sad', color: 'text-blue-400' },
    { icon: Meh, label: 'Neutral', color: 'text-gray-400' },
    { icon: Eye, label: 'Surprised', color: 'text-yellow-400' },
  ];

  return (
    <div className="relative">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <Eye className="w-20 h-20 text-cyan-400 mx-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Facial Expression Recognition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered emotion detection that understands human feelings and reactions in real-time
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 p-8 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="border border-cyan-400/30 rounded-lg animate-pulse relative"
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '2s',
                        }}
                      >
                        <div className="absolute inset-0 bg-cyan-400/5"></div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-52 border-2 border-cyan-400/50 rounded-full">
                      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-400 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-4 bg-cyan-400/50 rounded"></div>
                      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-400 rounded-full"></div>

                      <svg className="absolute -inset-4 w-48 h-60" viewBox="0 0 100 100">
                        <rect
                          x="10"
                          y="10"
                          width="80"
                          height="80"
                          fill="none"
                          stroke="#22d3ee"
                          strokeWidth="0.5"
                          strokeDasharray="5 5"
                          className="animate-spin"
                          style={{ animationDuration: '10s' }}
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 text-xs text-cyan-400 font-mono bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                    SCANNING...
                  </div>
                  <div className="absolute top-4 right-4 text-xs text-green-400 font-mono bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                    99.9% ACCURACY
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-purple-400 font-mono bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                    REAL-TIME
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Understanding Human Emotions Through AI
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our facial expression recognition technology uses advanced deep learning algorithms to
                detect and analyze human emotions in real-time. By processing facial landmarks, micro-expressions,
                and subtle changes in facial features, we can accurately identify emotional states.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                This technology goes beyond simple face detection, offering deep insights into human behavior,
                sentiment, and psychological states that can transform how businesses interact with people.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {emotions.map((emotion, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group"
                  >
                    <emotion.icon className={`w-8 h-8 ${emotion.color} mb-2 group-hover:scale-110 transition-transform`} />
                    <div className="text-sm font-semibold text-white">{emotion.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-gray-400 text-lg">Transforming industries with emotion AI</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                      <app.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{app.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</div>
                    {app.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technology Stack</h2>
            <p className="text-gray-400 text-lg">Powered by cutting-edge AI frameworks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Deep Learning Models',
                items: ['CNNs for facial detection', 'RNNs for temporal analysis', 'Transformer architectures', 'Ensemble methods'],
              },
              {
                title: 'Computer Vision',
                items: ['Facial landmark detection', 'Micro-expression analysis', 'Gaze tracking', 'Head pose estimation'],
              },
              {
                title: 'Real-Time Processing',
                items: ['GPU acceleration', 'Edge computing support', 'Low-latency inference', 'Scalable architecture'],
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{tech.title}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, iIndex) => (
                    <div key={iIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      <span className="text-sm text-gray-300">{item}</span>
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
            <h2 className="text-4xl font-bold mb-4 text-white">Recognition Capabilities</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Emotions Detected', value: '7+' },
              { label: 'Accuracy Rate', value: '99.9%' },
              { label: 'Processing Speed', value: '<50ms' },
              { label: 'Face Capacity', value: '100+' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center group hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
