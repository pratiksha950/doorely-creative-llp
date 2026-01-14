import { Brain, Cpu, Network, BarChart3, Shield, Zap, TrendingUp, Globe } from 'lucide-react';

export default function AISolutions() {
  const solutions = [
    {
      icon: Brain,
      title: 'Custom AI Models',
      description: 'Tailor-made artificial intelligence models designed specifically for your business needs and use cases',
      features: ['Neural Network Design', 'Model Training & Optimization', 'Transfer Learning', 'Fine-tuning'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: Network,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced ML/DL algorithms for pattern recognition, prediction, and intelligent automation',
      features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Neural Networks'],
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: Cpu,
      title: 'Computer Vision',
      description: 'State-of-the-art image and video analysis for object detection, segmentation, and recognition',
      features: ['Object Detection', 'Image Classification', 'Semantic Segmentation', 'Video Analytics'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: BarChart3,
      title: 'Real-time AI Analytics',
      description: 'Live data processing and insights generation powered by advanced AI algorithms',
      features: ['Stream Processing', 'Predictive Analytics', 'Anomaly Detection', 'Real-time Dashboards'],
      gradient: 'from-pink-500/20 to-cyan-500/20',
      borderColor: 'border-pink-500/30',
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with infrastructure that scales with your growth',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized models delivering millisecond response times',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Models that improve and adapt over time with new data',
    },
    {
      icon: Globe,
      title: 'Cloud & Edge Deployment',
      description: 'Flexible deployment options for any environment',
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
                <Brain className="w-20 h-20 text-cyan-400 mx-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence solutions that transform data into actionable insights
              and automate complex decision-making processes
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our AI Capabilities</h2>
            <p className="text-gray-400 text-lg">Comprehensive AI services for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${solution.borderColor} hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                      <solution.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-gray-400">{solution.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, fIndex) => (
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
              Why Choose Our AI Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{capability.title}</h3>
                <p className="text-gray-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">AI Development Process</h2>
            <p className="text-gray-400 text-lg">Our systematic approach to building AI solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your business needs and identifying AI opportunities',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Architecting the AI solution and selecting optimal algorithms',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building and training AI models with your data',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Integrating AI into your systems with continuous monitoring',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-6xl font-bold text-cyan-500/20 group-hover:text-cyan-500/30 transition-colors mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {process.title}
                </h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Industry-Leading AI Technology
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our AI solutions leverage the latest advancements in machine learning, including
                transformer architectures, convolutional neural networks, and reinforcement learning
                algorithms.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We work with cutting-edge frameworks like TensorFlow, PyTorch, and ONNX to deliver
                solutions that are both powerful and production-ready.
              </p>
              <div className="space-y-4">
                {[
                  'State-of-the-art neural network architectures',
                  'GPU-accelerated training and inference',
                  'AutoML for rapid prototyping',
                  'Model compression and optimization',
                  'Multi-cloud deployment support',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-ping"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '3s',
                          transform: `scale(${0.3 + i * 0.15})`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <Network className="w-32 h-32 text-cyan-400 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
