import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Cloud, 
  Cpu, 
  TrendingDown, 
  AlertTriangle, 
  Activity,
  Layers, 
  Workflow, 
  Search, 
  Network, 
  Rocket, 
  Gauge, 
  ChevronDown, 
  HelpCircle, 
  Mail, 
  MessageSquare,
  ShieldAlert,
  Server
} from 'lucide-react';
import { getData } from '../../data';
import Contact from '../_Contact';

const pains = [
  {
    icon: ShieldAlert,
    title: 'Quedas sob Picos de Acesso',
    problem: 'O sistema fica lento ou cai completamente quando há um aumento súbito de usuários simultâneos (ex: campanhas de marketing ou horários de pico).'
  },
  {
    icon: AlertTriangle,
    title: 'Processo de Deploy Lento e Manual',
    problem: 'Lançar novas atualizações do software exige processos manuais demorados, gerando medo de "quebrar a produção" e exigindo madrugadas de trabalho.'
  },
  {
    icon: TrendingDown,
    title: 'Falta de Monitoramento e Visibilidade',
    problem: 'Você só descobre que o sistema caiu porque um cliente reclamou, sem ter visibilidade de onde está o gargalo (memória, banco de dados ou código).'
  }
];

const techCategories = [
  {
    title: 'Provedores Cloud',
    description: 'Escolha da nuvem ideal baseada na complexidade do produto e orçamento do cliente.',
    techs: [
      { name: 'AWS', slug: 'amazonaws' },
      { name: 'Google Cloud', slug: 'googlecloud' },
      { name: 'DigitalOcean', slug: 'digitalocean' }
    ]
  },
  {
    title: 'Infraestrutura & Containers',
    description: 'Padronização de ambientes e declaração de infraestrutura como código.',
    techs: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Terraform', slug: 'terraform' }
    ]
  },
  {
    title: 'Automação & CI/CD',
    description: 'Automação completa dos fluxos de teste, validação e deploy.',
    techs: [
      { name: 'GitHub Actions', slug: 'githubactions' }
    ]
  },
  {
    title: 'Monitoramento & Observabilidade',
    description: 'Coleta de métricas e rastreamento de erros de aplicação em tempo real.',
    techs: [
      { name: 'Grafana', slug: 'grafana' },
      { name: 'Prometheus', slug: 'prometheus' },
      { name: 'Sentry', slug: 'sentry' },
      { name: 'Datadog', slug: 'datadog' }
    ]
  }
];

const steps = [
  {
    num: '01',
    title: 'Auditoria Técnica',
    description: 'Analisamos sua infraestrutura atual, custos de faturamento da nuvem, gargalos e políticas de segurança.',
    icon: Search
  },
  {
    num: '02',
    title: 'Design de Arquitetura Cloud',
    description: 'Desenhamos a proposta da nova infraestrutura (redes seguras, balanceadores de carga, banco de dados isolado) focando no melhor custo-benefício.',
    icon: Network
  },
  {
    num: '03',
    title: 'Migração & Dockerização Progressiva',
    description: 'Movemos serviços de forma isolada, criando containers e pipelines de CI/CD para que o time técnico adote o novo fluxo gradualmente.',
    icon: Rocket
  },
  {
    num: '04',
    title: 'Entrega com Observabilidade',
    description: 'Ativação de alertas de incidentes e dashboards de performance, seguidos pelo treinamento do time para sustentar o ambiente com tranquilidade.',
    icon: Gauge
  }
];

const faqs = [
  {
    question: 'A migração de infraestrutura causará indisponibilidade no sistema para os clientes?',
    answer: 'Não. Planejamos e executamos a migração utilizando técnicas de deploy azul-verde (blue-green) ou migração em etapas. O novo ambiente é testado por completo em paralelo, e a virada de tráfego ocorre sem que seus clientes percebam qualquer interrupção.'
  },
  {
    question: 'A consultoria consegue reduzir os custos atuais da AWS ou Google Cloud?',
    answer: 'Sim. Um dos primeiros passos da Auditoria Técnica é identificar recursos subutilizados, servidores superdimensionados (overprovisioned) e transferências de dados desnecessárias. Na maioria dos projetos, conseguimos reduções significativas de custos logo no primeiro mês.'
  },
  {
    question: 'Como funciona o suporte caso ocorra alguma queda no servidor?',
    answer: 'Projetamos a infraestrutura para ser auto-regenerativa (auto-scaling e reinício de containers com falha automáticos). Além disso, estruturamos alertas automáticos de logs e bugs que notificam os responsáveis em tempo real para ações corretivas rápidas.'
  }
];

