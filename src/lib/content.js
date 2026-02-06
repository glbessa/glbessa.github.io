import matter from 'gray-matter';

// Import all markdown files from the content directory
const postsGlob = import.meta.glob('/content/posts/*.md', { query: '?raw', import: 'default' });
const projectsGlob = import.meta.glob('/content/projects/*.md', { query: '?raw', import: 'default' });

/**
 * Helper to fetch and parse markdown files
 */
async function loadContent(glob) {
  const content = [];
  for (const path in glob) {
    const raw = await glob[path]();
    const { data, content: markdown } = matter(raw);
    
    // Extract slug from path
    // Path format: /content/posts/filename.md
    const filename = path.split('/').pop().replace('.md', '');
    
    // Preprocess Hugo shortcodes
    let processedMarkdown = markdown;
    
    // Replace image shortcode: {{< image "src" "alt" >}} -> ![alt](src)
    processedMarkdown = processedMarkdown.replace(/{{< image "([^"]+)" "([^"]+)" >}}/g, '![$2]($1)');
    
    // Replace note shortcode: {{< note "text" >}} -> > 💡 **Note:** text
    processedMarkdown = processedMarkdown.replace(/{{< note "([^"]+)" >}}/g, '> 💡 **Note:** $1');
    
    // Replace reference shortcode: {{< reference "url" >}} -> [url](url)
    processedMarkdown = processedMarkdown.replace(/{{< reference "([^"]+)" >}}/g, '[$1]($1)');

    content.push({
      slug: filename,
      ...data,
      content: processedMarkdown,
      path
    });
  }
  return content;
}

export async function getPosts() {
  const posts = await loadContent(postsGlob);
  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getProjects() {
  const projects = await loadContent(projectsGlob);
  // Sort by order or date
  return projects.sort((a, b) => (a.order || 0) - (b.order || 0));
}

export async function getPostBySlug(slug) {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug);
}

export async function getProjectBySlug(slug) {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}
