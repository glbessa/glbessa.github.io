import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, Clock, Layers, ChevronDown, ArrowRight, HelpCircle, Bot,
  ArrowUpRight, BarChart2, GitPullRequest, Terminal, Mail, MessageSquare, AlertCircle
} from 'lucide-react';
import { getData } from '../../data';
import Contact from '../_Contact';

// Terminal Log Simulation for Hero Visual
const TerminalSimulation = () => {
  const [logs, setLogs] = useState([]);
  const [metricData, setMetricData] = useState({
    pipelines: 0,
    accuracy: 94.2,
    hours: 0
  });

  const fullLogs = [
    { text: '$ python pipeline_orchestrator.py --env production', type: 'cmd' },
    { text: '[INFO] Inicializando orquestrador de dados...', type: 'info' },
    { text: '[INFO] Conectando a APIs externas e bancos de origem...', type: 'info' },
    { text: '[DB] Query executada com sucesso. 1.4M registros encontrados.', type: 'success' },
    { text: '[ETL] Iniciando etapa de extração (Extract)...', type: 'info' },
    { text: '[ETL] Limpeza e normalização concluída. Schema validado.', type: 'success' },
    { text: '[AI] Enviando payloads para LLM & Redes Neurais...', type: 'info' },
    { text: '[AI] Análise preditiva concluída. Acurácia: 99.8%.', type: 'ai' },
    { text: '[ETL] Carregando dados enriquecidos no Data Warehouse...', type: 'info' },
    { text: '[SLACK] Alerta enviado: Carga diária concluída sem erros.', type: 'slack' },
    { text: '[SUCCESS] Pipeline finalizado em 4.27s. Economia: 12 horas.', type: 'success' }
  ];

  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logIndex < fullLogs.length) {
        setLogs(prev => [...prev, fullLogs[logIndex]]);
        logIndex++;
      } else {
        setLogs([]);
        logIndex = 0;
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Animating Metrics in Hero
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const metricInterval = setInterval(() => {
      currentStep++;
      setMetricData({
        pipelines: Math.min(Math.round((currentStep / steps) * 15), 15),
        accuracy: parseFloat(Math.min(94.2 + (currentStep / steps) * 5.6, 99.8).toFixed(1)),
        hours: Math.min(Math.round((currentStep / steps) * 350), 350)
      });

      if (currentStep >= steps) {
        clearInterval(metricInterval);
      }
    }, stepTime);

    return () => clearInterval(metricInterval);
  }, []);

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Terminal Mockup */}
      <div className="bg-[#0b0f19] border border-border rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-text-muted">
        {/* Terminal Header */}
        <div className="bg-surface px-4 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-[10px] text-text-muted ml-2">pipeline_orchestrator.py</span>
          </div>
          <Terminal className="w-4 h-4 text-accent" />
        </div>
        
        {/* Terminal Body */}
        <div className="p-4 h-[240px] overflow-y-auto space-y-2 scrollbar-thin">
          <AnimatePresence>
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="leading-relaxed"
              >
                {log.type === 'cmd' && (
                  <span className="text-accent">{log.text}</span>
                )}
                {log.type === 'info' && (
                  <span className="text-text-muted">{log.text}</span>
                )}
                {log.type === 'success' && (
                  <span className="text-emerald-400">{log.text}</span>
                )}
                {log.type === 'ai' && (
                  <span className="text-purple-400">{log.text}</span>
                )}
                {log.type === 'slack' && (
                  <span className="text-sky-400">{log.text}</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {logs.length === 0 && (
            <div className="text-slate-600 animate-pulse">Aguardando gatilho de execução...</div>
          )}
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
        <div className="bg-surface/50 border border-border p-4 rounded-xl flex flex-col">
          <span className="text-[10px] text-accent tracking-wider uppercase mb-1">DATA_PIPELINES</span>
          <span className="text-xl font-bold text-text">+{metricData.pipelines}M / dia</span>
          <span className="text-[10px] text-slate-500 mt-1">Registros processados</span>
        </div>
        <div className="bg-surface/50 border border-border p-4 rounded-xl flex flex-col">
          <span className="text-[10px] text-accent tracking-wider uppercase mb-1">IA_MODELS</span>
          <span className="text-xl font-bold text-text">{metricData.accuracy}% acurácia</span>
          <span className="text-[10px] text-slate-500 mt-1">Visão Computacional & NLP</span>
        </div>
        <div className="bg-surface/50 border border-border p-4 rounded-xl flex flex-col">
          <span className="text-[10px] text-accent tracking-wider uppercase mb-1">HOURS_SAVED</span>
          <span className="text-xl font-bold text-text">+{metricData.hours}h / mês</span>
          <span className="text-[10px] text-slate-500 mt-1">Média por cliente</span>
        </div>
      </div>
    </div>
  );
};

