import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, ArrowUpRight } from 'lucide-react';

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
            Engenharia de software focada em resultados. Desenvolvo sistemas que resolvem problemas reais e impulsionam o crescimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Main Service - Development */}
          <Card 
            title="Desenvolvimento de Sistemas"
            description="Transformo ideias complexas em software robusto e escalável. Do MVP ao produto final, com foco em performance e experiência do usuário."
            icon={Layout}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-slate-900 to-slate-900/50"
            delay={0}
            tags={['React', 'Node.js', 'SaaS', 'Web 3']}
          />

          {/* Service - Data */}
          <Card 
            title="Inteligência de Dados"
            description="Pipelines de dados e dashboards que transformam números brutos em insights acionáveis."
            icon={Database}
            className="md:col-span-1"
            delay={0.2}
            tags={['Python', 'ETL', 'Analytics', 'AI']}
          />

          {/* Service - Infrastructure */}
          <Card 
            title="Infraestrutura & DevOps"
            description="Arquitetura cloud segura, automação de CI/CD e otimização de custos em escala."
            icon={Server}
            className="md:col-span-1"
            delay={0.4}
            tags={['AWS', 'Docker', 'Kubernetes', 'Terraform']}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
