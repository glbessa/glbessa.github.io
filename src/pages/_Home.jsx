import React from 'react';
import Hero from '../components/Hero';
import ServicesBento from '../components/ServicesBento';
import TechStack from '../components/TechStack';
import About from '../components/About';
import Contact from './_Contact';

import { getData } from '../data';
import CompanyMarquee from '../components/CompanyMarquee';

import SEO from '../components/SEO';

const Home = () => {
  const data = getData();

  return (
    <div className="bg-slate-950">
      <SEO 
        title={data.site.title} 
        description={data.site.description}
        url={data.site.url}
      />
      <Hero />
      <div className="relative z-10 bg-slate-950">
        <TechStack />
        <ServicesBento />
        {/* Social Proof / Trust */}
        <CompanyMarquee />

        <About />

        {/* Contact Section Wrapper */}
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-6 max-w-4xl">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Transforme ideias em ativos de <span className="text-blue-500">alto valor</span>.</h2>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">Agende uma consultoria estratégica e descubra como escalar seu negócio com tecnologia proprietária.</p>
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
