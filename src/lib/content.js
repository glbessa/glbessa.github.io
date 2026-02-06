import matter from 'gray-matter';

// Eagerly import all markdown files at build time
const postsRaw = import.meta.glob('/content/posts/*.md', { eager: true, query: '?raw', import: 'default' });
const projectsRaw = import.meta.glob('/content/projects/*.md', { eager: true, query: '?raw', import: 'default' });

/**
 * Helper to parse markdown content
 */
function parseContent(rawMap) {
  return Object.keys(rawMap).map(path => {
    const raw = rawMap[path];
    const { data, content: markdown } = matter(raw);
    
    const filename = path.split('/').pop().replace('.md', '');
    
    // Preprocess Hugo shortcodes
    let processedMarkdown = markdown;
    processedMarkdown = processedMarkdown.replace(/{{< image "([^"]+)" "([^"]+)" >}}/g, '![$2]($1)');
    processedMarkdown = processedMarkdown.replace(/{{< note "([^"]+)" >}}/g, '> 💡 **Note:** $1');
    processedMarkdown = processedMarkdown.replace(/{{< reference "([^"]+)" >}}/g, '[$1]($1)');

    return {
      slug: filename,
      ...data,
      content: processedMarkdown,
      path
    };
  });
}

// Pre-process all content once
const allPosts = parseContent(postsRaw).sort((a, b) => new Date(b.date) - new Date(a.date));
const allProjects = parseContent(projectsRaw).sort((a, b) => (a.order || 0) - (b.order || 0));

export async function getPosts() {
  return allPosts;
}

export async function getProjects() {
  return allProjects;
}

export async function getPostBySlug(slug) {
  return allPosts.find(p => p.slug === slug);
}

export async function getProjectBySlug(slug) {
  return allProjects.find(p => p.slug === slug);
}