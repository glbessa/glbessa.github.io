import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', color: 'text-yellow-400' },
  { name: 'React', color: 'text-blue-400' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'TypeScript', color: 'text-blue-500' },
  { name: 'Python', color: 'text-yellow-500' },
  { name: 'AWS', color: 'text-orange-500' },
  { name: 'Docker', color: 'text-blue-500' },
  { name: 'Kubernetes', color: 'text-blue-600' },
  { name: 'PostgreSQL', color: 'text-blue-300' },
  { name: 'Redis', color: 'text-red-500' },
  { name: 'Terraform', color: 'text-purple-400' },
  { name: 'Next.js', color: 'text-white' },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-16 bg-slate-950 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
          Technologies & Tools
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {/* Double the list for seamless loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-default">
               <span className={`text-2xl font-bold ${tech.color}`}>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 py-4">
           {/* Duplicate for pure CSS marquee if needed, but the above wrapper logic with `animate-marquee` usually suffices if configured in tailwind. 
               Since we don't have custom tailwind config for 'marquee' yet, let's use Framer Motion for reliability.
           */}
        </div>
      </div>
    </section>
  );
};

// Re-implementing with Framer Motion for guaranteed smoothness without custom tailwind config
const TechStackMarquee = () => {
  return (
    <section className="py-20 bg-slate-950 border-y border-white/5 relative z-10">
       <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase">
          Powering Scalable Solutions With
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }} // Adjust based on width
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 
          }}
        >
          {/* Tripple the list to ensure filling the screen on large monitors */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer">
              <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-200 hover:from-blue-400 hover:to-emerald-400`}>
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
         {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      </div>
    </section>
  )
}

export default TechStackMarquee;
