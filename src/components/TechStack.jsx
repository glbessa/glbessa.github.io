import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs/white' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Python', slug: 'python' },
  { name: 'AWS', slug: 'amazonaws' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Redis', slug: 'redis' },
  { name: 'Terraform', slug: 'terraform' },
];

const TechStackMarquee = () => {
  // Duplicate list to ensure it covers wide screens and loops smoothly
  const marqueeList = [...technologies, ...technologies, ...technologies];

  return (
    <section id="stack" className="py-16 bg-surface/20 backdrop-blur-sm relative z-10 font-sans overflow-hidden">
      {/* Laser glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold tracking-wider text-text-muted uppercase font-mono">
          Stack moderna para produtos escaláveis
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 
          }}
          style={{ width: "fit-content" }}
        >
          {/* Block 1 */}
          <div className="flex items-center gap-16 md:gap-20 pr-16 md:pr-20 shrink-0">
            {marqueeList.map((tech, index) => (
              <div 
                key={`a-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer h-12 w-12 shrink-0"
                title={tech.name}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}`} 
                  alt={tech.name} 
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Block 2 */}
          <div className="flex items-center gap-16 md:gap-20 pr-16 md:pr-20 shrink-0">
            {marqueeList.map((tech, index) => (
              <div 
                key={`b-${index}`} 
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer h-12 w-12 shrink-0"
                title={tech.name}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}`} 
                  alt={tech.name} 
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
