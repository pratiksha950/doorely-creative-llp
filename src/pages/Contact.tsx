import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Form submission logic here
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Doorly Creatives LLP MIT TBI, 5th Floor,Chanakya Building,Rambaug Colony Paud Road, Kothrud,Pune Pin code: 411038', 'Maharashtra, India,'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rakasuraj@gmail.com', 'contact@doorelycreative.com'],
      gradient: 'from-blue-500/20 to-purple-500/20',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8446607179', 'Mon-Fri 9:00 AM - 6:00 PM IST'],
      gradient: 'from-purple-500/20 to-pink-500/20',
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
                <Mail className="w-20 h-20 text-cyan-400 mx-auto" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-2xl"></div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with AI-powered solutions
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="mb-4 inline-block p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{info.title}</h3>
                  {info.details.map((detail, dIndex) => (
                    <p key={dIndex} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Have a project in mind? Fill out the form and our team will get back to you within
                24 hours. We're excited to hear about your ideas and how we can help bring them to life.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Office</h2>
              <div className="mb-8">
                <div className="aspect-video rounded-2xl bg-slate-800/50 border border-cyan-500/20 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <div className="text-xl font-semibold text-white mb-2">Loni, Pune</div>
                      <div className="text-gray-400">Maharashtra, India</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-slate-800/50 border border-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                      <div className="text-sm text-gray-400 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-800/50 border border-cyan-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Global Reach</h3>
                      <p className="text-sm text-gray-400">
                        While based in Pune, we serve clients worldwide with remote collaboration
                        capabilities and flexible timezone support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Team',
                description: 'Experienced professionals in AI, hardware, and software development',
              },
              {
                title: 'Proven Track Record',
                description: '200+ successful projects delivered across multiple industries',
              },
              {
                title: 'Customer First',
                description: '24/7 support and dedicated project managers for your success',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all text-center group"
              >
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
