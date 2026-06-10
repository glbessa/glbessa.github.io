import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu } from 'lucide-react';
import { getData } from '../data';

const Hero = () => {
  const { hero } = getData();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-bg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative font-sans">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4 font-mono">
                {hero.badge}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-text font-sora">
                Transformando processos complexos em <span className="text-gradient">software inteligente</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                {hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#projects" 
                className="btn-secondary"
              >
                {hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          {/* Visual Content */}
          <div className="md:w-1/2 w-full pt-10 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Premium 3D Tech Visual */}
              <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border border-border bg-surface/30 backdrop-blur-md p-2">
                <img 
                  src="/img/hero_tech_concept.png" 
                  alt="Engenharia de Software e Infraestrutura Cloud Inteligente" 
                  className="w-full h-auto object-cover rounded-2xl border border-border/50 shadow-inner"
                  loading="eager"
                />
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-surface-hi rounded-xl border border-border shadow-xl"
              >
                <Code className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 p-4 bg-surface-hi rounded-xl border border-border shadow-xl"
              >
                <Cpu className="w-8 h-8 text-brand" />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
