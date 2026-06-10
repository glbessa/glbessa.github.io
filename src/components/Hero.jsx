import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code, Cpu } from 'lucide-react';
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
                Transformando processos complexos em <span className="text-gradient">software inteligente</span>.
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
              {/* Abstract Card "Window" */}
              <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden glass-card">
                <div className="flex items-center px-4 py-3 bg-bg/50 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-text-muted">operational-engine.ts</div>
                </div>
                <div className="p-6 font-mono text-sm space-y-4 overflow-hidden">
                  <div className="flex gap-2">
                    <span className="text-pink-500">const</span>
                    <span className="text-accent">operation</span>
                    <span className="text-text-muted">=</span>
                    <span className="text-yellow-300">await</span>
                    <span className="text-accent sm:hidden">opsEngine</span>
                    <span className="text-accent hidden sm:inline">operationalEngine</span>
                    <span className="text-text-muted">({'{'}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex gap-2">
                      <span className="text-text">processes</span>:
                      <span className="text-orange-400">'automated'</span>,
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text">cloud</span>:
                      <span className="text-orange-400">'reliable'</span>,
                    </div>
                    <div className="flex gap-2">
                      <span className="text-text">data</span>:
                      <span className="text-orange-400">'actionable'</span>,
                    </div>
                  </div>
                  <div className="text-text-muted">{'}'});</div>
                  
                  <div className="pt-4 flex gap-4 border-t border-border mt-4">
                     <div className="flex items-center gap-2 text-text-muted">
                        <Terminal className="w-4 h-4" />
                        <span>Risco técnico reduzido</span>
                     </div>
                     <div className="flex items-center gap-2 text-accent">
                        <Cpu className="w-4 h-4" />
                        <span>Operação escalável</span>
                     </div>
                  </div>
                </div>
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
