import React from 'react';
import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import TechStack from '../components/TechStack';
import Contact from './Contact';


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
             <h3 className="text-xl text-slate-400 mb-8">Empresas que escalaram com minha tecnologia</h3>
             <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {/* Replace with actual logos or generic trust indicators */}
               <div className="text-2xl font-bold font-mono text-white">TECH<span className="text-blue-500">CORP</span></div>
               <div className="text-2xl font-bold font-mono text-white">DATA<span className="text-emerald-500">FLOW</span></div>
               <div className="text-2xl font-bold font-mono text-white">CLOUD<span className="text-purple-500">SCALE</span></div>
             </div>
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
             <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800">
                <Contact />
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;