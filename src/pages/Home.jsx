import React from 'react';
import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import TechStack from '../components/TechStack';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-slate-950">
      <Hero />
      <div className="relative z-10 bg-slate-950">
        <TechStack />
        <ServicesBento />
        
        {/* Social Proof / Trust Placeholder */}
        <section className="py-20 bg-slate-900/50 border-y border-white/5">
           <div className="container mx-auto px-6 text-center">
             <h3 className="text-xl text-slate-400 mb-8">Empresas que confiam na minha arquitetura</h3>
             <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {/* Replace with actual logos or generic trust indicators */}
               <div className="text-2xl font-bold font-mono text-white">TECH<span className="text-blue-500">CORP</span></div>
               <div className="text-2xl font-bold font-mono text-white">DATA<span className="text-emerald-500">FLOW</span></div>
               <div className="text-2xl font-bold font-mono text-white">CLOUD<span className="text-purple-500">SCALE</span></div>
             </div>
           </div>
        </section>

        {/* Short Case Study Teaser (To be expanded in future Project section) */}
        <section id="projects" className="py-24 container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-bold text-slate-100 mb-2">Projetos em Destaque</h2>
               <p className="text-slate-400">Cases reais de transformação digital.</p>
             </div>
             <a href="#" className="text-blue-400 hover:text-white transition-colors flex items-center gap-2 mt-4 md:mt-0">
               Ver todos os projetos &rarr;
             </a>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <span className="text-emerald-400 text-xs font-mono mb-2 block">DATA INTELLIGENCE</span>
                  <h3 className="text-2xl font-bold text-white mb-2">OrsAI - Otimização de Infraestrutura</h3>
                  <p className="text-slate-400 text-sm mb-4">Redução de 40% em custos de cloud AWS utilizando Spot Instances e K8s.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/5"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10"></div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 z-20">
                   <span className="text-blue-400 text-xs font-mono mb-2 block">SAAS DEVELOPMENT</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Platforma e-Learning V2</h3>
                  <p className="text-slate-400 text-sm mb-4">Migração de monolito para microservices, suportando +50k usuários simultâneos.</p>
                </div>
              </motion.div>
           </div>
        </section>

        {/* Contact Section Wrapper */}
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-6 max-w-4xl">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-100 mb-4">Pronto para escalar seu projeto?</h2>
               <p className="text-slate-400">Vamos conversar sobre como tecnologia pode resolver seus desafios de negócio.</p>
             </div>
             {/* Using existing Contact component but we might need to style it if it's not dark mode ready. 
                 For now, wrapping it. */}
             <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <Contact />
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;