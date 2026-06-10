import React from 'react';
import { MessageSquare, Mail, Linkedin } from 'lucide-react';
import { getData } from '../data';

const DirectContact = () => {
  const data = getData();
  const { contactInfo } = data.author;

  return (
    <section id="direct-contact" className="py-24 bg-gradient-to-b from-surface to-bg border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Canais Rápidos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
            Contato <span className="text-gradient">Direto</span>
          </h2>
          <p className="text-text-muted text-base max-w-xl mx-auto mt-4 font-sans">
            Prefere um retorno imediato? Entre em contato diretamente através de um de nossos canais oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Falar no WhatsApp</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors">Iniciar Conversa</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Clique para abrir o chat imediato e iniciar o diagnóstico pelo WhatsApp.</p>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Enviar E-mail</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors truncate">{contactInfo.email}</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Envie uma mensagem formal com os detalhes e requisitos do seu projeto.</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href={contactInfo.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border hover:border-accent/30 hover:bg-surface/60 transition-all duration-300 group hover:shadow-xl hover:shadow-brand/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
            <div className="w-12 h-12 bg-surface-hi text-text-muted rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-border">
              <Linkedin className="w-6 h-6" />
            </div>
            <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Rede Profissional</p>
            <h4 className="text-lg font-bold text-text mb-2 font-sora group-hover:text-accent transition-colors">LinkedIn</h4>
            <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">Conecte-se profissionalmente e acompanhe artigos e atualizações técnicas.</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DirectContact;
