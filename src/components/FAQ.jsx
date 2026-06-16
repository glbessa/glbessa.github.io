import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getData } from '../data';

const faqContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const faqItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const data = getData();
  const { faqs } = data;

  return (
    <section id="faq" className="py-24 bg-bg relative overflow-visible">
      {/* Inverse Slanted top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none -translate-y-[99%] z-0">
        <svg className="absolute bottom-0 w-full h-full text-surface fill-current opacity-45" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,0 L1200,120 Z" />
        </svg>
      </div>

      {/* Dotted Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

      {/* Glowing backdrop orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mt-4 font-sans">
            Respostas para as principais dúvidas sobre como funciona a consultoria, diagnóstico e desenvolvimento de projetos.
          </p>
        </motion.div>

        <motion.div 
          variants={faqContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={faqItemVariants}
                whileHover={{ borderColor: "rgba(139, 92, 246, 0.25)" }}
                className="bg-surface/30 border border-border rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                >
                  <span className="font-bold text-text group-hover:text-accent transition-colors font-sora text-base md:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-4 p-1 rounded-lg bg-surface-hi text-text-muted group-hover:text-text transition-colors border border-border"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 pl-14 border-t border-border/10">
                        <p className="text-text-muted text-sm leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
