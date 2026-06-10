import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, ArrowUpRight, Bot, Cloud, Workflow } from 'lucide-react';
import { getData } from '../data';

const iconMap = {
  database: Database,
  layout: Layout,
  server: Server,
};

const ServiceVisual = ({ type, title }) => {
  const baseClasses = 'relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-border bg-bg/50';

  if (type === 'data') {
    return (
      <div className={baseClasses} role="img" aria-label={`Imagem sobre ${title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_34%),radial-gradient(circle_at_76%_74%,rgba(109,40,217,0.1),transparent_34%)]" />
        <div className="absolute left-6 right-6 top-7 flex items-center justify-between">
          <div className="rounded-xl border border-accent/20 bg-accent/10 px-3 py-2 text-xs font-mono font-medium text-accent">Dados</div>
          <Bot className="h-7 w-7 text-accent" />
        </div>
        <div className="absolute bottom-7 left-6 right-6 space-y-3">
          {[72, 48, 86, 62].map((width, index) => (
            <div key={width} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <div className="h-3 flex-1 rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${width}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.7 }}
                  className="h-full rounded-full bg-gradient-to-r from-brand to-accent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === 'cloud') {
    return (
      <div className={baseClasses} role="img" aria-label={`Imagem sobre ${title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(139,92,246,0.15),transparent_36%),radial-gradient(circle_at_70%_70%,rgba(109,40,217,0.1),transparent_32%)]" />
        <Cloud className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 text-accent" />
        <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-3">
          {['API', 'CI', 'OBS'].map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="rounded-xl border border-brand/20 bg-brand/10 px-3 py-4 text-center text-xs font-mono font-semibold text-text"
            >
              {label}
            </motion.div>
          ))}
        </div>
        <div className="absolute left-1/2 top-24 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-accent/70 to-transparent" />
      </div>
    );
  }

  return (
    <div className={baseClasses} role="img" aria-label={`Imagem sobre ${title}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(139,92,246,0.15),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(109,40,217,0.1),transparent_34%)]" />
      <div className="absolute left-6 right-6 top-7 rounded-2xl border border-brand/20 bg-surface/80 p-4 shadow-2xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="grid grid-cols-[1fr_0.7fr] gap-3">
          <div className="space-y-2">
            <div className="h-4 rounded-full bg-accent/30" />
            <div className="h-3 rounded-full bg-surface" />
            <div className="h-3 w-4/5 rounded-full bg-surface" />
          </div>
          <div className="rounded-xl bg-gradient-to-br from-brand/30 to-accent/20 p-4 flex items-center justify-center">
            <Workflow className="h-10 w-10 text-text" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-8 right-8 grid grid-cols-3 gap-2">
        <span className="h-12 rounded-xl border border-border bg-surface/30" />
        <span className="h-12 rounded-xl border border-border bg-surface/30" />
        <span className="h-12 rounded-xl border border-border bg-surface/30" />
      </div>
    </div>
  );
};

const Card = ({ title, description, icon: Icon, visual, className, delay, tags, featured, slug }) => (
  <motion.a 
    href={slug}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 md:p-8 block ${className}`}
  >
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-6 h-6 text-text-muted" />
    </div>

    <div className={`grid h-full gap-6 ${featured ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''}`}>
      <ServiceVisual type={visual} title={title} />

      <div className="flex h-full flex-col">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg border border-border transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        
        <h3 className="text-2xl font-bold text-text mb-3 font-sora">{title}</h3>
        <p className="text-text-muted leading-relaxed mb-6">{description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono py-1 px-2.5 rounded-md bg-bg text-text-muted border border-border">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.a>
);

const MetricCard = ({ title, metric, description, company, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 md:p-8 flex flex-col justify-between"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-colors" />
    <div>
      <div className="text-[10px] font-mono tracking-widest text-accent uppercase mb-4">{title}</div>
      <div className="text-4xl md:text-5xl font-extrabold font-mono text-text tracking-tight mb-4 group-hover:text-accent transition-colors">
        {metric}
      </div>
      <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
        {description}
      </p>
    </div>
    <div className="mt-auto flex justify-between items-center border-t border-border pt-4">
      <span className="text-xs font-mono text-text-muted">Impacto</span>
      <span className="text-xs font-mono font-bold text-text bg-bg px-2.5 py-1 rounded-md border border-border">
        {company}
      </span>
    </div>
  </motion.div>
);

const ServicesBento = () => {
  const { servicesSection } = getData();
  const [highlightStart, highlightEnd] = servicesSection.title.split(servicesSection.highlight);

  return (
    <section id="services" className="py-24 bg-bg relative font-sans">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text font-sora">
            {highlightStart}<span className="text-gradient">{servicesSection.highlight}</span>{highlightEnd}
          </h2>
          <p className="text-text-muted text-lg">
            {servicesSection.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Card 1: SaaS (col-span-2) */}
          <Card
            title={servicesSection.services[0].title}
            description={servicesSection.services[0].description}
            icon={iconMap[servicesSection.services[0].icon]}
            visual={servicesSection.services[0].visual}
            className="md:col-span-2 bg-gradient-to-br from-surface to-surface/50"
            delay={0.1}
            tags={servicesSection.services[0].tags}
            featured={true}
            slug={servicesSection.services[0].slug}
          />

          {/* Card 2: Cloud Metric (col-span-1) */}
          <MetricCard 
            title="Sistemas em Produção"
            metric="1.200 req/s"
            description="Pico de requisições concorrentes suportado em produção com alta disponibilidade e zero downtime durante migração de servidores."
            company="Primeira Mesa"
            delay={0.2}
          />

          {/* Card 3: Big Data Metric (col-span-1) */}
          <MetricCard 
            title="Inteligência de Dados"
            metric="10M+ leads"
            description="Registros processados e enriquecidos diariamente sob demanda através de fluxos de scraping escaláveis e eficientes."
            company="Everleads"
            delay={0.3}
          />

          {/* Card 4: IA & Dados (col-span-1) */}
          <Card
            title={servicesSection.services[1].title}
            description={servicesSection.services[1].description}
            icon={iconMap[servicesSection.services[1].icon]}
            visual={servicesSection.services[1].visual}
            className="md:col-span-1"
            delay={0.4}
            tags={servicesSection.services[1].tags}
            featured={false}
            slug={servicesSection.services[1].slug}
          />

          {/* Card 5: Cloud & DevOps (col-span-1) */}
          <Card
            title={servicesSection.services[2].title}
            description={servicesSection.services[2].description}
            icon={iconMap[servicesSection.services[2].icon]}
            visual={servicesSection.services[2].visual}
            className="md:col-span-1"
            delay={0.5}
            tags={servicesSection.services[2].tags}
            featured={false}
            slug={servicesSection.services[2].slug}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
