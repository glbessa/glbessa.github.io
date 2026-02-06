import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Todos');
  const [categories, setCategories] = useState(['Todos']);

  useEffect(() => {
    // Import all project metadata dynamically from the generated pages
    const modules = import.meta.glob('./projects/*.jsx', { eager: true });
    
    // Convert to array of { ...metadata }
    const loadedProjects = Object.values(modules).map(module => module.metadata);
    
    // Sort by order asc
    loadedProjects.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    setProjects(loadedProjects);
    const uniqueCategories = ['Todos', ...new Set(loadedProjects.map(p => p.category).filter(Boolean))];
    setCategories(uniqueCategories);
  }, []);

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-12 py-8">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Soluções e Projetos</h2>
        <p className="text-slate-600 max-w-3xl text-lg">
          Explore como transformei desafios técnicos em resultados de negócio através de desenvolvimento sob medida e automação.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === cat 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-slate-100 group">
            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {project.category || 'Geral'}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                <Link to={`/projects/${project.slug}`}>
                  {project.title}
                </Link>
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {project.impact && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Impacto de Negócio</p>
                  <p className="text-sm text-slate-700 font-medium italic">"{project.impact}"</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags && project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 mt-auto">
                <Link 
                  to={`/projects/${project.slug}`} 
                  className="flex-1 text-center bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  Caso de Estudo
                </Link>
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 text-slate-500 border-2 border-slate-100 rounded-xl hover:bg-slate-50 hover:text-slate-700 transition-all"
                    title="Ver Código"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;