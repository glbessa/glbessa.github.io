import React from 'react';

const Contact = () => {
  const faqs = [
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Trabalho de forma ágil. Começamos com uma reunião de alinhamento para entender suas dores, definimos o escopo do MVP ou solução, e realizamos entregas incrementais com feedback constante."
    },
    {
      question: "Você atende empresas de qualquer tamanho?",
      answer: "Meu foco principal são Startups que precisam validar ideias rápido e pequenas empresas que buscam automatizar processos para escalar."
    },
    {
      question: "Qual o prazo médio para um MVP?",
      answer: "Depende da complexidade, mas geralmente entre 4 a 8 semanas para uma versão funcional e estável."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Vamos transformar sua ideia em realidade?</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Escolha o canal que preferir. Respondo geralmente em menos de 24 horas.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Canais Diretos</h2>
          
          <a 
            href="https://wa.me/seu-numero-aqui" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.766-1.653-2.063-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase">WhatsApp</p>
              <p className="text-lg font-bold text-slate-700">Conversar agora</p>
            </div>
          </a>

          <a 
            href="mailto:gabrielleitebessa@gmail.com" 
            className="flex items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase">E-mail</p>
              <p className="text-lg font-bold text-slate-700">gabrielleitebessa@gmail.com</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/gabrielleitebessa/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase">LinkedIn</p>
              <p className="text-lg font-bold text-slate-700">Conectar profissionalmente</p>
            </div>
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-50 p-8 rounded-3xl space-y-8 border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-slate-800">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;