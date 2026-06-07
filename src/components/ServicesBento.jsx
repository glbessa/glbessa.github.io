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
  const baseClasses = 'relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70';

  if (type === 'data') {
    return (
      <div className={baseClasses} role="img" aria-label={`Imagem sobre ${title}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.22),transparent_34%),radial-gradient(circle_at_76%_74%,rgba(59,130,246,0.2),transparent_34%)]" />
        <div className="absolute left-6 right-6 top-7 flex items-center justify-between">
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-200">Dados</div>
          <Bot className="h-7 w-7 text-emerald-300" />
        </div>
        <div className="absolute bottom-7 left-6 right-6 space-y-3">
          {[72, 48, 86, 62].map((width, index) => (
            <div key={width} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <div className="h-3 flex-1 rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${width}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.08, duration: 0.7 }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-blue-400"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(59,130,246,0.22),transparent_36%),radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.16),transparent_32%)]" />
        <Cloud className="absolute left-1/2 top-8 h-16 w-16 -translate-x-1/2 text-blue-300" />
        <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-3">
          {['API', 'CI', 'OBS'].map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.45 }}
              className="rounded-xl border border-blue-300/20 bg-blue-300/10 px-3 py-4 text-center text-xs font-semibold text-blue-100"
            >
              {label}
            </motion.div>
          ))}
        </div>
        <div className="absolute left-1/2 top-24 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-blue-300/70 to-transparent" />
      </div>
    );
  }

  return (
    <div className={baseClasses} role="img" aria-label={`Imagem sobre ${title}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(16,185,129,0.18),transparent_34%)]" />
      <div className="absolute left-6 right-6 top-7 rounded-2xl border border-blue-300/20 bg-slate-900/80 p-4 shadow-2xl shadow-blue-950/30">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="grid grid-cols-[1fr_0.7fr] gap-3">
          <div className="space-y-2">
            <div className="h-4 rounded-full bg-blue-300/50" />
            <div className="h-3 rounded-full bg-slate-700" />
            <div className="h-3 w-4/5 rounded-full bg-slate-700" />
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-400/30 to-emerald-300/20 p-4">
            <Workflow className="h-10 w-10 text-blue-100" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-8 right-8 grid grid-cols-3 gap-2">
        <span className="h-12 rounded-xl border border-white/10 bg-white/5" />
        <span className="h-12 rounded-xl border border-white/10 bg-white/5" />
        <span className="h-12 rounded-xl border border-white/10 bg-white/5" />
      </div>
    </div>
  );
};

const Card = ({ title, description, icon: Icon, visual, className, delay, tags, featured }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-900/10 md:p-8 ${className}`}
  >
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="w-6 h-6 text-slate-400" />
    </div>

    <div className={`grid h-full gap-6 ${featured ? 'lg:grid-cols-[0.95fr_1.05fr]' : ''}`}>
      <ServiceVisual type={visual} title={title} />

      <div className="flex h-full flex-col">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
        <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs font-mono py-1 px-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ServicesBento = () => {
  const { servicesSection } = getData();
  const [highlightStart, highlightEnd] = servicesSection.title.split(servicesSection.highlight);

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
            {highlightStart}<span className="text-gradient">{servicesSection.highlight}</span>{highlightEnd}
          </h2>
          <p className="text-slate-400 text-lg">
            {servicesSection.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {servicesSection.services.map((service, index) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              visual={service.visual}
              className={index === 0 ? 'md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-900/50' : 'md:col-span-1'}
              delay={index * 0.2}
              tags={service.tags}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
