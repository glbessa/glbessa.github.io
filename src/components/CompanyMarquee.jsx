import React from 'react';
import { motion } from 'framer-motion';
import { getData } from '../data';

const CompanyMarquee = () => {
  const companies = getData().companies;
  // Duplicate list MULTIPLE times to ensure it covers wide screens and loops smoothly
  // e.g. 6 times ensures we have plenty of content
  const marqueeList = [...companies, ...companies, ...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-slate-900/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-10">
        <h3 className="text-xl text-slate-400 font-light tracking-wide">
          Empresas e produtos apoiados por <span className="text-slate-200 font-medium">nossa engenharia</span>
        </h3>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient masks for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
            }}
            style={{ width: "fit-content" }}
        >
             {/* Block 1 - includes trailing gap via padding */}
             <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
               {marqueeList.map((company, index) => (
                 <CompanyItem key={`a-${index}`} company={company} />
               ))}
             </div>

             {/* Block 2 - Identical clone with same trailing gap */}
             <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
               {marqueeList.map((company, index) => (
                 <CompanyItem key={`b-${index}`} company={company} />
               ))}
             </div>
        </motion.div>
      </div>
    </section>
  );
};

const CompanyItem = ({ company }) => (
 <a 
   href={company.url} 
   target="_blank" 
   rel="noopener noreferrer"
   className="group relative block transition-transform duration-300 hover:scale-110 shrink-0"
 >
   <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
   <img 
     src={company.logo} 
     alt={company.name} 
     className="relative h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
   />
 </a>
);

export default CompanyMarquee;
