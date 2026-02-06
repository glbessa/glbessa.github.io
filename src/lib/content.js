/**
 * Simple browser-compatible frontmatter parser
 */
function parseFrontMatter(raw) {
  const regex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = raw.match(regex);
  
  if (!match) return { data: {}, content: raw };
  
  const yaml = match[1];
  const content = match[2];
  const data = {};
  
  // Basic YAML key-value parser
  yaml.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Handle simple strings with quotes
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      }
      
      // Handle arrays like ["A", "B"]
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch (e) {
          // If not valid JSON array, keep as string or try simpler split
          value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        }
      }
      
      // Handle numeric values
      if (!isNaN(value) && value !== '') {
        value = Number(value);
      }
      
      data[key] = value;
    }
  });
  
  return { data, content };
}

// Eagerly import all markdown files at build time
const postsRaw = import.meta.glob('/content/posts/*.md', { eager: true, query: '?raw', import: 'default' });
const projectsRaw = import.meta.glob('/content/projects/*.md', { eager: true, query: '?raw', import: 'default' });

/**
 * Helper to parse markdown content
 */
function parseContent(rawMap) {
  return Object.keys(rawMap).map(path => {
    const raw = rawMap[path];
    const { data, content: markdown } = parseFrontMatter(raw);
    
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
