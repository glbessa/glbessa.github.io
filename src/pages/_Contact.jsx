import React, { useState, useEffect } from 'react';
import { getData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, ChevronDown, Send, CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    perfil: '',
    empresa: '',
    mensagem: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState('');

  const data = getData();
  const { contactInfo } = data.author;
  const { faqs } = data;

  useEffect(() => {
    // Generate a stable unique lead ID for the session
    let id = window.sessionStorage.getItem('lead_session_id');
    if (!id) {
      id = `LEAD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      window.sessionStorage.setItem('lead_session_id', id);
    }
    setSessionId(id);
  }, []);

  const getUTMParams = () => {
    if (typeof window === 'undefined') return {
      utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '',
      fbclid: '', gclid: '', msclkid: '', ttclid: ''
    };
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_content: params.get('utm_content') || '',
      utm_term: params.get('utm_term') || '',
      fbclid: params.get('fbclid') || '',
      gclid: params.get('gclid') || '',
      msclkid: params.get('msclkid') || '',
      ttclid: params.get('ttclid') || '',
    };
  };

  const formatPhoneInput = (value) => {
    const clean = value.replace(/\D/g, '');
    if (clean.length === 0) return '';
    if (clean.length <= 2) return `(${clean}`;
    if (clean.length <= 6) return `(${clean.slice(0, 2)}) ${clean.slice(2)}`;
    if (clean.length <= 10) return `(${clean.slice(0, 2)}) ${clean.slice(2, 6)}-${clean.slice(6)}`;
    return `(${clean.slice(0, 2)}) ${clean.slice(2, 7)}-${clean.slice(7, 11)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneInput(e.target.value);
    setFormData({ ...formData, telefone: formatted });
  };

  const normalizePhone = (value) => {
    let clean = value.replace(/\D/g, '');
    if (clean.startsWith('55') && clean.length > 10) {
      clean = clean.slice(2);
    }
    return clean;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const phoneDigits = normalizePhone(formData.telefone);
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      setError('Por favor, insira um telefone válido com DDD (10 ou 11 dígitos).');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const utms = getUTMParams();
      
      const payload = {
        id: sessionId,
        data: new Date().toISOString(),
        nome: formData.nome.trim(),
        email: formData.email.trim(),
        telefone: phoneDigits,
        perfil: formData.perfil,
        empresa: formData.empresa.trim(),
        mensagem: formData.mensagem.trim(),
        ...utms
      };

      const sheetsUrl = import.meta.env.PUBLIC_GOOGLE_SHEETS_WEB_APP_URL || import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL;

      if (!sheetsUrl) {
        // Dev fallback simulation
        console.warn('Variável de ambiente VITE_GOOGLE_SHEETS_WEB_APP_URL não encontrada. Simulando envio.');
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
      }

      setSuccess(true);
      setFormData({ nome: '', email: '', telefone: '', perfil: '', empresa: '', mensagem: '' });
    } catch (err) {
      console.error('Erro ao enviar lead:', err);
      setError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Interactive Form */}
        <div className="lg:col-span-7 bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-white/5 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl font-bold text-slate-100 mb-2">Solicitar Diagnóstico Técnico</h3>
          <p className="text-slate-400 text-sm mb-8">
            Compartilhe brevemente seus desafios técnicos. Retornaremos com uma análise inicial e recomendações operacionais de arquitetura.
          </p>

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 space-y-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-100">Solicitação Enviada com Sucesso!</h4>
                <p className="text-slate-400 max-w-md mx-auto text-sm">
                  Obrigado pelo envio. Seus dados foram registrados e entraremos em contato nos próximos dias para apresentar seu diagnóstico operacional.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold rounded-xl transition-all"
                >
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {error && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Seu Nome *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Gabriel Bessa"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Seu E-mail Corporativo *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="Ex: nome@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ex: (53) 98465-5136"
                      value={formData.telefone}
                      onChange={handlePhoneChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Empresa / Operação
                    </label>
                    <input 
                      type="text" 
                      placeholder="Ex: Minha Empresa Ltda"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Qual seu perfil / cargo atual?
                  </label>
                  <select 
                    value={formData.perfil}
                    onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione seu cargo...</option>
                    <option value="Socio / CEO / Director">Sócio / CEO / Diretor</option>
                    <option value="Product Owner / Gerente de Produto">Gerente de Produto (PO / PM)</option>
                    <option value="CTO / Tech Lead / Dev">CTO / Tech Lead / Engenheiro</option>
                    <option value="Coordenador de Operacoes">Coordenador de Operações</option>
                    <option value="Outro">Outro cargo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Descreva seu gargalo técnico ou ideia de projeto
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Ex: Preciso integrar um pipeline de IA no meu SaaS ou otimizar a infraestrutura cloud para reduzir custos e instabilidade..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/15"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Enviar e Solicitar Diagnóstico
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Channels & FAQs */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick Channels */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono tracking-widest text-slate-500 uppercase border-l-2 border-blue-500 pl-3">
              Contato Direto
            </h4>
            
            <div className="grid grid-cols-1 gap-4">
              <a 
                href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Falar no WhatsApp</p>
                  <p className="text-sm font-bold text-slate-300 group-hover:text-emerald-400 transition-colors">Abrir chat imediato</p>
                </div>
              </a>

              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center p-4 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Enviar E-mail</p>
                  <p className="text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors truncate">{contactInfo.email}</p>
                </div>
              </a>

              <a 
                href={contactInfo.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-900/40 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="w-10 h-10 bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Rede Profissional</p>
                  <p className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Conectar no LinkedIn</p>
                </div>
              </a>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-slate-900/20 p-6 rounded-3xl border border-white/5">
            <h4 className="text-sm font-mono tracking-widest text-slate-500 uppercase mb-6">
              Perguntas Frequentes
            </h4>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-white/5 last:border-0 pb-4 last:pb-0 cursor-pointer group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h5 className="text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors flex items-center gap-2 select-none justify-between">
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </motion.div>
                  </h5>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-400 text-xs leading-relaxed mt-2 pl-2 border-l border-blue-500/40">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;;
