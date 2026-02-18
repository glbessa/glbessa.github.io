import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getData } from '../data';

const Card = ({ title, description, icon: Icon, className, delay, tags }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-900/10 ${className}`}
  >
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-6 h-6 text-slate-400" />
    </div>
    
    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    
    <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="text-xs font-mono py-1 px-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ServicesBento = () => {
  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Soluções para <span className="text-gradient">Escalar</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Engenharia de software focada em valuation. Desenvolvo ativos tecnológicos que resolvem problemas reais e aumentam o valor da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Main Service - Development */}
          <Card 
            title="Plataformas & Produtos Digitais"
            description="Transformo sua ideia em propriedade intelectual. Software exclusivo, feito sob medida para o seu modelo de negócio, do MVP ao Scale-up."
            icon={Layout}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-900/50"
            delay={0}
            tags={['SaaS', 'Marketplaces', 'Mobile Apps', 'Web 3']}
          />

          {/* Service - Data */}
          <Card 
            title="Dashboards & BI"
            description="Visualização clara de KPIs e métricas de crescimento. Tome decisões baseadas em dados, não em palpites."
            icon={Database}
            className="md:col-span-1"
            delay={0.2}
            tags={['Analytics', 'KPIs', 'Metabase', 'AI Insights']}
          />

          {/* Service - Infrastructure */}
          <Card 
            title="Escalabilidade & Segurança"
            description="Infraestrutura pronta para receber milhares de usuários. Durma tranquilo sabendo que seu produto está seguro e online."
            icon={Server}
            className="md:col-span-1"
            delay={0.4}
            tags={['Cloud AWS', 'Automação', 'Cybersecurity', '24/7']}
          />
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-slate-200 mb-2">Não encontrou o que busca?</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Cada negócio é único. Vamos conversar sobre sua necessidade específica e desenhar a solução ideal.
            </p>
            <a 
              href={`https://wa.me/${getData().author.contactInfo.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Consultor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
