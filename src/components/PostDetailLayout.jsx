import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import SEO from './SEO';

const PostDetailLayout = ({ data, type }) => {
  if (!data) return <div className="text-center py-20 text-text-muted font-medium font-mono">Carregando conteúdo...</div>;

  const pageUrl = `/${type === 'posts' ? 'posts' : 'projects'}/${data.slug}`;

  return (
    <>
      <SEO 
        title={data.title} 
        description={data.description} 
        image={data.hero}
        url={pageUrl}
        type="article"
      />
      <div className="max-w-4xl mx-auto py-12 font-sans">
      <a
        href={type === 'posts' ? '/posts' : '/projects'}
        className="text-accent hover:text-accent/80 font-bold mb-8 inline-flex items-center gap-2 group transition-all font-mono text-sm"
      >
        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Voltar para {type === 'posts' ? 'Artigos' : 'Projetos'}
      </a>
      
      <header className="mb-12 space-y-6">
        <div className="space-y-4">
          {type === 'projects' && (
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-lg font-mono">
              Caso de Estudo: {data.category || 'Software'}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text leading-tight font-sora">{data.title}</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 text-text-muted font-medium font-mono text-xs">
            {data.date && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{new Date(data.date).toLocaleDateString()}</span>
              </div>
            )}
            {data.author && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>{data.author}</span>
              </div>
            )}
        </div>

        {/* Project Context Cards */}
        {type === 'projects' && (data.problem || data.solution || data.impact) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {data.problem && (
              <div className="bg-surface border border-red-500/10 p-6 rounded-2xl">
                <h4 className="text-red-400 font-bold text-xs font-mono uppercase mb-2">O Desafio</h4>
                <p className="text-text-muted text-sm leading-relaxed">{data.problem}</p>
              </div>
            )}
            {data.solution && (
              <div className="bg-surface border border-brand/20 p-6 rounded-2xl">
                <h4 className="text-accent font-bold text-xs font-mono uppercase mb-2">A Solução</h4>
                <p className="text-text-muted text-sm leading-relaxed">{data.solution}</p>
              </div>
            )}
            {data.impact && (
              <div className="bg-surface border border-green-500/20 p-6 rounded-2xl">
                <h4 className="text-green-400 font-bold text-xs font-mono uppercase mb-2">O Resultado</h4>
                <p className="text-text font-bold text-sm leading-relaxed italic">"{data.impact}"</p>
              </div>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 pt-2">
          {data.tags && data.tags.map(tag => (
            <span key={tag} className="bg-surface text-text-muted text-xs px-3 py-1 rounded-lg border border-border font-mono">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {data.hero && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-border">
          <img 
            src={data.hero} 
            alt={data.title} 
            className="w-full object-cover max-h-[600px]"
          />
        </div>
      )}

      <article className="mb-16 bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
        <div className="markdown-content prose prose-invert prose-slate prose-lg max-w-none prose-img:rounded-lg prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80">
          <MarkdownRenderer content={data.content} />
        </div>
      </article>

      {type === 'projects' && (
         <div className="mt-12 pt-12 border-t border-border">
            <h4 className="text-2xl font-bold text-text mb-6 font-sora">Explore o Projeto</h4>
            <div className="flex flex-wrap gap-4">
                {data.github_url && (
                  <a 
                    href={data.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-surface-hi text-text px-8 py-4 rounded-xl font-bold border border-border hover:bg-surface hover:border-accent/30 transition-all flex items-center gap-3 shadow-lg"
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
                    className="bg-gradient-to-r from-brand to-accent hover:opacity-90 text-text px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3 shadow-lg shadow-brand/10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Ver Projeto Online
                  </a>
                )}
            </div>
         </div>
      )}
    </div>
    </>
  );
};

export default PostDetailLayout;
