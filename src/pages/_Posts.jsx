import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { getData } from '../data';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Posts = ({ posts: initialPosts = [] }) => {
  const [posts, setPosts] = useState([]);
  const data = getData();
  const seo = data.site.pages.posts;

  useEffect(() => {
    const sorted = [...initialPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(sorted);
  }, [initialPosts]);

  return (
    <div className="font-sans">
      <SEO 
        title={seo.title} 
        description={seo.description}
        url={`${data.site.url}/posts`}
      />
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-border text-text font-sora">Artigos Recentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="bg-surface rounded-2xl overflow-hidden flex flex-col h-full border border-border group hover:border-accent/30 hover:shadow-2xl hover:shadow-brand/5 transition-all duration-300">
            {post.hero && (
              <img 
                src={post.hero} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 font-sora">
                <a href={`/posts/${post.slug}`} className="text-text hover:text-accent transition-colors">
                  {post.title}
                </a>
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 items-center">
                <Tag className="w-3.5 h-3.5 text-accent/70 mr-1" />
                {post.tags && post.tags.map(tag => (
                  <span key={tag} className="bg-bg text-text-muted text-[10px] px-2.5 py-1 rounded border border-border font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-text-muted mb-3 font-mono flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent/70" />
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-text-muted text-sm line-clamp-3 mb-4 flex-grow">
                {post.description || post.summary}
              </p>
              <a href={`/posts/${post.slug}`} className="text-accent font-medium text-sm hover:underline mt-auto flex items-center gap-1.5 font-mono">
                Ler mais
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
