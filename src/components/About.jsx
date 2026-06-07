import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardCheck,
  Network,
  Rocket,
  Gauge,
  Search,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

const deliverySteps = [
  {
    period: '01',
    title: 'Diagnóstico técnico',
    description: 'Mapeamos operação, sistemas, riscos e prioridades para identificar onde tecnologia gera mais impacto.',
    icon: Search,
  },
  {
    period: '02',
    title: 'Arquitetura da solução',
    description: 'Definimos escopo, integrações, dados e infraestrutura com foco em evolução, manutenção e segurança.',
    icon: Network,
  },
  {
    period: '03',
    title: 'Implantação orientada a valor',
    description: 'Desenvolvemos e colocamos em produção produtos, automações e pipelines com entregas incrementais.',
    icon: Rocket,
  },
  {
    period: '04',
    title: 'Evolução e confiabilidade',
    description: 'Acompanhamos indicadores técnicos, estabilidade e próximos ciclos para sustentar crescimento com previsibilidade.',
    icon: Gauge,
  },
];

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico antes da execução',
    description: 'Antes de desenvolver, entendemos operação, riscos, restrições e prioridades. Isso evita soluções caras para problemas mal definidos.',
  },
  {
    icon: ShieldCheck,
    title: 'Arquitetura orientada a crescimento',
    description: 'Projetamos sistemas com base em manutenção, integração, segurança e evolução, para que a tecnologia acompanhe o negócio.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicação clara com decisores',
    description: 'Traduzimos decisões técnicas em impacto de negócio, mantendo escopo, prioridades e trade-offs visíveis ao longo do projeto.',
  },
];

const outcomes = [
  'Escopo técnico claro',
  'Risco operacional reduzido',
  'Sistemas preparados para evoluir',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-mono tracking-widest text-blue-400 uppercase mb-4 px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/5">
            Método de trabalho
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
            Execução técnica com{' '}
            <span className="text-gradient">visão de negócio</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Combinamos engenharia de software, entendimento de produto e critério operacional para entregar soluções que fazem sentido para o negócio, para o usuário e para a evolução futura do sistema.
          </p>
        </motion.div>

        {/* Delivery Method */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-sm font-mono tracking-widest text-slate-500 uppercase text-center mb-12">
            Da estratégia à operação
          </h3>
          <div className="relative">
            {/* Vertical line - continuous */}
            {/* Desktop: Center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-slate-800 hidden md:block" />
            {/* Mobile: Left aligned */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800 md:hidden" />

            <div className="space-y-12 md:space-y-0">
              {deliverySteps.map((item, index) => {
                const isLeft = index % 2 === 0;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between md:gap-0 pl-16 md:pl-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-900/10 z-10">
                        {/* Horizontal Connector Line for Desktop */}
                        <div
                          className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-slate-800 group-hover:bg-slate-600 transition-colors ${
                            isLeft ? '-right-9' : '-left-9'
                          }`}
                        />
                        {/* Horizontal Connector Line for Mobile */}
                        <div
                           className="md:hidden absolute top-8 -left-10 w-8 h-0.5 bg-slate-800 group-hover:bg-slate-600 transition-colors"
                        />

                        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">{item.period}</span>
                        <h4 className="text-lg font-bold text-slate-100 mt-1 mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center icon / Node */}
                    <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto z-20 md:my-0 flex-shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-950 border-4 border-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Spacer for opposite side to balance flex layout */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-sm font-mono tracking-widest text-slate-500 uppercase text-center mb-12">
            Como estruturamos projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100 mb-3">{pillar.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical governance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 p-8 md:p-12 text-center"
        >
          <p className="text-slate-400 text-sm font-mono tracking-widest uppercase mb-4">Governança técnica</p>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            A operação é conduzida com responsabilidade técnica de Gabriel Bessa e foco em decisões que equilibram velocidade, qualidade de engenharia e impacto de negócio.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {outcomes.map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
              >
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
