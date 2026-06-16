import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, ArrowUpRight, Bot, Cloud, Workflow, Activity, TrendingUp } from 'lucide-react';
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
      <div className={baseClasses} role="img" aria-label={`Diagrama de fluxo de dados de ${title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.06),transparent_40%)]" />
        
        {/* Node Graph Box */}
        <div className="absolute inset-4 rounded-xl border border-border bg-[#0a0f1d]/90 flex flex-col justify-center p-4 shadow-lg select-none">
          <span className="absolute top-2.5 left-3 text-[9px] font-mono text-text-muted uppercase tracking-wider">Grafo de Automação & IA</span>
          
          <div className="flex flex-col gap-4 relative mt-2">
            {/* Connecting lines SVG background */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 120" preserveAspectRatio="none">
              {/* Path 1: Webhook to Parser */}
              <path d="M30,30 L75,30" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              {/* Path 2: Parser to LLM */}
              <path d="M125,30 L170,30" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              {/* Path 3: Parser to DB */}
              <path d="M100,50 L100,75" fill="none" stroke="var(--border)" strokeWidth="1.5" />
              
              {/* Glowing Pulse Dot running from Webhook to Parser */}
              <motion.circle
                r="2.5"
                fill="var(--accent)"
                animate={{
                  cx: [30, 75],
                  cy: [30, 30]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear"
                }}
              />
              {/* Glowing Pulse Dot running from Parser to LLM */}
              <motion.circle
                r="2.5"
                fill="var(--accent)"
                animate={{
                  cx: [125, 170],
                  cy: [30, 30]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear",
                  delay: 1.25
                }}
              />
              {/* Glowing Pulse Dot running from Parser to DB */}
              <motion.circle
                r="2.5"
                fill="var(--accent)"
                animate={{
                  cx: [100, 100],
                  cy: [50, 75]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                  delay: 0.8
                }}
              />
            </svg>
            
            {/* Row 1: Input to Process */}
            <div className="flex items-center justify-between relative z-10">
              {/* Node 1: Webhook Input */}
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-lg border border-border bg-surface flex items-center justify-center text-accent shadow-sm">
                  <Workflow className="h-4.5 w-4.5" />
                </div>
                <span className="text-[8px] font-mono text-text-muted mt-1">Webhook</span>
              </div>
              
              {/* Node 2: Data Parser */}
              <div className="flex flex-col items-center">
                <div className="h-10 w-12 rounded-lg border border-accent/20 bg-accent/5 flex flex-col items-center justify-center text-accent shadow-md">
                  <span className="text-[7px] font-mono font-bold uppercase tracking-wider text-accent/80">Parser</span>
                  <Database className="h-3.5 w-3.5 mt-0.5" />
                </div>
                <span className="text-[8px] font-mono text-text mt-1 font-medium">Sistemas</span>
              </div>
              
              {/* Node 3: LLM AI Agent */}
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-lg border border-border bg-surface flex items-center justify-center text-accent shadow-sm">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <span className="text-[8px] font-mono text-text-muted mt-1">IA Agent</span>
              </div>
            </div>

            {/* Row 2: Secondary output (database sync) */}
            <div className="flex justify-center relative z-10">
              <div className="flex flex-col items-center">
                <div className="h-8 w-8 rounded-lg border border-border bg-surface flex items-center justify-center text-text-muted shadow-sm">
                  <Server className="h-4 w-4" />
                </div>
                <span className="text-[8px] font-mono text-text-muted mt-1">DB Sync</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'cloud') {
    return (
      <div className={baseClasses} role="img" aria-label={`Console DevOps de ${title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(139,92,246,0.06),transparent_45%)]" />
        
        {/* Terminal Box */}
        <div className="absolute inset-4 rounded-xl border border-border bg-[#0a0f1d]/90 flex flex-col overflow-hidden shadow-lg select-none">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#0d1321] border-b border-border text-[9px] font-mono text-text-muted">
            <span className="text-text">deploy-pipeline.yaml</span>
            <span className="text-emerald-400 font-bold">✔ DEPLOY SUCCESS</span>
          </div>
          
          {/* Logs */}
          <div className="p-3.5 flex-grow font-mono text-[9px] leading-5 text-slate-400 overflow-hidden flex flex-col justify-center select-text">
            <div className="flex items-center gap-1.5 text-text-muted">
              <span>$</span>
              <span>docker build -t app:latest .</span>
            </div>
            <div>[1/4] FROM node:20-alpine ... <span className="text-emerald-400">cached</span></div>
            <div>[2/4] COPY package.json ./ ... <span className="text-emerald-400">done</span></div>
            <div>[3/4] RUN pnpm install ... <span className="text-emerald-400">done in 4.2s</span></div>
            
            <div className="flex items-center gap-1.5 mt-1 border-t border-border/40 pt-1">
              <span className="text-emerald-400">✔</span>
              <span>pnpm run test: 12 passed, 100% OK</span>
            </div>
            <div className="flex items-center gap-1.5 text-accent font-semibold">
              <span>→</span>
              <span>pushing to aws-ecr:tag:latest</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1 border-t border-border/40 pt-1 text-emerald-400 font-semibold select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Container healthy. Cluster active on 3 instances.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: Products & SaaS
  return (
    <div className={baseClasses} role="img" aria-label={`Painel representativo de ${title}`}>
      {/* Soft radial background lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.08),transparent_40%)]" />
      
      {/* Mock SaaS Window Wrapper */}
      <div className="absolute inset-4 rounded-xl border border-border bg-[#0a0f1d]/90 flex flex-col overflow-hidden shadow-lg select-none">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-[#0d1321] border-b border-border text-[10px] font-mono text-text-muted">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-text">app.saas-platform.com</span>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded text-[9px]">v1.4.2</span>
        </div>
        
        {/* Dashboard Grid */}
        <div className="p-3 flex-grow grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Monthly Revenue Chart */}
          <div className="rounded-lg border border-border bg-surface/30 p-2.5 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block">Receita Mensal</span>
              <span className="text-sm font-bold font-mono text-text">$24,850.00</span>
              <span className="text-[9px] font-mono text-emerald-400 font-semibold block">+12.4% vs mês ant.</span>
            </div>
            {/* Mini Area Chart SVG */}
            <div className="h-10 w-full mt-2">
              <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0"/>
                  </linearGradient>
                </defs>
                {/* Fill area */}
                <path d="M0,30 L0,20 C15,18 20,25 35,12 C50,22 65,8 80,18 L100,5 L100,30 Z" fill="url(#chartGlow)" />
                {/* Line */}
                <path d="M0,20 C15,18 20,25 35,12 C50,22 65,8 80,18 L100,5" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Pointer Dot */}
                <circle cx="100" cy="5" r="2.5" fill="var(--accent)" />
                <circle cx="100" cy="5" r="4.5" fill="none" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1" className="animate-ping" />
              </svg>
            </div>
          </div>
          
          {/* Recent Payments List */}
          <div className="rounded-lg border border-border bg-surface/30 p-2.5 flex flex-col gap-1.5 overflow-hidden">
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-wider block mb-1">Transações Recentes</span>
            
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-border/50 pb-1">
              <span className="text-text truncate max-w-[70px] select-text">Gabriel Bessa</span>
              <span className="text-emerald-400 font-semibold">$120.00</span>
              <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Pago</span>
            </div>
            
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-border/50 pb-1">
              <span className="text-text truncate max-w-[70px] select-text">Mariana C.</span>
              <span className="text-emerald-400 font-semibold">$89.00</span>
              <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Pago</span>
            </div>
            
            <div className="flex items-center justify-between text-[10px] font-mono pb-1">
              <span className="text-text truncate max-w-[70px] select-text">Alex O.</span>
              <span className="text-emerald-400 font-semibold">$120.00</span>
              <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">Pago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const tagItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

const Card = ({ title, description, icon: Icon, visual, className, delay, tags, featured, slug }) => (
  <motion.a 
    href={slug}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(139, 92, 246, 0.35)" }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 hover:shadow-2xl hover:shadow-brand/5 md:p-8 block ${className}`}
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
        <p className="text-text-muted leading-relaxed mb-6 font-sans">{description}</p>
        
        <motion.div 
          variants={tagContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-auto flex flex-wrap gap-2"
        >
          {tags.map(tag => (
            <motion.span 
              variants={tagItemVariants}
              key={tag} 
              className="text-xs font-mono py-1 px-2.5 rounded-md bg-bg text-text-muted border border-border"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.a>
);

const MetricCard = ({ title, metric, description, company, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, scale: 1.015, borderColor: "rgba(139, 92, 246, 0.35)" }}
    transition={{ delay, duration: 0.5 }}
    className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 hover:shadow-2xl hover:shadow-brand/5 md:p-8 flex flex-col justify-between"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-colors" />
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-mono tracking-widest text-accent uppercase">{title}</div>
        {Icon && <Icon className="w-5 h-5 text-accent opacity-80" />}
      </div>
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
    <section id="services" className="py-24 bg-bg relative font-sans overflow-visible">
      {/* Slanted top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden pointer-events-none -translate-y-[99%] z-0">
        <svg className="absolute bottom-0 w-full h-full text-bg fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 L1200,0 L1200,120 Z" />
        </svg>
      </div>

      {/* Dot Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none z-0" />

      {/* Decorative Orbs */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
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
            icon={Activity}
          />

          {/* Card 3: Big Data Metric (col-span-1) */}
          <MetricCard 
            title="Inteligência de Dados"
            metric="10M+ leads"
            description="Registros processados e enriquecidos diariamente sob demanda através de fluxos de scraping escaláveis e eficientes."
            company="Everleads"
            delay={0.3}
            icon={TrendingUp}
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
