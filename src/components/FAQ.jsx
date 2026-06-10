import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getData } from '../data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const data = getData();
  const { faqs } = data;

  return (
    <section id="faq" className="py-24 bg-bg border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mt-4 font-sans">
            Respostas para as principais dúvidas sobre como funciona a consultoria, diagnóstico e desenvolvimento de projetos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface/30 border border-border rounded-2xl overflow-hidden hover:border-accent/20 transition-colors"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
