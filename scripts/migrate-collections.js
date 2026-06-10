import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const POSTS_DIR = path.join(SRC_DIR, 'pages/posts');
const PROJECTS_DIR = path.join(SRC_DIR, 'pages/projects');

const CONTENT_POSTS_DIR = path.join(SRC_DIR, 'content/posts');
const CONTENT_PROJECTS_DIR = path.join(SRC_DIR, 'content/projects');

// Create content directories if they don't exist
if (!fs.existsSync(CONTENT_POSTS_DIR)) {
  fs.mkdirSync(CONTENT_POSTS_DIR, { recursive: true });
}
if (!fs.existsSync(CONTENT_PROJECTS_DIR)) {
  fs.mkdirSync(CONTENT_PROJECTS_DIR, { recursive: true });
}

function parseJsxFile(filePath) {
  const contentText = fs.readFileSync(filePath, 'utf8');
  
  // Extract metadata using regex
  // Match "export const metadata = { ... };"
  const metadataStart = contentText.indexOf('export const metadata =');
  if (metadataStart === -1) return null;
  
  let bracketCount = 0;
  let metadataStr = '';
  let i = contentText.indexOf('{', metadataStart);
  if (i === -1) return null;
  
  while (i < contentText.length) {
    const char = contentText[i];
    metadataStr += char;
    if (char === '{') bracketCount++;
    else if (char === '}') bracketCount--;
    
    if (bracketCount === 0) break;
    i++;
  }
  
  let metadata = {};
  try {
    // Clean up JS syntax to make it valid JSON if possible, or eval it safely in a sandbox
    // Since we trust our own files, a simple Function evaluation is safe here.
    metadata = new Function(`return ${metadataStr}`)();
  } catch (e) {
    console.error(`Error parsing metadata in ${filePath}:`, e);
    return null;
  }
  
  // Extract content
  // Match "export const content = `...`;"
  // It starts with content = ` or content = "` or content = '
  const contentStartMatch = contentText.match(/export const content =\s*([`"'])/);
  if (!contentStartMatch) return { metadata, content: '' };
  
  const quoteChar = contentStartMatch[1];
  const startIdx = contentText.indexOf(quoteChar, contentText.indexOf('export const content =')) + 1;
  
  // Find closing quote, taking into account escaped quotes
  let contentStr = '';
  let escaped = false;
  for (let j = startIdx; j < contentText.length; j++) {
    const char = contentText[j];
    if (escaped) {
      contentStr += char;
      escaped = false;
    } else if (char === '\\') {
      escaped = true;
      // We keep the backslash for now, or handle specific escapes if they are backticks
      contentStr += char;
    } else if (char === quoteChar) {
      break;
    } else {
      contentStr += char;
    }
  }
  
  // Unescape backticks in markdown: \` -> `
  // Since contentStr has the raw string, let's process backslash-escapes
  let unescapedContent = '';
  for (let j = 0; j < contentStr.length; j++) {
    if (contentStr[j] === '\\' && contentStr[j+1] === '`') {
      unescapedContent += '`';
      j++; // skip backtick
    } else {
      unescapedContent += contentStr[j];
    }
  }
  
  return { metadata, content: unescapedContent };
}

function migrateDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  
  const files = fs.readdirSync(srcDir).filter(f => f.startsWith('_') && f.endsWith('.jsx'));
  console.log(`Found ${files.length} files in ${srcDir}`);
  
  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const parsed = parseJsxFile(filePath);
    if (!parsed) {
      console.log(`❌ Failed to parse ${file}`);
      return;
    }
    
    const { metadata, content } = parsed;
    const slug = metadata.slug || file.replace(/^_/, '').replace('.jsx', '');
    const mdFileName = `${slug}.md`;
    const destPath = path.join(destDir, mdFileName);
    
    // Build Frontmatter
    // We clone metadata and delete slug since Astro does not need it in frontmatter (it uses file name, but we can keep it if we want)
    const frontmatterData = { ...metadata };
    delete frontmatterData.slug;
    
    let frontmatterStr = '---\n';
    Object.entries(frontmatterData).forEach(([key, val]) => {
      if (typeof val === 'string') {
        frontmatterStr += `${key}: ${JSON.stringify(val)}\n`;
      } else if (Array.isArray(val)) {
        if (val.length === 0) {
          frontmatterStr += `${key}: []\n`;
        } else {
          frontmatterStr += `${key}:\n`;
          val.forEach(item => {
            frontmatterStr += `  - ${JSON.stringify(item)}\n`;
          });
        }
      } else if (val !== undefined && val !== null) {
        frontmatterStr += `${key}: ${val}\n`;
      }
    });
    frontmatterStr += '---\n';
    
    const fullMdContent = frontmatterStr + '\n' + content;
    fs.writeFileSync(destPath, fullMdContent, 'utf8');
    console.log(`✅ Migrated ${file} -> ${mdFileName}`);
  });
}

console.log('Starting migration to Content Collections...');
migrateDir(POSTS_DIR, CONTENT_POSTS_DIR);
migrateDir(PROJECTS_DIR, CONTENT_PROJECTS_DIR);
console.log('Migration complete!');
