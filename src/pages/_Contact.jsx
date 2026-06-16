import React, { useState, useEffect } from 'react';
import { getData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertTriangle, Loader2, User, Mail, Phone, Building2, Briefcase, MessageSquare } from 'lucide-react';

const Contact = () => {
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
    <div className="max-w-2xl mx-auto bg-surface/40 p-6 md:p-10 rounded-3xl border border-border backdrop-blur-md relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      
      <h3 className="text-2xl font-bold text-text mb-2 font-sora text-center">Solicitar Diagnóstico Técnico</h3>
      <p className="text-text-muted text-sm mb-8 font-sans text-center max-w-md mx-auto">
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-2">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-text font-sora">Solicitação Enviada com Sucesso!</h4>
            <p className="text-text-muted max-w-md mx-auto text-sm font-sans">
              Obrigado pelo envio. Seus dados foram registrados e entraremos em contato nos próximos dias para apresentar seu diagnóstico operacional.
            </p>
            <button 
              onClick={() => setSuccess(false)}
              className="px-6 py-2.5 bg-surface-hi hover:opacity-90 text-text text-sm font-semibold rounded-xl border border-border transition-all font-sans"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                  Seu Nome *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/50" />
                  <input 
                    type="text" 
                    required
                    placeholder="Ex: Gabriel Bessa"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full bg-bg border border-border rounded-xl pl-10 pr-4 py-3 text-text placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                  Seu E-mail Corporativo *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/50" />
                  <input 
                    type="email" 
                    required
                    placeholder="Ex: nome@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bg border border-border rounded-xl pl-10 pr-4 py-3 text-text placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                  Telefone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/50" />
                  <input 
                    type="tel" 
                    required
                    placeholder="Ex: (53) 98465-5136"
                    value={formData.telefone}
                    onChange={handlePhoneChange}
                    className="w-full bg-bg border border-border rounded-xl pl-10 pr-4 py-3 text-text placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                  Empresa / Operação
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/50" />
                  <input 
                    type="text" 
                    placeholder="Ex: Minha Empresa Ltda"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full bg-bg border border-border rounded-xl pl-10 pr-4 py-3 text-text placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="font-sans">
              <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                Qual seu perfil / cargo atual?
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/50" />
                <select 
                  value={formData.perfil}
                  onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
                  className="w-full bg-bg border border-border rounded-xl pl-10 pr-10 py-3 text-text focus:outline-none focus:border-accent transition-colors text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecione seu cargo...</option>
                  <option value="Socio / CEO / Director">Sócio / CEO / Diretor</option>
                  <option value="Product Owner / Gerente de Produto">Gerente de Produto (PO / PM)</option>
                  <option value="CTO / Tech Lead / Dev">CTO / Tech Lead / Engenheiro</option>
                  <option value="Coordenador de Operacoes">Coordenador de Operações</option>
                  <option value="Outro">Outro cargo</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-muted">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div className="font-sans">
              <label className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                Descreva seu gargalo técnico ou ideia de projeto
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-text-muted/50" />
                <textarea 
                  rows={4}
                  placeholder="Ex: Preciso integrar um pipeline de IA no meu SaaS ou otimizar a infraestrutura cloud para reduzir custos e instabilidade..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full bg-bg border border-border rounded-xl pl-10 pr-4 py-3 text-text placeholder-slate-600 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand to-accent hover:opacity-90 disabled:opacity-50 text-text rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand/15 font-sans"
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
  );
};

export default Contact;
