import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { slugify } from './slugify';

const blogDir = path.join(__dirname, '../../../client/src/blog');
const blogDir2 = path.join(__dirname, '../../../client/src/blog');

const loadMarkdownPosts = () => {

  const files = fs.readdirSync(blogDir2).filter((file: string) => file.endsWith('.md'));

  return files.map((filename: string) => {
    const filePath = path.join(blogDir2, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    
    return {
      id: filename.replace(/\.md$/, ''),
      ...data, // Assumes frontmatter has title, description, author, etc.
      content,
    };
  });
};


export function loadMarkdownData() {
    const files = fs.readdirSync(blogDir);
  
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
        const { data, content } = matter(raw);
        return {
          id: file.replace(/\.md$/, ''),
          title: data.title || file,
          slug:slugify(data.title || file),
          description: data.description || '',
          author: data.authors || '',
          content: slugify(content || file),
        };
      });
  }

export default loadMarkdownPosts