import React from 'react';
import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Contact from './_Contact';
import FAQ from '../components/FAQ';
import DirectContact from '../components/DirectContact';

import { getData } from '../data';
import CompanyMarquee from '../components/CompanyMarquee';

import SEO from '../components/SEO';

const Home = () => {
  const data = getData();

  return (
    <div className="bg-bg font-sans">
      <SEO 
        title={data.site.title} 
        description={data.site.description}
        url={data.site.url}
      />
      <Hero />
      <div className="relative z-10 bg-bg">
        <TechStack />
        <ServicesBento />
        {/* Social Proof / Trust */}
        <CompanyMarquee />

        <About />

        {/* Direct Contact Channels */}
        <DirectContact />

        {/* FAQs */}
        <FAQ />

        {/* Contact Section Wrapper */}
        <section id="contact" className="py-24 bg-gradient-to-b from-bg to-surface relative overflow-hidden">
          {/* Laser border glow at the top */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent z-10" />
          <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-accent/10 to-transparent blur-md pointer-events-none z-0" />

          {/* Technical grid backdrop for deep conversion focus */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] pointer-events-none z-0" />

          {/* Ambient light source from the bottom */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 max-w-4xl relative z-10">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-sora">
                 Vamos identificar onde tecnologia pode gerar mais <span className="text-accent">impacto na sua operação</span>
               </h2>
               <p className="text-text-muted text-lg max-w-2xl mx-auto">Agende um diagnóstico técnico para mapear oportunidades de automação, produto, dados ou infraestrutura e entender quais iniciativas devem ser priorizadas.</p>
             </div>
             <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
