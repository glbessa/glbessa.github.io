import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content prose prose-slate prose-lg max-w-none prose-img:rounded-lg prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]} 
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({node, ...props}) => (
            <img {...props} className="img-fluid rounded my-3 mx-auto" style={{maxHeight: '500px'}} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;