import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  Smartphone, 
  Database, 
  Cpu, 
  AlertTriangle, 
  Unplug, 
  ShieldAlert, 
  Layers, 
  CreditCard, 
  Sliders, 
  ChevronDown, 
  MessageSquare, 
  Mail, 
  ArrowUpRight, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { getData } from '../../data';
import Contact from '../_Contact';

const caseStudies = [
  {
    id: 'vemcon',
    company: 'Vemcon',
    category: 'Plataforma de Consórcios e Pagamentos',
    escopo: 'Arquitetura e desenvolvimento de plataforma financeira integrada a APIs de pagamento e assinaturas recorrentes com alta segurança transacional e conciliação automática.',
    diferencial: 'Mitigação de riscos em conciliações automáticas e suporte a transações críticas em produção.',
    tags: ['Fintech', 'Next.js', 'Node.js', 'PostgreSQL', 'APIs de Pagamento']
  },
  {
    id: 'cluster',
    company: 'Cluster',
    category: 'Plataforma SaaS e Monitoramento',
    escopo: 'Desenvolvimento de plataforma web em React para processamento de faturamentos corporativos complexos e dashboards de monitoramento operacional em tempo real.',
    diferencial: 'Processamento rápido de dados volumosos com interface limpa e intuitiva para decisores.',
    tags: ['SaaS', 'React', 'TypeScript', 'TailwindCSS', 'Real-time Dashboards']
  },
  {
    id: 'pesagens',
    company: 'Pesagens de Gado',
    category: 'Integração de Hardware e Software',
    escopo: 'Aplicativo móvel robusto integrado via Bluetooth com balanças industriais, automatizando a coleta de dados de rebanhos bovinos em tempo real.',
    diferencial: 'Conectividade em ambientes offline e interface focada no operador de campo.',
    tags: ['Mobile', 'Flutter', 'Bluetooth', 'IoT', 'Agropecuária']
  }
];

const faqs = [
  {
    question: "1. Quem será o proprietário do código do sistema?",
    answer: "O código-fonte é 100% de propriedade do cliente após a conclusão das entregas. Não prendemos sua empresa a licenças proprietárias ou ferramentas de \"caixa preta\"."
  },
  {
    question: "2. A consultoria ajuda a montar ou treinar um time interno no futuro?",
    answer: "Sim. Fazemos parte do processo de estruturação da arquitetura e das boas práticas para que, quando sua empresa estiver pronta para internalizar o desenvolvimento, o handover técnico seja transparente."
  },
  {
    question: "3. Como são tratadas as integrações com sistemas legados ou ERPs externos?",
    answer: "Mapeamos as APIs de ERPs (como Totvs, Omie, Bling) ou sistemas legados durante a fase de Diagnóstico para projetar camadas de integração assíncronas e resilientes, que não quebram o fluxo do sistema se a API externa cair."
  }
];