const cases = [
  {
    title: 'Primeira Mesa — Escala de APIs e Infraestrutura',
    scope: 'Migração completa de infraestrutura de servidores legados, otimização de concorrência e deploy contínuo em nuvem.',
    result: 'Sustentabilidade operacional sob cargas extremas, permitindo processar milhares de requisições de reserva por segundo sem oscilações.',
    metric: '1.200 req/s',
    metricLabel: 'Pico Sustentado',
    tags: ['Migração Cloud', 'Zero-Downtime', 'CI/CD', 'Docker']
  },
  {
    title: 'Everleads — Otimização de Bancos de Dados em Nuvem',
    scope: 'Estruturação de bancos de dados relacionais e em nuvem para sustentar pipelines de Big Data.',
    result: 'Redução drástica nos tempos de consulta e gargalos de gravação de dados, gerando menor custo operacional de servidores.',
    metric: '10M+ leads/dia',
    metricLabel: 'Pipelines Big Data',
    tags: ['PostgreSQL', 'Performance Tuning', 'Cloud DB', 'Otimização']
  },
  {
    title: 'Klimaa — Deploy e Infraestrutura IoT com Docker',
    scope: 'Criação de ambiente dockerizado estável para orquestração de APIs em FastAPI de alta performance voltadas para processamento de sensores IoT em tempo real.',
    result: 'Facilidade no provisionamento de novos ambientes locais e em nuvem de forma padronizada.',
    metric: 'Real-time IoT',
    metricLabel: 'FastAPI + Docker',
    tags: ['FastAPI', 'Docker', 'IoT Orchestration', 'Padronização']
  }
];

