import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../lib/content';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-slate-200">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-slate-100">
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">
                <Link to={`/projects/${project.slug}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                  {project.title}
                </Link>
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags && project.tags.map(tag => (
                  <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <Link 
                  to={`/projects/${project.slug}`} 
                  className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  Ver Detalhes
                </Link>
                {project.github_url && (
                  <a 
                    href={project.github_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-300 rounded hover:bg-slate-50 transition-colors"
                  >
                    GitHub
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