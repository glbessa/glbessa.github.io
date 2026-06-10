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
        <section id="contact" className="py-24 bg-gradient-to-b from-bg to-surface border-t border-border">
          <div className="container mx-auto px-6 max-w-4xl">
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
