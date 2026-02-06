import React from 'react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';

const PostDetailLayout = ({ data, type }) => {
  if (!data) return <div className="text-center py-20 text-slate-500 font-medium">Carregando conteúdo...</div>;

  // Simple SEO title update
  React.useEffect(() => {
    if (data.title) {
        document.title = `${data.title} | Gabriel Leite Bessa`;
    }
  }, [data.title]);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Link 
        to={type === 'posts' ? '/posts' : '/projects'} 
        className="text-blue-600 hover:text-blue-800 font-bold mb-8 inline-flex items-center gap-2 group transition-all"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Voltar para {type === 'posts' ? 'Artigos' : 'Projetos'}
      </Link>
      
      <header className="mb-12 space-y-6">
        <div className="space-y-2">
          {type === 'projects' && (
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-lg">
              Caso de Estudo: {data.category || 'Software'}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">{data.title}</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium">
            {data.date && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{new Date(data.date).toLocaleDateString()}</span>
              </div>
            )}
            {data.author && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>{data.author}</span>
              </div>
            )}
        </div>

        {/* Project Context Cards */}
        {type === 'projects' && (data.problem || data.solution || data.impact) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {data.problem && (
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h4 className="text-red-800 font-bold text-sm uppercase mb-2">O Desafio</h4>
                <p className="text-red-900 text-sm leading-relaxed">{data.problem}</p>
              </div>
            )}
            {data.solution && (
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="text-blue-800 font-bold text-sm uppercase mb-2">A Solução</h4>
                <p className="text-blue-900 text-sm leading-relaxed">{data.solution}</p>
              </div>
            )}
            {data.impact && (
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="text-emerald-800 font-bold text-sm uppercase mb-2">O Resultado</h4>
                <p className="text-emerald-900 text-sm leading-relaxed font-bold italic">{data.impact}</p>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 pt-2">
          {data.tags && data.tags.map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-lg font-bold uppercase tracking-wider">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {data.hero && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src={data.hero} 
            alt={data.title} 
            className="w-full object-cover max-h-[600px]"
          />
        </div>
      )}

      <article className="mb-16 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <MarkdownRenderer content={data.content} />
      </article>

      {type === 'projects' && (
         <div className="mt-12 pt-12 border-t border-slate-200">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Explore o Projeto</h4>
            <div className="flex flex-wrap gap-4">
                {data.github_url && (
                  <a 
                    href={data.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-3 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    Código no GitHub
                  </a>
                )}
                {data.website_url && (
                  <a 
                    href={data.website_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-lg shadow-blue-100"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Ver Projeto Online
                  </a>
                )}
            </div>
         </div>
      )}
    </div>
  );
};

export default PostDetailLayout;
