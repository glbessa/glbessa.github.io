import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/3 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Transformo ideias em <span className="text-blue-600">tecnologia de alto impacto</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Desenvolvimento de MVPs agéis, automação de processos e soluções personalizadas para startups e pequenas empresas que buscam escala e eficiência.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a 
              href="https://wa.me/seu-numero-aqui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-1"
            >
              Solicitar Orçamento
            </a>
            <Link 
              to="/projects" 
              className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Ver Soluções
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <img 
              src="/img/profile.png" 
              alt="Gabriel Bessa"
              className="relative w-64 h-64 rounded-2xl object-cover border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Como posso ajudar seu negócio</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Foco total em resolver problemas reais através de engenharia de software de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">MVPs para Startups</h3>
            <p className="text-slate-600 leading-relaxed">
              Do conceito ao lançamento. Desenvolvo a primeira versão do seu produto com as tecnologias mais modernas para validar sua ideia rápido.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow space-y-4">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Automação de Processos</h3>
            <p className="text-slate-600 leading-relaxed">
              Elimine tarefas manuais repetitivas. Crio scripts e sistemas que economizam horas de trabalho da sua equipe todas as semanas.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow space-y-4">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Inteligência de Dados</h3>
            <p className="text-slate-600 leading-relaxed">
              Transforme dados em decisões. Implemento modelos de IA e dashboards para que você entenda exatamente o que acontece no seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Results/Metrics Section */}
      <section className="bg-slate-900 rounded-3xl p-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-blue-400">+10</div>
            <div className="text-slate-400 font-medium">Projetos Entregues</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-blue-400">30%</div>
            <div className="text-slate-400 font-medium">Média de Ganho de Eficiência</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-extrabold text-blue-400">100%</div>
            <div className="text-slate-400 font-medium">Foco em Solução de Problemas</div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center space-y-8 pb-12">
        <h2 className="text-3xl font-bold text-slate-900">Pronto para levar sua empresa ao próximo nível?</h2>
        <p className="text-slate-600 text-lg max-w-xl mx-auto">
          Vamos conversar sobre seu projeto e encontrar a melhor solução tecnológica para sua necessidade atual.
        </p>
        <div className="flex justify-center">
          <a 
            href="mailto:seu-email@dominio.com" 
            className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Entrar em Contato Agora
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;