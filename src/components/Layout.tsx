import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/ai-solutions', label: 'AI Solutions' },
    { path: '/facial-recognition', label: 'Facial Recognition' },
    { path: '/hardware', label: 'Hardware' },
    { path: '/software', label: 'Software' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Brain className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-300/30 transition-all rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Doorely Creative
                </div>
                <div className="text-xs text-cyan-400/70">AI Innovation Lab</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                      : 'text-gray-300 hover:bg-cyan-400/5 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">{children}</main>

      <footer className="bg-slate-950 border-t border-cyan-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Doorely Creative
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Powering Intelligence Through Innovation. Leading AI solutions provider in Pune,
                India, specializing in facial expression recognition, hardware development, and
                software solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <span className="text-cyan-400">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <span className="text-cyan-400">in</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center hover:bg-cyan-400/20 transition-colors">
                  <span className="text-cyan-400">tw</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.slice(4).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Doorely Creative. All rights reserved. | Pune, Maharashtra, India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
