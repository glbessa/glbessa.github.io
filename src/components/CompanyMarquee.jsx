import React from 'react';
import { motion } from 'framer-motion';
import { getData } from '../data';

const cases = [
  {
    company: "Vemcon",
    logo: "/img/companies/vemcon.svg",
    title: "Integração de Pagamentos e Assinaturas",
    description: "Desenho e desenvolvimento de motor de pagamentos e assinaturas recorrentes com alta segurança transacional, conformidade e conciliação de caixa automatizada."
  },
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
    <section id="projects" className="py-24 bg-bg border-y border-border overflow-hidden font-sans">
      <div className="container mx-auto px-6 text-center mb-10">
        <h3 className="text-xl text-text-muted font-light tracking-wide font-sora">
          Empresas e produtos apoiados por <span className="text-text font-medium">nossa engenharia</span>
        </h3>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient masks for smooth fading at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

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
          <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
            Casos de Sucesso
          </span>
          <h4 className="text-2xl md:text-3xl font-bold text-text font-sora">
            Como transformamos engenharia em <span className="text-gradient">resultado de negócio</span>
          </h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item) => (
            <div 
              key={item.company} 
              className="group relative p-6 rounded-3xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
              <div className="h-10 mb-6 flex items-center justify-between">
                <img 
                  src={item.logo} 
                  alt={item.company} 
                  className="h-7 w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="text-[10px] font-mono tracking-wider text-accent bg-accent/5 border border-accent/10 px-2.5 py-1 rounded-full uppercase">Entrega</span>
              </div>
              <h4 className="text-base font-bold text-text mb-2 group-hover:text-accent transition-colors font-sora">{item.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed">{item.description}</p>
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
    <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <img 
      src={company.logo} 
      alt={company.name} 
      className="relative h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
    />
  </a>
);

export default CompanyMarquee;
