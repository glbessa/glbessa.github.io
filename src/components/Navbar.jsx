import React, { useState, useEffect } from 'react';
import { getData } from '../data';
import { Menu, X, Code, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const data = getData();
  const { contactInfo } = data.author;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Stack', href: '#stack' },
    { name: 'Método', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${scrolled ? 'glass' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <Code className="w-5 h-5 text-accent" />
            </div>
            <span className="font-bold text-xl tracking-tight text-text font-sora">
              glbessa<span className="text-accent">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-text-muted hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex gap-4">
              <a href={contactInfo.github.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={contactInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-brand to-accent hover:opacity-90 text-text text-sm font-semibold rounded-lg transition-all shadow-lg shadow-brand/20"
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-muted hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-border"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-base font-medium text-text-muted hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border" />
              <div className="flex gap-4 pt-2">
                <a href={contactInfo.github.url} className="text-text-muted hover:text-accent"><Github className="w-5 h-5" /></a>
                <a href={contactInfo.linkedin.url} className="text-text-muted hover:text-accent"><Linkedin className="w-5 h-5" /></a>
              </div>
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                className="block w-full text-center py-3 bg-gradient-to-r from-brand to-accent rounded-lg font-semibold text-text"
              >
                Solicitar diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
