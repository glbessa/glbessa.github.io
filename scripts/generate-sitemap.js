import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://glbessa.dev';
const PAGES_DIR = path.resolve(__dirname, '../src/pages');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const staticRoutes = [
  '',
  '/projects',
  '/posts',
];

function getSlugs(subDir) {
  const dirPath = path.join(PAGES_DIR, subDir);
  if (!fs.existsSync(dirPath)) return [];
  
  return fs.readdirSync(dirPath)
    .filter(file => file.endsWith('.jsx'))
    .map(file => file.replace(/^_/, '').replace('.jsx', ''));
}

function generateSitemap() {
  const projectSlugs = getSlugs('projects');
  const postSlugs = getSlugs('posts');

  const urls = [
    ...staticRoutes.map(route => `${BASE_URL}${route}`),
    ...projectSlugs.map(slug => `${BASE_URL}/projects/${slug}`),
    ...postSlugs.map(slug => `${BASE_URL}/posts/${slug}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === BASE_URL ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR);
  }

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully!');
}

generateSitemap();
