import React, { useState } from 'react';
import { getData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = getData();
  const { contactInfo } = data.author;
  const { faqs } = data;

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-200 border-l-4 border-blue-500 pl-4">Canais de diagnóstico</h3>
          
          <a 
            href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group hover:bg-slate-900"
          >
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">WhatsApp</p>
              <p className="text-lg font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{contactInfo.whatsapp.displayText}</p>
            </div>
          </a>

          <a 
            href={`mailto:${contactInfo.email}`} 
            className="flex items-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group hover:bg-slate-900"
          >
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">E-mail</p>
              <p className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors break-all">{contactInfo.email}</p>
            </div>
          </a>

          <a 
            href={contactInfo.linkedin.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-slate-900/50 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all group hover:bg-slate-900"
          >
            <div className="w-12 h-12 bg-slate-700/50 text-slate-300 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">LinkedIn</p>
              <p className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">Conectar profissionalmente</p>
            </div>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-900/30 p-8 pb-24 md:pb-8 rounded-3xl space-y-8 border border-white/5 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-slate-200">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-bold text-slate-300 group-hover:text-blue-400 transition-colors flex items-center gap-2 select-none">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  </motion.div>
                  {faq.question}
                </h3>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 text-sm leading-relaxed pl-6 border-l border-slate-800 ml-2 mt-2 pb-2">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
