import { Cpu, Wifi, Zap, Gauge, Server, Radio, Fingerprint, Camera } from 'lucide-react';

export default function Hardware() {
  const solutions = [
    {
      icon: Cpu,
      title: 'AI-Powered Devices',
      description: 'Custom hardware solutions embedded with AI capabilities for intelligent automation',
      features: ['Neural processing units', 'On-device AI inference', 'Low-power AI chips', 'Custom ASIC design'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Radio,
      title: 'Smart Sensors',
      description: 'Advanced sensor systems with built-in intelligence for real-time data collection',
      features: ['Environmental sensors', 'Motion detection', 'Biometric sensors', 'Multi-modal sensing'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Wifi,
      title: 'IoT-Integrated Hardware',
      description: 'Connected devices that seamlessly integrate with IoT ecosystems',
      features: ['Wireless connectivity', 'Cloud integration', 'Remote monitoring', 'OTA updates'],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Zap,
      title: 'Edge AI Systems',
      description: 'Powerful edge computing hardware for local AI processing and decision making',
      features: ['Real-time processing', 'Low latency', 'Privacy-preserving', 'Offline capable'],
      gradient: 'from-pink-500/20 to-cyan-500/20',
    },
  ];

  const integrations = [
    {
      icon: Server,
      title: 'Hardware + Software Integration',
      description: 'Seamless integration between custom hardware and intelligent software systems',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Integration',
      description: 'Advanced biometric hardware for secure authentication and identification',
    },
    {
      icon: Camera,
      title: 'Vision Systems',
      description: 'High-performance camera systems with built-in AI processing',
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Hardware-software co-design for maximum efficiency and performance',
    },
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
                <Cpu className="w-20 h-20 text-cyan-400 mx-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Hardware Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI-powered hardware systems designed to bring intelligence to the edge
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Hardware Capabilities</h2>
            <p className="text-gray-400 text-lg">From concept to production-ready devices</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden`}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded border border-cyan-400/30 animate-pulse flex items-center justify-center"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: `${2 + (i % 3)}s`,
                        }}
                      >
                        <div className="w-2 h-2 bg-cyan-400/50 rounded-full"></div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <Cpu className="w-24 h-24 text-cyan-400" />
                      <div className="absolute -inset-4">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg animate-spin" style={{ animationDuration: '10s' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-2 left-2 right-2 flex justify-between">
                    <div className="text-xs font-mono text-green-400 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                      ACTIVE
                    </div>
                    <div className="text-xs font-mono text-cyan-400 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                      AI ENABLED
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-2 text-xs font-mono text-purple-400 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-sm">
                    EDGE COMPUTING
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Hardware Meets Intelligence
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our hardware solutions combine cutting-edge electronics with embedded AI to create
                smart devices that can process data locally, make intelligent decisions, and operate
                autonomously without constant cloud connectivity.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From prototype to production, we handle the entire hardware development lifecycle,
                ensuring your devices are optimized for performance, power efficiency, and cost.
              </p>

              <div className="space-y-4">
                {[
                  'Custom PCB design and manufacturing',
                  'Embedded systems development',
                  'Sensor fusion and integration',
                  'Power management optimization',
                  'Thermal design and testing',
                  'Regulatory compliance (CE, FCC)',
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
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hardware + Software Integration
            </h2>
            <p className="text-gray-400 text-lg">Complete solutions from silicon to cloud</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center group"
              >
                <div className="mb-4 inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                  <integration.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{integration.title}</h3>
                <p className="text-gray-400 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Development Process</h2>
            <p className="text-gray-400 text-lg">From concept to production in six phases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Requirements',
                description: 'Define specifications, constraints, and performance targets',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Schematic design, component selection, and architecture planning',
              },
              {
                step: '03',
                title: 'Prototyping',
                description: 'Build and test initial prototypes with rapid iterations',
              },
              {
                step: '04',
                title: 'Validation',
                description: 'Comprehensive testing for functionality and reliability',
              },
              {
                step: '05',
                title: 'Optimization',
                description: 'Refine design for cost, performance, and manufacturability',
              },
              {
                step: '06',
                title: 'Production',
                description: 'Scale to mass production with quality assurance',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-5xl font-bold text-cyan-500/20 group-hover:text-cyan-500/30 transition-colors mb-4">
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

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Processing Power', value: 'Up to 5 TOPS' },
              { label: 'Power Efficiency', value: '<2W' },
              { label: 'Response Time', value: '<10ms' },
              { label: 'Operating Temp', value: '-40°C to 85°C' },
            ].map((spec, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-center group hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">
                  {spec.value}
                </div>
                <div className="text-sm text-gray-400">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
