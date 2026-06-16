import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Linkedin } from 'lucide-react';
import { getData } from '../data';

const contactContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const DirectContact = () => {
  const data = getData();
  const { contactInfo } = data.author;

  return (
    <section id="direct-contact" className="py-24 bg-gradient-to-b from-surface to-bg relative overflow-visible">
      {/* Curved Dome divider from bg-bg to bg-surface */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none -translate-y-[99%] z-0">
        <svg className="absolute bottom-0 w-full h-full text-surface fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C300,30 900,30 1200,120 Z" />
        </svg>
      </div>

      {/* Light glow at the peak of the dome */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/10 rounded-full blur-2xl pointer-events-none z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Canais Rápidos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
            Contato <span className="text-gradient">Direto</span>
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mt-4 font-sans">
            Prefere um retorno imediato? Entre em contato diretamente através de um de nossos canais oficiais.
          </p>
        </motion.div>

        <motion.div 
          variants={contactContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* WhatsApp Card */}
          <motion.a
            variants={contactItemVariants}
            whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(139, 92, 246, 0.35)", backgroundColor: "rgba(19, 27, 46, 0.6)" }}
            transition={{ duration: 0.3 }}
            href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Falar no WhatsApp</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors">Iniciar Conversa</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Clique para abrir o chat imediato e iniciar o diagnóstico pelo WhatsApp.</p>
          </motion.a>

          {/* Email Card */}
          <motion.a
            variants={contactItemVariants}
            whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(139, 92, 246, 0.35)", backgroundColor: "rgba(19, 27, 46, 0.6)" }}
            transition={{ duration: 0.3 }}
            href={`mailto:${contactInfo.email}`}
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Enviar E-mail</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors truncate">{contactInfo.email}</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Envie uma mensagem formal com os detalhes e requisitos do seu projeto.</p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            variants={contactItemVariants}
            whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(139, 92, 246, 0.35)", backgroundColor: "rgba(19, 27, 46, 0.6)" }}
            transition={{ duration: 0.3 }}
            href={contactInfo.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-surface-hi text-text-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-border">
              <Linkedin className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Rede Profissional</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors">LinkedIn</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Conecte-se profissionalmente e acompanhe artigos e atualizações técnicas.</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DirectContact;
