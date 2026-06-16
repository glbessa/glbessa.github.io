import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { getData } from '../data';
import { Folder, Layout, Cpu, Code, Database, Server, TrendingUp, FileText, Github } from 'lucide-react';

const getCategoryIcon = (category) => {
  if (!category) return Layout;
  const cat = category.toLowerCase();
  if (cat.includes('todos')) return Folder;
  if (cat.includes('saas') || cat.includes('web') || cat.includes('sistema') || cat.includes('plataforma')) return Layout;
  if (cat.includes('ia') || cat.includes('inteligência') || cat.includes('dados') || cat.includes('dado') || cat.includes('big data') || cat.includes('scraping') || cat.includes('pipeline')) return Database;
  if (cat.includes('infra') || cat.includes('cloud') || cat.includes('devops') || cat.includes('server') || cat.includes('rede')) return Server;
  if (cat.includes('compilador') || cat.includes('baixo nível') || cat.includes('rust') || cat.includes('c') || cat.includes('mips') || cat.includes('os') || cat.includes('operativo') || cat.includes('hardware') || cat.includes('iot')) return Cpu;
  return Code;
};

const Projects = ({ projects: initialProjects = [] }) => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('Todos');
  const [categories, setCategories] = useState(['Todos']);

  const data = getData();
  const seo = data.site.pages.projects;

  useEffect(() => {
    const loadedProjects = [...initialProjects];
    
    // Sort by order asc
    loadedProjects.sort((a, b) => (a.order || 0) - (b.order || 0));
    
    setProjects(loadedProjects);
    const uniqueCategories = ['Todos', ...new Set(loadedProjects.map(p => p.category).filter(Boolean))];
    setCategories(uniqueCategories);
  }, [initialProjects]);

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-12 py-8 font-sans">
      <SEO 
        title={seo.title}
        description={seo.description}
        url={`${data.site.url}/projects`}
      />
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text font-sora">Soluções e Projetos</h2>
        <p className="text-text-muted max-w-3xl text-lg">
          Explore como transformamos desafios técnicos em resultados de negócio através de desenvolvimento sob medida e automação.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {categories.map(cat => {
          const Icon = getCategoryIcon(cat);
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all border flex items-center gap-2 ${
                filter === cat 
                  ? 'bg-gradient-to-r from-brand to-accent text-text border-transparent shadow-md shadow-brand/10' 
                  : 'bg-surface text-text-muted border-border hover:bg-surface-hi hover:text-text'
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="bg-surface rounded-2xl border border-border group hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 flex flex-col flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md font-mono">
                  {project.category || 'Geral'}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors font-sora">
                <a href={`/projects/${project.slug}`}>
                  {project.title}
                </a>
              </h3>

              <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {project.impact && (
                <div className="bg-bg p-4 rounded-xl border border-border flex gap-3 items-start">
                  <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-accent font-mono uppercase mb-1">Impacto de Negócio</p>
                    <p className="text-sm text-text-muted font-medium italic">"{project.impact}"</p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags && project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-[10px] bg-bg text-text-muted px-2 py-0.5 rounded border border-border font-mono font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 mt-auto font-sans">
                <a
                  href={`/projects/${project.slug}`}
                  className="flex-1 text-center bg-surface-hi text-text px-4 py-2.5 rounded-xl text-sm font-bold border border-border hover:bg-surface hover:border-accent/30 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-accent" />
                  Caso de Estudo
                </a>
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 text-text-muted border border-border bg-surface rounded-xl hover:bg-surface-hi hover:text-text transition-all flex items-center justify-center"
                    title="Ver Código"
                  >
                    <Github className="w-5 h-5" />
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
