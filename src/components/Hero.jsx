import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FolderKanban } from 'lucide-react';
import { getData } from '../data';
import HeroCanvasReveal from './HeroCanvasReveal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const { hero } = getData();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-bg">
      <div className="absolute inset-0 bg-bg">
        <HeroCanvasReveal />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 z-10 relative font-sans">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4 font-mono">
              {hero.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-text font-sora">
              {hero.title.split(' e ').map((part, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' e '}
                  {index === 1 ? <span className="text-gradient">{part}</span> : part}
                </React.Fragment>
              ))}
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              {hero.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </a>

            <a href="#projects" className="btn-secondary">
              {hero.ctaSecondary}
              <FolderKanban className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
