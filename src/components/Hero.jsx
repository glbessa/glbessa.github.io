import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                Tech Partner for Startups & Scale-ups
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-100">
                Sua visão de negócio, transformada em <span className="text-gradient">tecnologia proprietária</span>.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              Ajudando fundadores a lançar MVPs, escalar produtos e transformar tecnologia em ativo estratégico. Do zero ao exit.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold backdrop-blur-sm border border-white/10 transition-all"
              >
                Ver Projetos
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
              <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden glass-card">
                <div className="flex items-center px-4 py-3 bg-slate-950/50 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="mx-auto text-xs font-mono text-slate-500">growth-engine.ts</div>
                </div>
                <div className="p-6 font-mono text-sm space-y-4 overflow-hidden">
                  <div className="flex gap-2">
                    <span className="text-pink-500">const</span>
                    <span className="text-blue-400">valuation</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-yellow-300">await</span>
                    <span className="text-blue-400">scaleUP</span>
                    <span className="text-slate-400">({'{'}</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex gap-2">
                      <span className="text-blue-300">product</span>:
                      <span className="text-orange-400">'validated'</span>,
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-300">churn</span>:
                      <span className="text-orange-400">'0%'</span>,
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-300">growth</span>:
                      <span className="text-orange-400">'exponential'</span>,
                    </div>
                  </div>
                  <div className="text-slate-400">{'}'});</div>
                  
                  <div className="pt-4 flex gap-4 border-t border-white/5 mt-4">
                     <div className="flex items-center gap-2 text-slate-500">
                        <Terminal className="w-4 h-4" />
                        <span>MRR Increased</span>
                     </div>
                     <div className="flex items-center gap-2 text-emerald-500">
                        <Cpu className="w-4 h-4" />
                        <span>+120%</span>
                     </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl"
              >
                <Code className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -left-8 p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-xl"
              >
                <Cpu className="w-8 h-8 text-emerald-400" />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
