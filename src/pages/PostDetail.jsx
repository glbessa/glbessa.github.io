import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { getPostBySlug, getProjectBySlug } from '../lib/content';

const PostDetail = ({ type }) => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const load = async () => {
      if (type === 'posts') {
        const post = await getPostBySlug(slug);
        setData(post);
      } else {
        const project = await getProjectBySlug(slug);
        setData(project);
      }
    };
    load();
  }, [slug, type]);

  if (!data) return <div className="text-center py-20 text-slate-500">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Link 
        to={type === 'posts' ? '/posts' : '/projects'} 
        className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-flex items-center"
      >
        &larr; Voltar para {type === 'posts' ? 'Artigos' : 'Projetos'}
      </Link>
      
      <header className="mb-10 border-b border-slate-100 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 leading-tight">{data.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-slate-500 mb-6">
            {data.date && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>{new Date(data.date).toLocaleDateString()}</span>
              </div>
            )}
            {data.author && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                <span>por {data.author}</span>
              </div>
            )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {data.tags && data.tags.map(tag => (
            <span key={tag} className="bg-slate-200 text-slate-700 text-sm px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {data.hero && (
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={data.hero} 
            alt={data.title} 
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      )}

      <article className="mb-16">
        <MarkdownRenderer content={data.content} />
      </article>

      {type === 'projects' && (
         <div className="mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-xl font-bold mb-4">Links do Projeto</h4>
            <div className="flex gap-4">
                {data.github_url && (
                  <a 
                    href={data.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                    Ver no GitHub
                  </a>
                )}
                {data.website_url && (
                  <a 
                    href={data.website_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    Ver Projeto Online
                  </a>
                )}
            </div>
         </div>
      )}
    </div>
  );
};

export default PostDetail;