const _ProdutosSaaS = () => {
  const data = getData();
  const { contactInfo } = data.author;
  const [activeCase, setActiveCase] = useState('vemcon');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-bg text-text min-h-screen relative overflow-hidden font-sans">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* DOBRA 1: HERO SECTION */}
      <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative z-10 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5"
          >
            [ SERVIÇO // PRODUTOS DIGITAIS E SAAS ]
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-sora text-text tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6"
          >
            Plataformas SaaS robustas estruturadas para o mercado e <span className="text-gradient">preparadas para escala</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-sans"
          >
            Desenvolvemos produtos digitais e sistemas corporativos sob medida com arquitetura modular, APIs seguras e alta capacidade de evolução. Aceleramos o go-to-market da sua operação sem abrir mão do rigor técnico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button
              onClick={() => scrollToSection('contact-form')}
              className="w-full sm:w-auto btn-primary py-4 px-8"
            >
              Solicitar Diagnóstico Técnico
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('cases-section')}
              className="w-full sm:w-auto btn-secondary py-4 px-8"
            >
              Ver Casos Reais
            </button>
          </motion.div>

          {/* Grid de Métricas de Apoio */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-2xl overflow-hidden bg-surface/20 divide-y md:divide-y-0 md:divide-x divide-border font-mono text-sm max-w-4xl mx-auto backdrop-blur-sm"
          >
            <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-accent text-xs mb-2 tracking-wider font-semibold uppercase">SAAS_APPLICATIONS</span>
              <span className="text-text font-bold text-base md:text-lg">3+ em produção</span>
            </div>
            <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-accent text-xs mb-2 tracking-wider font-semibold uppercase">INTEGRATION_APIS</span>
              <span className="text-text font-bold text-base md:text-lg">100% conciliação automática</span>
            </div>
            <div className="p-6 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-accent text-xs mb-2 tracking-wider font-semibold uppercase">STACK</span>
              <span className="text-text font-bold text-base md:text-lg">React / Next.js / Node.js</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DOBRA 2: DESAFIOS COMUNS (A DOR DO CLIENTE) */}
      <section className="py-24 bg-gradient-to-b from-bg to-surface/20 border-t border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Gargalos Comuns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora leading-tight mb-4">
              Quando sua operação precisa de engenharia de produto sob medida?
            </h2>
            <p className="text-text-muted text-base font-sans">
              Identifique se sua empresa está enfrentando algum destes gargalos operacionais e técnicos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dificuldade de Evolução */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group p-8 rounded-3xl bg-surface/30 border border-border hover:border-red-500/20 transition-all hover:bg-surface/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Dificuldade de Evolução do MVP
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-sans">
                <strong>Problema:</strong> O sistema atual foi construído sem planejamento de arquitetura, e agora adicionar novas funcionalidades é lento, caro e gera bugs frequentes.
              </p>
            </motion.div>

            {/* Card 2: Gargalos de Integração */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group p-8 rounded-3xl bg-surface/30 border border-border hover:border-red-500/20 transition-all hover:bg-surface/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Unplug className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Gargalos de Integração
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-sans">
                <strong>Problema:</strong> Sistemas que não conversam entre si, gerando retrabalho manual na sincronização de dados de pagamentos, clientes ou estoque.
              </p>
            </motion.div>

            {/* Card 3: Insegurança Transacional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group p-8 rounded-3xl bg-surface/30 border border-border hover:border-red-500/20 transition-all hover:bg-surface/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Insegurança Transacional
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-sans">
                <strong>Problema:</strong> Riscos em operações sensíveis (como checkout ou assinaturas recorrentes) devido a APIs instáveis ou falta de conciliação financeira confiável.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 3: A SOLUÇÃO (NOSSA ENGENHARIA NA PRÁTICA - BENTO GRID) */}
      <section className="py-24 bg-bg border-t border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Nossa Abordagem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora leading-tight mb-4">
              Como estruturamos e construímos o seu produto digital
            </h2>
            <p className="text-text-muted text-base font-sans">
              Criamos sistemas focados na flexibilidade operacional e de código, blindando sua infraestrutura contra o crescimento de usuários.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card A: Arquitetura SaaS Multitenant (Destaque - 2 colunas) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-bg border border-border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text mb-3 font-sora">
                  Arquitetura SaaS Multitenant
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans mb-8">
                  Modelagem de banco de dados isolada ou compartilhada de forma segura, permitindo que novas empresas (tenants) sejam provisionadas com isolamento total, integridade operacional e segurança de acessos.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-text-muted">Escala de Tenants</span>
                <span className="text-xs font-mono text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-md">Pronto para White Label</span>
              </div>
            </motion.div>

            {/* Card B: APIs de Pagamento e Assinaturas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-bg border border-border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3 font-sora">
                  APIs de Pagamento e Assinaturas
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans mb-6">
                  Integração impecável com gateways (Iugu, Asaas, Stripe), estruturando fluxos de cobrança recorrente, webhooks resilientes e conciliação financeira automatizada.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-text-muted">Gateways</span>
                <span className="text-xs font-mono text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-md">Stripe / Iugu / Asaas</span>
              </div>
            </motion.div>

            {/* Card C: Interfaces Premium & Responsivas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-bg border border-border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layout className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text mb-3 font-sora">
                  Interfaces Premium & Responsivas
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans mb-6">
                  Desenvolvimento frontend moderno (Next.js/React) focado em usabilidade extrema, tempos de resposta sub-segundo, acessibilidade e fidelidade ao design system.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-text-muted">Frontend</span>
                <span className="text-xs font-mono text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-md">React / Next.js</span>
              </div>
            </motion.div>

            {/* Card D: Sistemas Web Customizados e Backoffices (Destaque - 2 colunas) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-surface/30 p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl pointer-events-none group-hover:bg-brand/10 transition-colors" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-bg border border-border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sliders className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text mb-3 font-sora">
                  Sistemas Web Customizados e Backoffices
                </h3>
                <p className="text-text-muted text-sm md:text-base leading-relaxed font-sans mb-8">
                  Dashboards administrativos e ferramentas internas que dão autonomia para sua equipe gerenciar a operação (faturamentos, permissões, auditoria de dados) sem depender do time técnico para ações cotidianas.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4 flex items-center justify-between mt-auto">
                <span className="text-xs font-mono text-text-muted">Controle</span>
                <span className="text-xs font-mono text-accent bg-accent/5 border border-accent/15 px-2.5 py-1 rounded-md">Backoffice Autônomo</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 4: PROVA DE ENGENHARIA (CASOS REAIS) */}
      <section id="cases-section" className="py-24 bg-gradient-to-b from-bg to-surface/20 border-t border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Casos Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora leading-tight mb-4">
              Engenharia validada em projetos reais
            </h2>
            <p className="text-text-muted text-base font-sans">
              Casos de aplicação prática que comprovam nossa capacidade de entrega e foco em resultados robustos.
            </p>
          </div>

          {/* Interactive Case Viewer */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Tabs List */}
            <div className="md:col-span-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0">
              {caseStudies.map((cs) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveCase(cs.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 font-sora flex flex-col shrink-0 md:shrink ${
                    activeCase === cs.id
                      ? 'bg-surface border-accent/40 shadow-lg shadow-brand/5'
                      : 'bg-surface/20 border-border hover:border-accent/20 hover:bg-surface/40'
                  }`}
                  style={{ minWidth: '220px' }}
                >
                  <span className="text-xs font-mono text-accent mb-1 uppercase tracking-wider">CASO</span>
                  <span className="text-text font-bold text-base md:text-lg">{cs.company}</span>
                  <span className="text-text-muted text-xs mt-1 font-sans">{cs.category}</span>
                </button>
              ))}
            </div>

            {/* Tab Panel Detail */}
            <div className="md:col-span-8">
              <AnimatePresence mode="wait">
                {caseStudies.map((cs) => {
                  if (cs.id !== activeCase) return null;
                  return (
                    <motion.div
                      key={cs.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="p-8 rounded-3xl bg-surface/40 border border-border backdrop-blur-md relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
                      
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border/40 pb-6">
                        <div>
                          <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-1">PROJETO PARCEIRO</span>
                          <h3 className="text-2xl font-bold font-sora text-text">{cs.company} — {cs.category}</h3>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg border border-border">
                          <ArrowUpRight className="h-5 w-5 text-accent" />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-mono tracking-wider text-text-muted uppercase mb-2 font-bold">[ ESCOPO TÉCNICO ]</h4>
                          <p className="text-text text-sm md:text-base leading-relaxed font-sans">
                            {cs.escopo}
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-bg/50 border border-border/50">
                          <h4 className="text-xs font-mono tracking-wider text-accent uppercase mb-2 font-bold flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            [ DIFERENCIAL & IMPACTO ]
                          </h4>
                          <p className="text-text-muted text-sm leading-relaxed font-sans">
                            {cs.diferencial}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-mono tracking-wider text-text-muted uppercase mb-3 font-bold">[ TECNOLOGIAS ]</h4>
                          <div className="flex flex-wrap gap-2">
                            {cs.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="text-xs font-mono py-1 px-3 rounded-lg bg-bg text-text-muted border border-border"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* DOBRA 5: STACK TECNOLÓGICA (A BASE TÉCNICA) */}
      <section className="py-24 bg-bg border-t border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Stack de Engenharia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora leading-tight mb-4">
              Tecnologias aplicadas com critério operacional
            </h2>
            <p className="text-text-muted text-base font-sans">
              Não escolhemos ferramentas por moda, mas sim por maturidade, ecossistema e facilidade de sustentação futura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-surface/30 border border-border hover:border-accent/30 transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center shrink-0">
                <Layout className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">FRONTEND</span>
                <h3 className="text-lg font-bold text-text mb-2 font-sora">
                  React / Next.js / TailwindCSS
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Para interfaces web rápidas, SEO-friendly e componentes altamente reutilizáveis, garantindo que sua interface permaneça responsiva e com excelente experiência sob qualquer dispositivo.
                </p>
              </div>
            </motion.div>

            {/* Backend & APIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-surface/30 border border-border hover:border-accent/30 transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">BACKEND & APIS</span>
                <h3 className="text-lg font-bold text-text mb-2 font-sora">
                  Node.js (TypeScript) / Python (FastAPI)
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Para APIs rápidas, seguras, tipadas e fáceis de documentar. Estrutura escalável focada em performance para conexões de dados, controle de concorrência e processamento assíncrono de tarefas.
                </p>
              </div>
            </motion.div>

            {/* Bancos de Dados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-3xl bg-surface/30 border border-border hover:border-accent/30 transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center shrink-0">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">BANCOS DE DADOS</span>
                <h3 className="text-lg font-bold text-text mb-2 font-sora">
                  PostgreSQL / Redis
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Garantia de integridade relacional em transações financeiras críticas (ACID) combinada a cache ultrarrápido na memória para otimização de latência e alívio do banco principal.
                </p>
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-3xl bg-surface/30 border border-border hover:border-accent/30 transition-all flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">MOBILE</span>
                <h3 className="text-lg font-bold text-text mb-2 font-sora">
                  Flutter
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Desenvolvimento híbrido nativo de alta fidelidade com uma única base de código robusta, garantindo rápida prototipagem e sustentabilidade para sistemas iOS e Android.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 6: PROCESSO DE TRABALHO (O MÉTODO DA CONSULTORIA) */}
      <section className="py-24 bg-gradient-to-b from-bg to-surface/20 border-t border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora leading-tight mb-4">
              Como trabalhamos juntos
            </h2>
            <p className="text-text-muted text-base font-sans">
              Seguimos um processo transparente centrado em mitigar riscos operacionais e entregar valor contínuo.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative font-sans">
            {/* Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-border z-0" />

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-14 h-14 rounded-full bg-bg border-4 border-border text-accent font-mono text-sm font-bold flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:text-text transition-colors shadow-lg shrink-0">
                01
              </div>
              <h3 className="text-lg font-bold text-text mb-2 font-sora">
                Diagnóstico & Escopo
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Alinhamos os objetivos de negócio, desenhamos a arquitetura ideal e quebramos a entrega em fases funcionais claras (milestones).
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-14 h-14 rounded-full bg-bg border-4 border-border text-accent font-mono text-sm font-bold flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:text-text transition-colors shadow-lg shrink-0">
                02
              </div>
              <h3 className="text-lg font-bold text-text mb-2 font-sora">
                Arquitetura & Design
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Estruturamos a base técnica, modelagem de banco de dados e design system para evitar retrabalho antes de escrever a lógica do sistema.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-14 h-14 rounded-full bg-bg border-4 border-border text-accent font-mono text-sm font-bold flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:text-text transition-colors shadow-lg shrink-0">
                03
              </div>
              <h3 className="text-lg font-bold text-text mb-2 font-sora">
                Desenvolvimento Incremental
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Entregas frequentes de partes funcionais em ambiente de homologação, para você testar e validar o sistema enquanto ele está sendo construído.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start group"
            >
              <div className="w-14 h-14 rounded-full bg-bg border-4 border-border text-accent font-mono text-sm font-bold flex items-center justify-center mb-6 group-hover:border-accent/40 group-hover:text-text transition-colors shadow-lg shrink-0">
                04
              </div>
              <h3 className="text-lg font-bold text-text mb-2 font-sora">
                Implantação & Handover
              </h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Publicação em ambiente cloud altamente monitorado, com documentação técnica detalhada garantindo total autonomia da sua equipe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOBRA 7: FAQ ESPECÍFICO (QUEBRANDO OBJEÇÕES) */}
      <section className="py-24 bg-bg border-t border-border px-6">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Dúvidas do Serviço
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora text-center">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto mt-4 font-sans text-center">
              Respostas diretas sobre governança de código, apoio à contratação de time interno e integrações de sistemas.
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
                    <span className="font-bold text-text group-hover:text-accent transition-colors font-sora text-sm md:text-base flex items-center gap-3">
                      <HelpCircleIcon className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 ml-4 p-1 rounded-lg bg-surface-hi text-text-muted group-hover:text-text transition-colors border border-border"
                    >
                      <ChevronDown className="w-4 h-4" />
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

      {/* DOBRA 8: CTA FINAL (CONVERSÃO DIRETA) */}
      <section id="contact-form" className="py-24 bg-gradient-to-b from-bg to-surface border-t border-border px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Próximo Passo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 font-sora leading-tight max-w-2xl mx-auto">
              Vamos planejar o próximo passo técnico do seu produto digital?
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto font-sans mb-8">
              Agende um diagnóstico técnico gratuito de 30 minutos. Vamos analisar suas necessidades de arquitetura, escopo e planejar a rota de desenvolvimento mais eficiente.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-primary py-3.5 px-6 gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar Diagnóstico via WhatsApp
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full sm:w-auto btn-secondary py-3.5 px-6 gap-2"
              >
                <Mail className="w-5 h-5" />
                Enviar email para contato@glbessa.dev
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Contact />
          </div>
        </div>
      </section>
    </div>
  );
};

const HelpCircleIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

export default _ProdutosSaaS;