// Bento Visual for AI Automation (Card A)
const AIVisual = () => {
  return (
    <div className="relative h-[180px] w-full rounded-xl border border-border bg-bg/60 p-4 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,0.12),transparent_40%)]" />
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-semibold">LLM PIPELINE</span>
        <Bot className="w-5 h-5 text-accent animate-pulse" />
      </div>
      <div className="space-y-2 z-10 font-mono text-[10px]">
        <div className="bg-surface/80 p-2 rounded border border-border text-left">
          <span className="text-purple-400">Prompt:</span> Analisar contrato e extrair cláusula de rescisão...
        </div>
        <div className="bg-purple-950/20 p-2 rounded border border-purple-500/20 text-left">
          <span className="text-emerald-400">AI Response:</span> Multa rescisória identificada na Cláusula 14.2 (10%)...
        </div>
      </div>
    </div>
  );
};

// Bento Visual for Big Data & Scraping (Card B)
const ScrapingVisual = () => {
  return (
    <div className="relative h-[180px] w-full rounded-xl border border-border bg-bg/60 p-4 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(109,40,217,0.1),transparent_40%)]" />
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-semibold">ETL / SCRAPING</span>
        <Database className="w-5 h-5 text-accent" />
      </div>
      <div className="grid grid-cols-3 gap-2 z-10">
        <div className="bg-surface p-2 rounded border border-border flex flex-col items-center justify-center">
          <span className="text-[8px] text-slate-500 font-mono">EXTRACT</span>
          <span className="text-xs text-text font-bold font-mono">OK</span>
        </div>
        <div className="bg-surface p-2 rounded border border-border flex flex-col items-center justify-center">
          <span className="text-[8px] text-slate-500 font-mono">TRANSFORM</span>
          <span className="text-xs text-accent font-bold font-mono animate-pulse">RUN</span>
        </div>
        <div className="bg-surface p-2 rounded border border-border flex flex-col items-center justify-center">
          <span className="text-[8px] text-slate-500 font-mono">LOAD</span>
          <span className="text-xs text-slate-600 font-bold font-mono">WAIT</span>
        </div>
      </div>
      <div className="text-[9px] font-mono text-slate-500 text-left">
        Concurrent spiders: 24 | Success rate: 99.94%
      </div>
    </div>
  );
};

// Bento Visual for Dashboards & BI (Card C)
const ChartVisual = () => {
  return (
    <div className="relative h-[180px] w-full rounded-xl border border-border bg-bg/60 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-semibold">DASHBOARDS</span>
        <BarChart2 className="w-5 h-5 text-accent" />
      </div>
      {/* Mini Chart SVG */}
      <div className="w-full h-16 flex items-end justify-between px-2 z-10">
        {[40, 65, 50, 85, 70, 95, 110].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height / 1.5}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="w-2 rounded-t bg-gradient-to-t from-brand to-accent"
          />
        ))}
      </div>
      <div className="flex justify-between items-center z-10 font-mono text-[9px] text-slate-500">
        <span>Faturamento real</span>
        <span className="text-emerald-400 font-bold">+18.4%</span>
      </div>
    </div>
  );
};

