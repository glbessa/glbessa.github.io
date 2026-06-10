import React from 'react';
import { motion } from 'framer-motion';
import { getData } from '../data';

const cases = [
  {
    company: "Everleads",
    logo: "/img/companies/everleads.svg",
    title: "Pipelines de Big Data em Nuvem",
    description: "Estruturação de fluxos de scraping escaláveis e engenharia de dados em nuvem, garantindo o processamento e enriquecimento estável de milhões de registros diariamente."
  },
  {
    company: "Primeira Mesa",
    logo: "/img/companies/primeiramesa.png",
    title: "Escala e Performance de API",
    description: "Migração de infraestrutura de servidores e otimização de latência em APIs sob concorrência extrema para suportar milhares de requisições de buscas simultâneas."
  },
  {
    company: "Cluster",
    logo: "/img/companies/cluster.svg",
    title: "Desenvolvimento de Plataforma SaaS",
    description: "Arquitetura e desenvolvimento de plataforma web sob medida integrada a sistemas de faturamento e governança técnica para automatizar relatórios financeiros."
  }
];

const CompanyMarquee = () => {
  const companies = getData().companies;
  // Duplicate list MULTIPLE times to ensure it covers wide screens and loops smoothly
  const marqueeList = [...companies, ...companies, ...companies, ...companies, ...companies, ...companies];

  return (
    <section className="py-24 bg-slate-950 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-10">
        <h3 className="text-xl text-slate-400 font-light tracking-wide">
          Empresas e produtos apoiados por <span className="text-slate-200 font-medium">nossa engenharia</span>
        </h3>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient masks for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />

        <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
            }}
            style={{ width: "fit-content" }}
        >
             {/* Block 1 */}
             <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
               {marqueeList.map((company, index) => (
                 <CompanyItem key={`a-${index}`} company={company} />
               ))}
             </div>

             {/* Block 2 */}
             <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 shrink-0">
               {marqueeList.map((company, index) => (
                 <CompanyItem key={`b-${index}`} company={company} />
               ))}
             </div>
        </motion.div>
      </div>

      {/* Mini-cases grid */}
      <div className="container mx-auto px-6 mt-20 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-mono tracking-widest text-blue-400 uppercase mb-4 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/5">
            Casos de Sucesso
          </span>
          <h4 className="text-2xl md:text-3xl font-bold text-slate-100">
            Como transformamos engenharia em <span className="text-gradient">resultado de negócio</span>
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div 
              key={item.company} 
              className="group relative p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              <div className="h-10 mb-6 flex items-center justify-between">
                <img 
                  src={item.logo} 
                  alt={item.company} 
                  className="h-7 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
                <span className="text-[10px] font-mono tracking-wider text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1 rounded-full uppercase">Entrega</span>
              </div>
              <h4 className="text-base font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyItem = ({ company }) => (
  <a 
    href={company.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative block transition-transform duration-300 hover:scale-110 shrink-0"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <img 
      src={company.logo} 
      alt={company.name} 
      className="relative h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
    />
  </a>
);

export default CompanyMarquee;
