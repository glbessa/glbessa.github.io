import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, FolderKanban, Terminal } from 'lucide-react';
import { getData } from '../data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const EngineeringConsole = () => {
  const [activeTab, setActiveTab] = useState('ts'); // 'ts' or 'tf'

  return (
    <div className="relative z-10 w-full rounded-2xl border border-border bg-surface/40 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* Console Header / Tab Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1321]/80 border-b border-border select-none">
        {/* Mac-style Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* File Tabs */}
        <div className="flex items-center gap-1 bg-[#0a0f1d] p-1 rounded-lg border border-border/50">
          <button
            onClick={() => setActiveTab('ts')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono font-medium transition-all ${
              activeTab === 'ts' 
                ? 'bg-surface text-accent border border-border shadow-sm' 
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Code className="w-3 h-3" />
            saas-processor.ts
          </button>
          <button
            onClick={() => setActiveTab('tf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono font-medium transition-all ${
              activeTab === 'tf' 
                ? 'bg-surface text-accent border border-border shadow-sm' 
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Terminal className="w-3 h-3" />
            infrastructure.tf
          </button>
        </div>

        {/* Console Name Indicator */}
        <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider hidden sm:inline">
          Console
        </span>
      </div>

      {/* Editor Content */}
      <div className="p-5 md:p-6 overflow-x-auto bg-[#0a0f1d]/90 font-mono text-xs leading-6 text-slate-300 min-h-[320px] select-text">
        {activeTab === 'ts' ? (
          <div>
            <div><span className="text-purple-400 font-semibold">import</span> &#123; <span className="text-blue-400 font-medium">PaymentGateway</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"./billing"</span>;</div>
            <div><span className="text-purple-400 font-semibold">import</span> &#123; <span className="text-blue-400 font-medium">Database</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">"./db"</span>;</div>
            <div className="text-slate-500 italic mt-3">// Fluxo de assinatura resiliente com retentativa automatizada</div>
            <div className="mt-2"><span className="text-purple-400 font-semibold">export async function</span> <span className="text-amber-400 font-medium">createSubscription</span>(</div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">userId</span>: <span className="text-blue-400">string</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">planId</span>: <span className="text-blue-400">string</span>,</div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">cardToken</span>: <span className="text-blue-400">CardToken</span></div>
            <div>) &#123;</div>
            <div>&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">user</span> = <span className="text-purple-400">await</span> <span className="text-blue-400">Database</span>.<span className="text-blue-300">users</span>.<span className="text-amber-400">findById</span>(<span className="text-blue-300">userId</span>);</div>
            <div>&nbsp;&nbsp;<span className="text-purple-400">if</span> (!<span className="text-blue-300">user</span>) <span className="text-purple-400">throw new</span> <span className="text-blue-400">Error</span>(<span className="text-emerald-400">"User not found"</span>);</div>
            <div className="mt-2">&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">gateway</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">PaymentGateway</span>(&#123; <span className="text-blue-300">maxRetries</span>: <span className="text-emerald-400">3</span> &#125;);</div>
            <div>&nbsp;&nbsp;<span className="text-purple-400">const</span> <span className="text-blue-300">charge</span> = <span className="text-purple-400">await</span> <span className="text-blue-300">gateway</span>.<span className="text-amber-400">process</span>(&#123;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">email</span>: <span className="text-blue-300">user</span>.<span className="text-blue-300">email</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">planId</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">cardToken</span></div>
            <div>&nbsp;&nbsp;&#125;);</div>
            <div className="mt-2">&nbsp;&nbsp;<span className="text-purple-400">if</span> (<span className="text-blue-300">charge</span>.<span className="text-blue-300">status</span> === <span className="text-emerald-400">"succeeded"</span>) &#123;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">await</span> <span className="text-blue-400">Database</span>.<span className="text-blue-300">users</span>.<span className="text-amber-400">updateSubscription</span>(<span className="text-blue-300">userId</span>, &#123;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">status</span>: <span className="text-emerald-400">"active"</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">expiresAt</span>: <span className="text-blue-300">charge</span>.<span className="text-blue-300">expiryDate</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;);</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> &#123; <span className="text-blue-300">success</span>: <span className="text-purple-400">true</span> &#125;;</div>
            <div>&nbsp;&nbsp;&#125;</div>
            <div>&#125;</div>
          </div>
        ) : (
          <div>
            <div><span className="text-purple-400 font-semibold">resource</span> <span className="text-emerald-400">"aws_ecs_cluster"</span> <span className="text-amber-400">"production"</span> &#123;</div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">name</span> = <span className="text-emerald-400">"glbessa-prod-cluster"</span></div>
            <div>&nbsp;&nbsp;<span className="text-purple-400">setting</span> &#123;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">name</span>  = <span className="text-emerald-400">"containerInsights"</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">value</span> = <span className="text-emerald-400">"enabled"</span></div>
            <div>&nbsp;&nbsp;&#125;</div>
            <div>&#125;</div>
            <div className="text-slate-500 italic mt-3">// ECS Service auto-escalável via AWS Fargate</div>
            <div className="mt-2"><span className="text-purple-400 font-semibold">resource</span> <span className="text-emerald-400">"aws_ecs_service"</span> <span className="text-amber-400">"api_service"</span> &#123;</div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">name</span>            = <span className="text-emerald-400">"api-service"</span></div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">cluster</span>         = <span className="text-blue-400">aws_ecs_cluster</span>.<span className="text-blue-300">production</span>.<span className="text-blue-300">id</span></div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">desired_count</span>   = <span className="text-emerald-400">3</span></div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">launch_type</span>     = <span className="text-emerald-400">"FARGATE"</span></div>
            <div className="mt-2">&nbsp;&nbsp;<span className="text-purple-400">load_balancer</span> &#123;</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">target_group_arn</span> = <span className="text-blue-400">aws_lb_target_group</span>.<span className="text-blue-300">api</span>.<span className="text-blue-300">arn</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">container_name</span>   = <span className="text-emerald-400">"api"</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">container_port</span>   = <span className="text-emerald-400">8080</span></div>
            <div>&nbsp;&nbsp;&#125;</div>
            <div>&#125;</div>
          </div>
        )}
      </div>

      {/* Terminal Status / Footer Bar */}
      <div className="px-5 py-3.5 bg-[#080d19]/90 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-text-muted select-none">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>glbessa.dev:~$ pnpm run deploy</span>
        </div>
        <div className="text-emerald-400 font-medium">
          ✔ infra: active · 1.2k req/s · 0.00% err
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const { hero } = getData();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-bg">
        {/* Soft, high-end organic ambient lights instead of busy bouncing neon blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 z-10 relative font-sans">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 text-center md:text-left space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4 font-mono">
                {hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-text font-sora">
                {hero.title.split(' e ').map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' e '}
                    {index === 1 ? <span className="text-gradient">{part}</span> : part}
                  </React.Fragment>
                ))}
              </h1>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#contact" 
                className="btn-primary"
              >
                {hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </a>

              <a 
                href="#projects" 
                className="btn-secondary"
              >
                {hero.ctaSecondary}
                <FolderKanban className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <div className="md:w-1/2 w-full pt-10 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <EngineeringConsole />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-border flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
