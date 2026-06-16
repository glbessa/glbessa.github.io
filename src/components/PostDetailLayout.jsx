import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import SEO from './SEO';
import { ArrowLeft, Calendar, User, Github, ExternalLink, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';

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
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
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
                <Calendar className="w-4 h-4 text-accent" />
                <span>{new Date(data.date).toLocaleDateString()}</span>
              </div>
            )}
            {data.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                <span>{data.author}</span>
              </div>
            )}
        </div>

        {/* Project Context Cards */}
        {type === 'projects' && (data.problem || data.solution || data.impact) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {data.problem && (
              <div className="bg-surface border border-red-500/10 p-6 rounded-2xl flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <h4 className="text-red-400 font-bold text-xs font-mono uppercase">O Desafio</h4>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{data.problem}</p>
              </div>
            )}
            {data.solution && (
              <div className="bg-surface border border-brand/20 p-6 rounded-2xl flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-accent" />
                  <h4 className="text-accent font-bold text-xs font-mono uppercase">A Solução</h4>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{data.solution}</p>
              </div>
            )}
            {data.impact && (
              <div className="bg-surface border border-green-500/20 p-6 rounded-2xl flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <h4 className="text-green-400 font-bold text-xs font-mono uppercase">O Resultado</h4>
                </div>
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
                    <Github className="w-5 h-5" />
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
                    <ExternalLink className="w-5 h-5" />
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