export default function CloudDevOps() {
  const data = getData();
  const { contactInfo } = data.author;
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de agendar um Diagnóstico de Cloud e DevOps para minha empresa.')}`;

  return (
    <div className="bg-bg text-text font-sans">
      
      {/* DOBRA 1: HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-bg">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-bg">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-brand rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-brand rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium mb-4 uppercase tracking-wider">
                  [ SERVIÇO // CLOUD, DEVOPS E CONFIABILIDADE ]
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-text font-sora">
                  Infraestrutura em nuvem projetada para suportar <span className="text-gradient">picos de acessos</span> e otimizar custos
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base md:text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Estruturamos e migramos infraestruturas cloud com foco em estabilidade, segurança e observabilidade. Reduzimos riscos de indisponibilidade em ambientes de produção e automatizamos deploys para eliminar erros humanos.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="#contact-form" 
                  className="btn-primary w-full sm:w-auto"
                >
                  Solicitar Diagnóstico de Infraestrutura
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="#cases" 
                  className="btn-secondary w-full sm:w-auto"
                >
                  Ver Casos de Escala
                </a>
              </motion.div>
            </div>

            {/* Visual Content: Interactive Code / Cluster Monitor */}
            <div className="lg:w-1/2 w-full pt-10 lg:pt-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="glass-card rounded-3xl p-6 border border-border bg-surface/30 backdrop-blur-md relative overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-border/50 mb-4">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/60" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <span className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="text-xs font-mono text-text-muted flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-accent" />
                      <span>prod-infra-scale.tf</span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="font-mono text-xs md:text-sm space-y-4 text-left overflow-x-auto max-h-[300px] scrollbar-thin">
                    <div className="text-emerald-400"># Terraform: Provisioning scale environment</div>
                    <div className="text-blue-400">resource <span className="text-purple-400">"aws_autoscaling_group"</span> <span className="text-amber-300">"web"</span> {'{'}</div>
                    <div className="pl-4 text-slate-300">
                      min_size = <span className="text-emerald-400">3</span><br />
                      max_size = <span className="text-emerald-400">50</span><br />
                      desired_capacity = <span className="text-emerald-400">6</span>
                    </div>
                    <div className="text-blue-400">{'}'}</div>
                    
                    <div className="border-t border-border/30 pt-4 mt-4 space-y-2">
                      <div className="flex justify-between items-center text-text text-[11px] uppercase tracking-wider text-text-muted">
                        <span>Cluster Status</span>
                        <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                          Healthy
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        <div className="p-3 bg-bg/60 rounded-xl border border-border/50 text-center">
                          <span className="block text-[10px] text-text-muted uppercase tracking-wider font-mono">CPU</span>
                          <span className="text-base md:text-lg font-bold text-accent">14.2%</span>
                        </div>
                        <div className="p-3 bg-bg/60 rounded-xl border border-border/50 text-center">
                          <span className="block text-[10px] text-text-muted uppercase tracking-wider font-mono">REQ/S</span>
                          <span className="text-base md:text-lg font-bold text-emerald-400">2.4k</span>
                        </div>
                        <div className="p-3 bg-bg/60 rounded-xl border border-border/50 text-center">
                          <span className="block text-[10px] text-text-muted uppercase tracking-wider font-mono">MEM</span>
                          <span className="text-base md:text-lg font-bold text-purple-400">42%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative floating badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 p-3 bg-surface-hi rounded-xl border border-border shadow-xl flex items-center gap-2 z-20"
                >
                  <Cloud className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono font-medium">AWS</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-4 -left-4 p-3 bg-surface-hi rounded-xl border border-border shadow-xl flex items-center gap-2 z-20"
                >
                  <Cpu className="w-4 h-4 text-brand" />
                  <span className="text-xs font-mono font-medium">Terraform</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Metrics of Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 border-t border-border/60 pt-10 font-mono">
            <div className="flex flex-col p-6 rounded-2xl bg-surface/20 border border-border/40 hover:border-accent/30 transition-all group">
              <span className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">INFRA_SCALE</span>
              <span className="text-xl lg:text-2xl font-extrabold text-text mb-1 group-hover:text-accent transition-colors">Milhares de req/s</span>
              <span className="text-xs text-text-muted font-sans mt-1">Sustentadas sob cargas críticas de tráfego.</span>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-surface/20 border border-border/40 hover:border-accent/30 transition-all group">
              <span className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">DEPLOY_AUTOMATION</span>
              <span className="text-xl lg:text-2xl font-extrabold text-text mb-1 group-hover:text-accent transition-colors">Zero-Downtime</span>
              <span className="text-xs text-text-muted font-sans mt-1">Deploys contínuos sem interromper a operação.</span>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-surface/20 border border-border/40 hover:border-accent/30 transition-all group">
              <span className="text-xs text-accent uppercase tracking-wider mb-2 font-bold">COST_REDUCTION</span>
              <span className="text-xl lg:text-2xl font-extrabold text-text mb-1 group-hover:text-accent transition-colors">Até 35% Economia</span>
              <span className="text-xs text-text-muted font-sans mt-1">Otimização de recursos ociosos no servidor.</span>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 2: DESAFIOS COMUNS (A DOR DO CLIENTE) */}
      <section className="py-24 bg-bg border-t border-border relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Sinais de Alerta
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora max-w-3xl mx-auto leading-tight">
              O crescimento da sua empresa está ameaçado por instabilidade técnica?
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mt-4 font-sans">
              Identifique se a infraestrutura atual do seu software apresenta estes sinais de alerta:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pains.map((pain, index) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col p-8 bg-surface/40 rounded-3xl border border-border hover:border-red-500/20 hover:bg-surface/60 transition-all duration-300 group hover:shadow-xl hover:shadow-red-500/5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/10 transition-colors" />
                  <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                    {pain.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed font-sans mt-auto">
                    {pain.problem}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 3: A SOLUÇÃO (NOSSA ENGENHARIA NA PRÁTICA) */}
      <section className="py-24 bg-surface/20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Nossa Abordagem
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text font-sora">
              Como garantimos a confiabilidade da sua aplicação
            </h2>
            <p className="text-text-muted text-base md:text-lg">
              Desenhamos infraestruturas modernas que funcionam com autonomia, permitindo que seu time foque em desenvolver o produto.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Card A: IaC (Destaque - col-span-2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-brand/5 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-text-muted" />
              </div>
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 items-center">
                {/* Visual side */}
                <div className="bg-bg/50 rounded-2xl border border-border p-4 font-mono text-[11px] leading-relaxed text-slate-300 relative overflow-hidden min-h-[160px] flex flex-col justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_35%)]" />
                  <div className="text-accent font-bold mb-2"># terraform/main.tf</div>
                  <div>provider <span className="text-purple-400">"aws"</span> {'{'} region = <span className="text-emerald-400">"us-east-1"</span> {'}'}</div>
                  <div className="mt-1">module <span className="text-purple-400">"vpc"</span> {'{'}</div>
                  <div className="pl-4">source = <span className="text-emerald-400">"terraform-aws-modules/vpc/aws"</span></div>
                  <div className="pl-4">cidr   = <span className="text-emerald-400">"10.0.0.0/16"</span></div>
                  <div>{'}'}</div>
                </div>
                {/* Text side */}
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg border border-border group-hover:scale-110 transition-transform">
                    <Terminal className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text mb-3 font-sora">Infraestrutura como Código (IaC)</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Provisionamento automatizado e documentado de servidores utilizando Terraform. Isso garante que ambientes de Teste, Homologação e Produção sejam idênticos, facilitando replicações em minutos.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card B: Containers (col-span-1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-brand/5 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-text-muted" />
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg border border-border group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-3 font-sora">Containers e Dockerização</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Empacotamento de aplicações e serviços em containers Docker para assegurar consistência: o código roda exatamente da mesma forma no computador do desenvolvedor e na nuvem.
                </p>
              </div>
            </motion.div>

            {/* Card C: Pipelines CI/CD (col-span-1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="md:col-span-1 group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-brand/5 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-text-muted" />
              </div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-bg border border-border group-hover:scale-110 transition-transform">
                <Workflow className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-3 font-sora">Pipelines CI/CD Automatizados</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  Integração e entrega contínuas (GitHub Actions) que rodam testes automatizados e atualizam o servidor de forma limpa, sem indisponibilidade para o usuário.
                </p>
              </div>
            </motion.div>

            {/* Card D: Observabilidade (Destaque - col-span-2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-8 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-brand/5 flex flex-col justify-between"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-text-muted" />
              </div>
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-center">
                {/* Text side */}
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg border border-border group-hover:scale-110 transition-transform">
                    <Activity className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text mb-3 font-sora">Observabilidade & Métricas</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Instalação de ferramentas de logs e métricas (Prometheus, Grafana, Datadog) para detectar gargalos antes que eles afetem os usuários finais da plataforma.
                  </p>
                </div>
                {/* Visual side */}
                <div className="bg-bg/50 rounded-2xl border border-border p-4 flex flex-col gap-2 relative overflow-hidden min-h-[160px] justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_35%)]" />
                  <div className="flex justify-between items-center text-[10px] text-text-muted font-mono">
                    <span>latency-monitor-http</span>
                    <span className="text-accent font-bold">avg: 45ms</span>
                  </div>
                  <div className="h-12 flex items-end gap-1 px-2 border-b border-border/50 pb-1">
                    {[12, 18, 15, 22, 14, 25, 45, 120, 32, 16, 20, 15, 18, 12, 14, 15, 12].map((height, i) => (
                      <div 
                        key={i} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${
                          height > 40 ? 'bg-red-500/80' : 'bg-accent/60'
                        }`} 
                        style={{ height: `${(height / 120) * 100}%` }}
                      />
                    ))}
                  </div>
                  <div className="text-[9px] font-mono text-text-muted text-center pt-1">Logs coletados em tempo real de contêineres</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DOBRA 4: PROVA DE ENGENHARIA (CASOS REAIS) */}
      <section id="cases" className="py-24 bg-bg border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Casos Reais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora">
              Engenharia de infraestrutura validada em alta escala
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mt-4 font-sans">
              Soluções de cloud e DevOps desenhadas para sustentar tráfego crítico.
            </p>
          </div>

          <div className="space-y-12">
            {cases.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-8 rounded-3xl bg-surface/30 border border-border hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-brand/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left Column: Scope and description */}
                  <div className="space-y-4 lg:w-2/3">
                    <span className="inline-block text-[10px] font-mono tracking-widest text-accent uppercase font-bold">
                      Caso de Estudo {idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-text font-sora">{cs.title}</h3>
                    
                    <div className="space-y-2">
                      <p className="text-text text-sm font-medium font-sans">
                        <strong className="text-accent/90">Escopo técnico:</strong> {cs.scope}
                      </p>
                      <p className="text-text-muted text-sm leading-relaxed font-sans">
                        <strong className="text-text/90">Resultado operacional:</strong> {cs.result}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.tags.map((tg, i) => (
                        <span key={i} className="text-xs font-mono py-1 px-2.5 rounded-md bg-bg text-text-muted border border-border">
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Metric Callout */}
                  <div className="lg:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-bg/50 rounded-2xl border border-border/80 lg:min-h-[160px] group-hover:border-accent/20 transition-colors">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider mb-2 font-bold">{cs.metricLabel}</span>
                    <span className="text-3xl font-extrabold font-mono text-text tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {cs.metric}
                    </span>
                    <span className="text-xs text-text-muted font-sans font-medium">Operação Estabilizada</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 5: STACK TECNOLÓGICA (A BASE TÉCNICA) */}
      <section className="py-24 bg-surface/20 border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Tecnologias Utilizadas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora">
              O ecossistema moderno da confiabilidade cloud
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mt-4 font-sans">
              Tecnologias consolidadas pelo mercado para garantir previsibilidade e portabilidade de nuvem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-6 rounded-3xl bg-surface border border-border hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-brand/5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-text mb-2 font-sora flex items-center gap-2.5">
                    <Server className="w-5 h-5 text-accent" />
                    {cat.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
                    {cat.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50 mt-auto">
                  {cat.techs.map((tech, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-bg border border-border/80 text-xs text-text-muted font-mono hover:text-text hover:border-accent/40 transition-colors cursor-pointer"
                      title={tech.name}
                    >
                      <img 
                        src={`https://cdn.simpleicons.org/${tech.slug}`} 
                        alt={tech.name} 
                        className="h-4 w-4 object-contain grayscale group-hover:grayscale-0 transition-all"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOBRA 6: PROCESSO DE TRABALHO (O MÉTODO DA CONSULTORIA) */}
      <section className="py-24 bg-bg border-t border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Fluxo de Execução
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora">
              O caminho para uma infraestrutura estável
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mt-4 font-sans">
              Metodologia clara dividida em etapas focadas em controle, segurança e previsibilidade operacional.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-border md:hidden" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between pl-16 md:pl-0 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Box */}
                    <div className={`w-full md:w-[45%] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 hover:bg-surface/50 transition-all hover:shadow-xl z-10">
                        {/* Horizontal Connector Line for Desktop */}
                        <div
                          className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-border group-hover:bg-accent/30 transition-colors ${
                            isLeft ? '-right-9' : '-left-9'
                          }`}
                        />
                        {/* Horizontal Connector Line for Mobile */}
                        <div className="md:hidden absolute top-8 -left-10 w-8 h-0.5 bg-border group-hover:bg-accent/30 transition-colors" />

                        <span className="text-xs font-mono text-accent tracking-widest uppercase font-bold">{step.num} // FASE</span>
                        <h4 className="text-lg font-bold text-text mt-1 mb-2 font-sora">{step.title}</h4>
                        <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto z-20 flex-shrink-0 flex justify-center w-12">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-bg border-4 border-border text-text-muted group-hover:text-accent group-hover:border-accent/50 transition-all shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Spacer to balance */}
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 7: FAQ ESPECÍFICO (QUEBRANDO OBJEÇÕES) */}
      <section className="py-24 bg-surface/20 border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Principais Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto mt-4 font-sans">
              Respostas para as principais objeções sobre infraestrutura, migrações e otimização de custos de cloud.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-surface/30 border border-border rounded-2xl overflow-hidden hover:border-accent/20 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span className="font-bold text-text group-hover:text-accent transition-colors font-sora text-base md:text-lg flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 ml-4 p-1 rounded-lg bg-surface-hi text-text-muted group-hover:text-text transition-colors border border-border"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 pl-14 border-t border-border/10">
                          <p className="text-text-muted text-sm leading-relaxed font-sans">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOBRA 8: CTA FINAL & FORMULÁRIO DE CAPTAÇÃO */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-bg to-surface border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Diagnóstico de Infraestrutura
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora max-w-3xl mx-auto">
              Sua infraestrutura cloud está pronta para o crescimento da sua empresa?
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Agende uma auditoria prévia gratuita de 30 minutos. Vamos identificar os pontos críticos de custo e estabilidade do seu ambiente técnico atual.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar Diagnóstico de Cloud
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Enviar e-mail para {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Embedded Lead Capture Form */}
          <div className="mt-16">
            <Contact />
          </div>
        </div>
      </section>

    </div>
  );
}
