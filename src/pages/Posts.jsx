import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Import all post metadata dynamically from the generated pages
    const modules = import.meta.glob('./posts/*.jsx', { eager: true });
    
    // Convert to array of { ...metadata }
    const loadedPosts = Object.values(modules).map(module => module.metadata);
    
    // Sort by date desc
    loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setPosts(loadedPosts);
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-slate-200">Artigos Recentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full border border-slate-100">
            {post.hero && (
              <img 
                src={post.hero} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">
                <Link to={`/posts/${post.slug}`} className="text-slate-900 hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags && post.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mb-3">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
                {post.description || post.summary}
              </p>
              <Link to={`/posts/${post.slug}`} className="text-blue-600 font-medium text-sm hover:underline mt-auto">
                Ler mais &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;