// Bento Visual for API Integrations (Card D)
const IntegrationVisual = () => {
  return (
    <div className="relative h-[180px] w-full rounded-xl border border-border bg-bg/60 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] font-mono bg-accent/10 border border-accent/20 px-2 py-0.5 rounded text-accent font-semibold">API SYNC</span>
        <GitPullRequest className="w-5 h-5 text-accent" />
      </div>
      {/* Node flow diagram */}
      <div className="flex items-center justify-around w-full py-4 z-10">
        <div className="bg-surface px-2.5 py-1.5 rounded-lg border border-border text-[9px] font-mono font-semibold text-text">
          Hubspot CRM
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <div className="h-0.5 w-12 bg-gradient-to-r from-brand to-accent" />
        </div>
        <div className="bg-surface px-2.5 py-1.5 rounded-lg border border-border text-[9px] font-mono font-semibold text-text">
          Bling ERP
        </div>
      </div>
      <div className="text-[9px] font-mono text-slate-500 text-left">
        Latency: 18ms | Status: Connected 200 OK
      </div>
    </div>
  );
};

const AutomacaoDadosIA = () => {
  const data = getData();
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const faqData = [
    {
      question: "Como é garantida a segurança dos dados da minha empresa ao utilizar IA?",
      answer: "A segurança é nossa prioridade absoluta. Configuramos integrações com modelos de IA de forma privada (utilizando nuvens seguras da Azure ou AWS) garantindo que os dados operacionais ou de clientes da sua empresa jamais sejam expostos publicamente ou utilizados para treinar modelos de terceiros."
    },
    {
      question: "Se o site ou a API de origem de um pipeline mudar, a automação quebra?",
      answer: "Desenvolvemos scrapers e robôs com mecanismos de autodefesa e alertas integrados. Usamos seletores dinâmicos e testes automatizados. Se a estrutura de um site parceiro mudar, o sistema pausa com segurança e nos notifica antes de corromper os dados existentes."
    },
    {
      question: "É preciso substituir nossos sistemas atuais para implantar automação?",
      answer: "Não. Nosso objetivo é construir pontes. Desenvolvemos soluções que se conectam via APIs ou emulação de processos diretamente nos seus sistemas legados, aproveitando ao máximo a infraestrutura que sua empresa já utiliza."
    }
  ];

  return (
    <div className="bg-bg text-text font-sans">
      
      {/* Dobra 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden border-b border-border">
        {/* Decorative Blur Background Blobs */}
        <div className="absolute inset-0 bg-bg pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-accent/5 border border-accent/20 text-accent text-xs font-semibold tracking-wider font-mono uppercase">
                  [ SERVIÇO // AUTOMAÇÃO, DADOS E IA ]
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-text font-sora">
                  Inteligência operacional para eliminar gargalos e <span className="text-gradient">automatizar decisões</span> complexas.
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                Desenhamos fluxos de trabalho inteligentes, estruturamos pipelines de Big Data e implementamos modelos de Inteligência Artificial aplicada para substituir tarefas manuais por processos autônomos e confiáveis.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#contact" className="btn-primary">
                  Solicitar Diagnóstico Técnico
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#cases" className="btn-secondary">
                  Conhecer Nossos Projetos
                </a>
              </motion.div>
            </div>

            {/* Right Column: Code Simulation & Stats */}
            <div className="lg:col-span-5 w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TerminalSimulation />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Dobra 2: Desafios Comuns (Dores do Cliente) */}
      <section className="py-24 bg-surface/20 relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Gargalos Comuns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Onde a ineficiência operacional está <span className="text-gradient">drenando os recursos</span> da sua empresa?
            </h2>
            <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto">
              Identifique gargalos típicos que resolvemos com engenharia de dados e automação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Processos Manuais */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#0f1524]/50 border border-border rounded-2xl p-6 relative hover:border-red-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="mb-4 p-3 bg-red-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Processos Manuais e Repetitivos
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Funcionários seniores gastando horas copiando dados entre planilhas, enviando e-mails padronizados ou preenchendo relatórios operacionais.
              </p>
            </motion.div>

            {/* Card 2: Dados Fragmentados */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-[#0f1524]/50 border border-border rounded-2xl p-6 relative hover:border-red-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="mb-4 p-3 bg-red-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Dados Fragmentados e Invisibilidade
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                As informações críticas do negócio estão espalhadas em diferentes sistemas (CRM, ERP, planilhas), tornando impossível ter um dashboard unificado em tempo real para tomada de decisão.
              </p>
            </motion.div>

            {/* Card 3: Dificuldade de Escala */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-[#0f1524]/50 border border-border rounded-2xl p-6 relative hover:border-red-500/30 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="mb-4 p-3 bg-red-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text mb-3 font-sora group-hover:text-red-400 transition-colors">
                Dificuldade de Escala em Captura de Dados
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Sua operação precisa coletar informações externas na web em grande volume (preços, leads, concorrência), mas os robôs atuais quebram constantemente ou são bloqueados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dobra 3: A Solução (Nossa Engenharia na Prática) - Bento Grid */}
      <section className="py-24 bg-bg relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Nossas Soluções
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Engenharia aplicada à produtividade e <span className="text-gradient">decisões inteligentes</span>
            </h2>
            <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto">
              Conectamos seus sistemas e dados para que sua empresa trabalhe de forma mais inteligente e autônoma.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card A: Destaque IA - col-span-2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-surface/40 border border-border hover:border-accent/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <AIVisual />
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sora text-text">
                    Automações com Inteligência Artificial
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Integração de Modelos de Linguagem (LLMs) e Visão Computacional para analisar documentos complexos, classificar atendimentos, automatizar interações corporativas e apoiar diagnósticos especializados.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card B: Pipelines & Scraping */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface/40 border border-border hover:border-accent/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 group"
            >
              <ScrapingVisual />
              <div className="space-y-4 mt-6">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sora text-text">
                  Pipelines de Big Data e Scraping Escalável
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Extração de dados da web em larga escala de maneira ética e resiliente, estruturando pipelines de ETL (Extract, Transform, Load) para enriquecer sua base de dados corporativa.
                </p>
              </div>
            </motion.div>

            {/* Card C: Dashboards & BI */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface/40 border border-border hover:border-accent/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 group"
            >
              <ChartVisual />
              <div className="space-y-4 mt-6">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sora text-text">
                  Dashboards & Business Intelligence (BI)
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Centralização de métricas operacionais e financeiras em painéis interativos em tempo real, gerando alertas automáticos para desvios de padrões ou oportunidades de negócios.
                </p>
              </div>
            </motion.div>

            {/* Card D: Integrações - col-span-2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-surface/40 border border-border hover:border-accent/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 order-2 md:order-1">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <GitPullRequest className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sora text-text">
                    Integrações de Sistemas e APIs
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Criação de barramentos de integração que sincronizam fluxos entre plataformas (ex: enviar dados de vendas do CRM diretamente para o ERP e faturador de forma instantânea).
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <IntegrationVisual />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dobra 4: Prova de Engenharia (Cases Reais) */}
      <section id="cases" className="py-24 bg-surface/20 relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Resultados Práticos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Resultados concretos em <span className="text-gradient">processamento de dados e IA</span>
            </h2>
            <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto">
              Experiência prática comprovada em cenários de alta complexidade técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Caso 1: Everleads */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg border border-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent/30 transition-all group"
            >
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded font-semibold uppercase">
                    BIG DATA
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Everleads</span>
                </div>
                <h3 className="text-xl font-bold text-text font-sora group-hover:text-accent transition-colors">
                  Engenharia de Pipelines de Big Data
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Estruturação de fluxos de scraping escaláveis, enriquecimento de leads e otimização de bancos de dados relacionais e em nuvem.
                </p>
                <div className="bg-surface/50 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-mono text-accent uppercase block mb-1">Diferencial de Engenharia</span>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    Processamento de milhões de registros com consumo eficiente de recursos cloud e taxas de erro próximas a zero.
                  </p>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8 pt-2">
                <a 
                  href="/projects" 
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-surface-hi hover:bg-surface text-text text-xs font-bold py-3 px-4 rounded-xl border border-border hover:border-accent/20 transition-all"
                >
                  Ver Todos os Projetos
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Caso 2: DeepRAD */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-bg border border-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent/30 transition-all group"
            >
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded font-semibold uppercase">
                    DEEP LEARNING / IA
                  </span>
                  <span className="text-xs text-slate-500 font-mono">DeepRAD</span>
                </div>
                <h3 className="text-xl font-bold text-text font-sora group-hover:text-accent transition-colors">
                  IA para Diagnóstico por Imagem
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Desenvolvimento de plataforma baseada em Deep Learning (visão computacional) para detecção e análise de patologias em exames radiológicos.
                </p>
                <div className="bg-surface/50 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-mono text-accent uppercase block mb-1">Diferencial de Engenharia</span>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    Rigor de engenharia aplicada a algoritmos científicos, entregando diagnósticos mais rápidos e precisos.
                  </p>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8 pt-2">
                <a 
                  href="/projects/deeprad" 
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-surface-hi hover:bg-surface text-text text-xs font-bold py-3 px-4 rounded-xl border border-border hover:border-accent/20 transition-all"
                >
                  Ver Detalhes do Projeto
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Caso 3: Klimaa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-bg border border-border rounded-2xl overflow-hidden flex flex-col justify-between hover:border-accent/30 transition-all group"
            >
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded font-semibold uppercase">
                    IOT & REAL-TIME
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Klimaa</span>
                </div>
                <h3 className="text-xl font-bold text-text font-sora group-hover:text-accent transition-colors">
                  Sistemas IoT de Eficiência Térmica
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Integração de sensores físicos com uma plataforma web usando APIs rápidas (FastAPI) para acompanhamento e simulações personalizadas de conforto térmico em tempo real.
                </p>
                <div className="bg-surface/50 p-4 rounded-xl border border-border">
                  <span className="text-[10px] font-mono text-accent uppercase block mb-1">Diferencial de Engenharia</span>
                  <p className="text-xs text-text-muted leading-relaxed font-sans">
                    Processamento contínuo de dados de sensores com baixíssima latência.
                  </p>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-8 pt-2">
                <a 
                  href="/projects/confortimetro_klimaa" 
                  className="w-full text-center inline-flex items-center justify-center gap-2 bg-surface-hi hover:bg-surface text-text text-xs font-bold py-3 px-4 rounded-xl border border-border hover:border-accent/20 transition-all"
                >
                  Ver Detalhes do Projeto
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Dobra 5: Stack Tecnológica */}
      <section className="py-24 bg-bg relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Nossa Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Ferramentas robustas para <span className="text-gradient">processamento e inteligência</span>
            </h2>
            <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto">
              Utilizamos linguagens e frameworks líderes no mercado de dados e IA, garantindo flexibilidade e facilidade de manutenção.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tech 1 */}
            <div className="bg-surface/30 border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
              <span className="text-xs font-mono text-accent font-bold uppercase block mb-3">[ LINGUAGEM CORE ]</span>
              <h3 className="text-lg font-bold text-text font-sora mb-2">Python</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                O ecossistema padrão ouro para análise de dados, inteligência artificial e scripts de automação robustos.
              </p>
            </div>

            {/* Tech 2 */}
            <div className="bg-surface/30 border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
              <span className="text-xs font-mono text-accent font-bold uppercase block mb-3">[ APIS & DADOS ]</span>
              <h3 className="text-lg font-bold text-text font-sora mb-2">FastAPI / Pandas / PySpark</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Para processamento rápido de conjuntos de dados e criação de APIs de alta performance e leves.
              </p>
            </div>

            {/* Tech 3 */}
            <div className="bg-surface/30 border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
              <span className="text-xs font-mono text-accent font-bold uppercase block mb-3">[ INTELIGÊNCIA ARTIFICIAL ]</span>
              <h3 className="text-lg font-bold text-text font-sora mb-2">PyTorch / Hugging Face / OpenAI</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Desde treinamento de redes neurais profundas à integração rápida com modelos de linguagem estado da arte.
              </p>
            </div>

            {/* Tech 4 */}
            <div className="bg-surface/30 border border-border rounded-xl p-6 hover:border-accent/20 transition-colors">
              <span className="text-xs font-mono text-accent font-bold uppercase block mb-3">[ ORQUESTRACAO & SCRAPING ]</span>
              <h3 className="text-lg font-bold text-text font-sora mb-2">Playwright / Celery / Airflow</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Garantia de que robôs rodem de forma distribuída, agendada e altamente resiliente a falhas ou bloqueios.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Dobra 6: Processo de Trabalho (O Método da Consultoria) */}
      <section className="py-24 bg-surface/20 relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Do mapeamento manual à <span className="text-gradient">automação completa</span>
            </h2>
            <p className="text-text-muted text-base mt-4 max-w-2xl mx-auto">
              Como trabalhamos para garantir que cada pipeline e algoritmo traga retorno e estabilidade técnica.
            </p>
          </div>

          {/* Process Timeline Steps */}
          <div className="relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-bg border border-border rounded-2xl p-6 space-y-4 hover:border-accent/20 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-accent font-bold">FASE 01</span>
                  <span className="text-2xl font-extrabold font-mono text-border">01</span>
                </div>
                <h3 className="text-lg font-bold font-sora text-text">Mapeamento de Processos</h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Analise (Shadowing) do fluxo de trabalho atual da sua equipe para identificar onde estão as tarefas repetitivas e passíveis de automação.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-bg border border-border rounded-2xl p-6 space-y-4 hover:border-accent/20 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-accent font-bold">FASE 02</span>
                  <span className="text-2xl font-extrabold font-mono text-border">02</span>
                </div>
                <h3 className="text-lg font-bold font-sora text-text">Arquitetura de Dados</h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Projetamos o modelo lógico de como os dados serão capturados, transformados e armazenados com segurança e rastreabilidade.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-bg border border-border rounded-2xl p-6 space-y-4 hover:border-accent/20 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-accent font-bold">FASE 03</span>
                  <span className="text-2xl font-extrabold font-mono text-border">03</span>
                </div>
                <h3 className="text-lg font-bold font-sora text-text">Desenvolvimento & Validação</h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Construímos os scripts e pipelines, testando-os exaustivamente em bases históricas antes de colocá-los para tomar decisões em tempo real.
                </p>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-bg border border-border rounded-2xl p-6 space-y-4 hover:border-accent/20 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-accent font-bold">FASE 04</span>
                  <span className="text-2xl font-extrabold font-mono text-border">04</span>
                </div>
                <h3 className="text-lg font-bold font-sora text-text">Implantação & Monitoramento</h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Colocamos os robôs para rodar em nuvem, configurando alertas no Slack/E-mail caso ocorra alguma inconsistência nos dados de origem.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Dobra 7: FAQ Específico */}
      <section className="py-24 bg-bg relative border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono tracking-widest text-accent uppercase mb-4 px-3 py-1 rounded-full border border-accent/20 bg-accent/5">
              Dúvidas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-text-muted text-base max-w-xl mx-auto mt-4">
              Respostas diretas sobre segurança, manutenção e integração de pipelines de IA e dados.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div
                  key={index}
                  className="bg-surface/30 border border-border rounded-2xl overflow-hidden hover:border-accent/20 transition-colors"
                >
                  <button
                    onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <span className="font-bold text-text group-hover:text-accent transition-colors font-sora text-sm md:text-base flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
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
                          <p className="text-text-muted text-sm leading-relaxed">
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

      {/* Dobra 8: CTA Final + Form de Contato */}
      <section id="contact" className="py-24 bg-gradient-to-b from-bg to-surface relative border-t border-border">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text font-sora max-w-3xl mx-auto">
              Pronto para liberar sua equipe de <span className="text-gradient">tarefas repetitivas</span>?
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Agende um diagnóstico técnico de 30 minutos. Vamos mapear os 3 principais processos manuais da sua empresa e propor como automatizá-los com segurança.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm font-mono">
              <a 
                href={`https://wa.me/5553984655136?text=${encodeURIComponent("Olá! Gostaria de agendar um diagnóstico técnico para automação, dados e IA na minha empresa.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Iniciar Diagnóstico de Automação (WhatsApp)
              </a>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <a 
                href="mailto:contato@glbessa.dev"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@glbessa.dev
              </a>
            </div>
          </div>

          {/* Embedded High-Converting Contact Form */}
          <div className="mt-12">
            <Contact />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AutomacaoDadosIA;
