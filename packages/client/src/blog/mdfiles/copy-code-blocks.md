---
title: Here's a complete example of HTML + JavaScript that you can inject into your blog page, This script adds a copy button to each  block which is typically used to display code in blog content.
description: Dynamic Markdown integration: If you're rendering blog posts from .md files, use react-markdown + rehype-highlight or rehype-prism-plus and replace the default code component with CodeBlock.
authors: ['Nikolai Makarov']
date: Dec 11, 2023
image: 1689949302out-0-300x200.png
card: true
tags: ['LATEST-TRENDS']
---


<ul><li>
<p class="description">

### ✅ HTML + JavaScript Snippet

html
Copy
Edit
<!-- Include this where your blog content is rendered -->
```css
<style>
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #007bff;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  z-index: 10;
}

.code-block-wrapper {
  position: relative;
}
</style>
```
```js
<script>
document.addEventListener("DOMContentLoaded", () => {
  const codeBlocks = document.querySelectorAll("pre > code");

  codeBlocks.forEach((code) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";
    const pre = code.parentElement;

    // Move <pre> into wrapper
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Create button
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.className = "copy-btn";
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(code.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      });
    });

    wrapper.appendChild(button);
  });
});
</script>
```

🧠 How it works:
It waits for the DOM to load.

Finds all blocks.

Wraps each one in a div with position: relative.

Adds a copy button in the top-right.

When clicked, the code inside is copied to the clipboard using navigator.clipboard.writeText().

If you're using React or Markdown with syntax highlighting (like react-markdown + rehype-prism), I can help you set up a React version too. Just let me know!

You said:
please rewrite this in react environment and turn it into components


ChatGPT said:
Here’s how to turn the "Copy to Clipboard" feature into a reusable React component, ideal for a blog environment where code blocks are rendered. This works well whether you're rendering static HTML or generating blocks dynamically.

✅ CodeBlock.jsx – Reusable Component
tsx
Copy
Edit

### components/CodeBlock.jsx or .tsx if you're using TypeScript

```js
import React, { useState } from 'react';
import { cn } from '../utils/cn'; // Optional helper for classnames

export const CodeBlock = ({ code = '', language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden my-4">
      <button
        className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-500 transition"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="overflow-x-auto p-4 text-sm text-gray-100">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
```

📦 How to Use It
tsx
Copy
Edit

```js
import React from 'react';
import { CodeBlock } from './components/CodeBlock';

const SomeBlogPost = () => {
  const exampleCode = `
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("World"));
`;

  return (
    <div>
      <h1>My Blog Post</h1>
      <p>This is how you define a function in JavaScript:</p>
      <CodeBlock code={exampleCode} language="javascript" />
    </div>
  );
};

export default SomeBlogPost;
```

✅ Optional Enhancements
Syntax highlighting: Use prismjs, highlight.js, or react-syntax-highlighter for pretty formatting.

Dynamic Markdown integration: If you're rendering blog posts from .md files, use react-markdown + rehype-highlight or rehype-prism-plus and replace the default code component with CodeBlock.

Would you like me to give you a setup that works with react-markdown and .md blog files from your src/blog folder too?


You said:
yes that's what I am looking for.


ChatGPT said:
Perfect — since you're rendering blog content from .md files using React, I'll show you how to:

Render Markdown using react-markdown.

Highlight code using rehype-prism-plus.

Add a custom CodeBlock component that includes a "Copy" button.

✅ 1. Install Required Packages
Use this command:

bash
Copy
Edit
npm install react-markdown rehype-prism-plus prismjs
Also include a PrismJS theme (optional, for pretty colors):

bash
Copy
Edit
npm install prism-themes
✅ 2. Add Prism Theme CSS (Global Style)
You can import a theme like this in your root component or a global stylesheet:

tsx
Copy
Edit
import 'prism-themes/themes/prism-vsc-dark-plus.css'; // Or any other theme you prefer
✅ 3. Create CodeBlock.jsx
tsx
Copy
Edit
### components/CodeBlock.jsx

```js
import React, { useState } from 'react';

export const CodeBlock = ({ className = '', children }) => {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') || 'text';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div className="relative group bg-[#1e1e1e] rounded-lg overflow-hidden my-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className={`language-${language} p-4 overflow-x-auto`}>
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
};
```

✅ 4. Create MarkdownRenderer.jsx
tsx
Copy
Edit

### components/MarkdownRenderer.jsx

```js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';
import { CodeBlock } from './CodeBlock';

export const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypePrism]}
      components={{
        code({ node, inline, className, children, ...props }) {
          if (inline) {
            return <code className={className} {...props}>{children}</code>;
          }
          return (
            <CodeBlock className={className}>
              {String(children).replace(/\n$/, '')}
            </CodeBlock>
          );
        },
      }}
    />
  );
};
```

✅ 5. Use It in a Blog Page
tsx
Copy
Edit

### pages/BlogPost.jsx

```js
import React from 'react';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import fs from 'fs';

const BlogPost = () => {
  const content = fs.readFileSync('./src/blog/sample.md', 'utf-8');

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default BlogPost;
```

Or if you load markdown through fetch or props, just pass it as content.

✅ Final Notes
You can preload .md files during SSR or via a backend call (as you're doing in sp-blogs).

You can style the copy button and code blocks further with Tailwind or Emotion.

The code handles language detection via className="language-js".

Would you like help integrating this into your current sp-blogs monorepo setup with SSR?

You said:
yes please that is great!


ChatGPT said:
Update memory? “Is rendering blog posts from `.md` files using `re...”

Yes

No
Great! Here's how to integrate the MarkdownRenderer and CodeBlock component into your sp-blogs monorepo with SSR support, assuming you're rendering .md files from src/blog.

✅ Step-by-Step Integration Guide (sp-blogs)
1. Install dependencies (in root)
bash
Copy
Edit
npm install react-markdown rehype-prism-plus prismjs prism-themes
2. Directory structure inside client
javascript
Copy
Edit

```css
sp-blogs/
├── packages/
│   ├── client/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── CodeBlock.jsx
│   │   │   │   └── MarkdownRenderer.jsx
│   │   │   ├── pages/
│   │   │   │   └── BlogPost.jsx
│   │   │   ├── styles/
│   │   │   │   └── prism-theme.css (optional, or import from `prism-themes`)
```

3. CodeBlock.jsx
Already provided above. Save it under:

bash
Copy
Edit
client/src/components/CodeBlock.jsx
4. MarkdownRenderer.jsx
Save this under:

bash
Copy
Edit
client/src/components/MarkdownRenderer.jsx
tsx
Copy
Edit

```js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';
import { CodeBlock } from './CodeBlock';

export const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypePrism]}
      components={{
        code({ node, inline, className, children, ...props }) {
          if (inline) {
            return <code className={className} {...props}>{children}</code>;
          }
          return (
            <CodeBlock className={className}>
              {String(children).replace(/\n$/, '')}
            </CodeBlock>
          );
        },
      }}
    />
  );
};

```

## 5. Add Prism Theme
In client/src/index.js or _app.jsx, import a Prism theme:

tsx
Copy
Edit
import 'prism-themes/themes/prism-vsc-dark-plus.css';
Or copy one into client/src/styles/prism-theme.css.

## 6. Update Blog Page
Assuming SSR is loading .md content and passing it as props:

tsx
Copy
Edit

### client/src/pages/BlogPost.jsx

```js
import React from 'react';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const BlogPost = ({ content }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <MarkdownRenderer content={content} />
    </div>
  );
};
```

### 7. Backend: Load Markdown in Server

In your server/src/server.js, read and send the blog file:

js
Copy
Edit

```js
import fs from 'fs';
import path from 'path';

app.get('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const filePath = path.join(__dirname, '../../client/src/blog', `${id}.md`);

  if (!fs.existsSync(filePath)) return res.status(404).send('Not found');

  const content = fs.readFileSync(filePath, 'utf-8');
  res.json({ content });
});
8. Fetch Blog Content on Frontend
tsx
Copy
Edit
// client/src/pages/BlogPost.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setContent(data.content));
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <MarkdownRenderer content={content} />
    </div>
  );
};
```

## ✅ Final Touches
Make sure the SSR process (Express) routes blogs/:id to this BlogPost page.

Ensure all Markdown files live in client/src/blog.

Would you like me to auto-generate a sample .md blog file and a working route setup for this?


You said:
yes please that is great !


ChatGPT said:
Awesome! Let’s now finish wiring everything up with:

## ✅ A sample .md file

## ✅ Routing setup (react-router-dom)

## ✅ Auto-loading blog routes (like /blogs/my-first-post)

## ✅ Sample page rendering with SSR-friendly structure

## ✅ 1. Sample Blog Markdown File
Create a file at:

swift
Copy
Edit
sp-blogs/packages/client/src/blog/my-first-post.md
With this content:

md
Copy
Edit
# My First Blog Post

Welcome to my blog! Here's a code snippet:

```js
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('World'));
```
Isn't that awesome?

pgsql
Copy
Edit

## ✅ 2. React Router Setup

In your main router (e.g., `App.jsx` or `Routes.jsx`):

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogs/:id" element={<BlogPost />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}
```

✅ 3. Server-Side API (Express)
In server/src/server.js, serve markdown content:

js
Copy
Edit

```js
import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/blogs/:id', (req, res) => {
  const blogId = req.params.id;
  const filePath = path.join(
    __dirname,
    '../../client/src/blog',
    `${blogId}.md`
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Blog not found');
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  res.json({ content });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## ✅ 4. BlogPost Page Fetching Markdown

Make sure client/src/pages/BlogPost.jsx looks like this:

tsx
Copy
Edit

```js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then((data) => setContent(data.content))
      .catch(() => setContent('# 404 - Blog Not Found'));
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <MarkdownRenderer content={content} />
    </div>
  );
};
```

✅ 5. Start Everything
Start the backend:

bash
Copy
Edit
node packages/server/src/server.js
Start the frontend:

bash
Copy
Edit
npm start --workspace=client
🔗 Navigate to
bash
Copy
Edit
http://localhost:3000/blogs/my-first-post
And you should see your Markdown post rendered with:

Syntax highlighting ✅

Copy button on code blocks ✅

Blog-friendly structure ✅

Would you like pagination or a blog list (like /blogs showing all titles)?


You said:
yes please that is great!


ChatGPT said:
Perfect! Let’s now extend your setup with:

✅ Blog Listing Page (/blogs)
This will:

Read all .md files from client/src/blog

Show titles from the first # Heading

Link to /blogs/:id dynamically

✅ 1. Update Backend to List Blogs
Update your Express server (server/src/server.js) to support a blog list endpoint:

js
Copy
Edit
app.get('/api/blogs', (req, res) => {
  const blogDir = path.join(__dirname, '../../client/src/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const blogs = files.map((file) => {
    const id = path.basename(file, '.md');
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const titleMatch = content.match(/^#\s+(.*)/);
    return {
      id,
      title: titleMatch ? titleMatch[1] : id
    };
  });

  res.json(blogs);
});
✅ 2. Create Blog List Page
tsx
Copy
Edit
// client/src/pages/BlogList.jsx

```js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {blogs.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/blogs/${id}`} className="text-blue-600 hover:underline text-lg">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

✅ 3. Update Routes
Update your router config (in App.jsx or wherever routes are defined):

tsx
Copy
Edit

```js
import { BlogPost } from './pages/BlogPost';
import { BlogList } from './pages/BlogList';

<Routes>
  <Route path="/blogs" element={<BlogList />} />
  <Route path="/blogs/:id" element={<BlogPost />} />
</Routes>
```

## ✅ 4. Add a Sample Blog File (Optional)
You can create more markdown files in client/src/blog, e.g.:

hello-world.md

md
Copy
Edit
# Hello World

This is another post.

echo "Hello from the shell!"
yaml
Copy
Edit

## 🔗 Now you can visit:
- **Blog index:** [http://localhost:3000/blogs](http://localhost:3000/blogs)
- **Post details:** [http://localhost:3000/blogs/hello-world](http://localhost:3000/blogs/hello-world)

Would you like me to help add tags, dates, or author metadata from the markdown too? (e.g. using frontmatter like `--- title: ...`)

You said:
yes please.


ChatGPT said:
Great! To support blog metadata like title, date, tags, or author, we'll use YAML frontmatter at the top of your Markdown files and parse it with the gray-matter library.

✅ 1. Install gray-matter
From the root of your monorepo:

bash
Copy
Edit
npm install gray-matter
✅ 2. Add Frontmatter to Markdown Files
Here's how a Markdown blog file should look now:

client/src/blog/my-first-post.md


# My First Blog Post

This is the first blog post with frontmatter and a code example:

console.log('Hello, World!');
kotlin
Copy
Edit


## ✅ 3. Update Backend API to Parse Frontmatter

Update your `/api/blogs` and `/api/blogs/:id` endpoints in `server/src/server.js`:

```js
import matter from 'gray-matter';

// Blog list endpoint
app.get('/api/blogs', (req, res) => {
  const blogDir = path.join(__dirname, '../../client/src/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const blogs = files.map((file) => {
    const id = path.basename(file, '.md');
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { data } = matter(raw);

    return {
      id,
      title: data.title || id,
      date: data.date || null,
      tags: data.tags || [],
      author: data.author || 'Unknown'
    };
  });

  res.json(blogs);
});

// Individual blog
app.get('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const filePath = path.join(__dirname, '../../client/src/blog', `${id}.md`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Blog not found');
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(raw);

  res.json({
    id,
    content,
    ...data,
  });
});
```

## ✅ 4. Update Blog List Page to Show Metadata
tsx
Copy
Edit

### client/src/pages/BlogList.jsx

```js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-6">
        {blogs.map(({ id, title, date, author, tags }) => (
          <li key={id} className="border-b pb-4">
            <Link to={`/blogs/${id}`} className="text-blue-600 hover:underline text-xl">
              {title}
            </Link>
            <div className="text-sm text-gray-500">
              {author} · {new Date(date).toLocaleDateString()}
            </div>
            <div className="mt-1 space-x-2">
              {tags?.map(tag => (
                <span key={tag} className="inline-block text-xs bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

## ✅ 5. Update BlogPost Page to Show Metadata

###  client/src/pages/BlogPost.jsx

```js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        setContent(data.content);
        setMeta(data);
      })
      .catch(() => {
        setContent('# 404 - Blog Not Found');
      });
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        {meta.author} · {meta.date && new Date(meta.date).toLocaleDateString()}
      </div>
      <MarkdownRenderer content={content} />
      <div className="mt-6">
        {meta.tags?.map(tag => (
          <span key={tag} className="inline-block text-xs bg-gray-200 px-2 py-1 rounded mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
```

### ✅ Result

/blogs shows a paginated-like list with title, date, tags, author

/blogs/:id displays the full blog post with all the frontmatter metadata

Markdown content remains fully rendered with syntax highlighting + copy button ✅

Would you like filtering by tag, sorting by date, or pagination next?

You said:
yes please. that is awesome !


ChatGPT said:
Fantastic! Let's add:

✅ Filtering by Tag
✅ Sorting by Date
✅ Pagination (client-side)
These features will be implemented in the /blogs listing page.

🛠 Step-by-Step Implementation
✅ 1. Update Blog List State & Controls
Update client/src/pages/BlogList.jsx:

tsx
Copy
Edit

```js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const POSTS_PER_PAGE = 5;

export const BlogList = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blog list
  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setAllBlogs(data);
        setFilteredBlogs(data);
      });
  }, []);

  // Unique tags
  const allTags = Array.from(
    new Set(allBlogs.flatMap(blog => blog.tags || []))
  );

  // Filter + Sort logic
  useEffect(() => {
    let result = [...allBlogs];

    if (selectedTag) {
      result = result.filter(blog => blog.tags?.includes(selectedTag));
    }

    result.sort((a, b) => {
      const d1 = new Date(a.date);
      const d2 = new Date(b.date);
      return sortOrder === 'asc' ? d1 - d2 : d2 - d1;
    });

    setFilteredBlogs(result);
    setCurrentPage(1); // Reset to first page on filter/sort
  }, [selectedTag, sortOrder, allBlogs]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-4 flex-wrap">
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      {/* Blog List */}
      <ul className="space-y-6">
        {paginatedBlogs.map(({ id, title, date, author, tags }) => (
          <li key={id} className="border-b pb-4">
            <Link to={`/blogs/${id}`} className="text-blue-600 hover:underline text-xl">
              {title}
            </Link>
            <div className="text-sm text-gray-500">
              {author} · {new Date(date).toLocaleDateString()}
            </div>
            <div className="mt-1 space-x-2">
              {tags?.map(tag => (
                <span key={tag} className="inline-block text-xs bg-gray-200 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
```

## ✅ Summary of Features

Feature	Status ✅
Blog title, author, date from Markdown frontmatter	✅
Blog list with /blogs route	✅
Tags filter dropdown	✅
Sort by date (newest/oldest)	✅
Pagination with controls	✅
Works with SSR and Markdown	✅

Would you like the blog list to include search by title or content, or generate static blog metadata at build time for faster loading?

You said:
yes that is what I am looking for 


ChatGPT said:
Updated saved memory
Awesome! Let’s now add:

✅ Search by Title or Content
✅ (Optional) Static Blog Metadata Generation at Build Time
🔍 1. Add Search Input to BlogList
Update BlogList.jsx to include search:

➕ Add State
tsx
Copy
Edit
const [searchQuery, setSearchQuery] = useState('');
➕ Add Search Input UI
Put this just above the filters:

tsx
Copy
Edit
```js
<input
  type="text"
  placeholder="Search title or content..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="border px-2 py-1 rounded w-full sm:w-auto"
/>
```

➕ Modify Filter Logic
In the filter+sort useEffect, modify it like this:

tsx
Copy
Edit

```js
useEffect(() => {
  let result = [...allBlogs];

  // Filter by tag
  if (selectedTag) {
    result = result.filter(blog => blog.tags?.includes(selectedTag));
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    result = result.filter(blog =>
      blog.title?.toLowerCase().includes(q) ||
      blog.excerpt?.toLowerCase().includes(q)
    );
  }

  // Sort
  result.sort((a, b) => {
    const d1 = new Date(a.date);
    const d2 = new Date(b.date);
    return sortOrder === 'asc' ? d1 - d2 : d2 - d1;
  });

  setFilteredBlogs(result);
  setCurrentPage(1);
}, [selectedTag, sortOrder, allBlogs, searchQuery]);
🧠 2. Update Backend to Include excerpt in Blog List
Update /api/blogs in your server:
```

js
Copy
Edit

```js
app.get('/api/blogs', (req, res) => {
  const blogDir = path.join(__dirname, '../../client/src/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const blogs = files.map((file) => {
    const id = path.basename(file, '.md');
    const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const { data, content } = matter(raw);
    const excerpt = content.split('\n').find(line => line.trim() && !line.startsWith('#'));

    return {
      id,
      title: data.title || id,
      date: data.date || null,
      tags: data.tags || [],
      author: data.author || 'Unknown',
      excerpt: excerpt?.substring(0, 150) || ''
    };
  });

  res.json(blogs);
});
```

# ⚡ 3. (Optional) Static Metadata Generation

To precompute blog metadata at build time for fast loading (instead of real-time on every /api/blogs call), you can:

🗂 Create JSON at Build
Write a script:

scripts/generateBlogIndex.js

js
Copy
Edit

```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.resolve('packages/client/src/blog');
const outFile = path.resolve('packages/client/public/blog-index.json');

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

const blogs = files.map((file) => {
  const id = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const { data, content } = matter(raw);
  const excerpt = content.split('\n').find(l => l.trim() && !l.startsWith('#'));
  return {
    id,
    title: data.title || id,
    date: data.date || null,
    tags: data.tags || [],
    author: data.author || 'Unknown',
    excerpt: excerpt?.substring(0, 150) || '',
  };
});

fs.writeFileSync(outFile, JSON.stringify(blogs, null, 2));
console.log('✅ Blog index generated');
```

📦 Add to package.json Scripts
json
Copy
Edit
```js
"scripts": {
  "generate:blog-index": "node scripts/generateBlogIndex.js"
}
```

### 👁 Use Static Data in Frontend
Then update the frontend fetch to use:

tsx
Copy
Edit

```js
useEffect(() => {
  fetch('/blog-index.json') // static instead of /api/blogs
    .then(res => res.json())
    .then(data => {
      setAllBlogs(data);
      setFilteredBlogs(data);
    });
}, []);
```

# ✅ Recap
Feature	Status
Tag filtering	✅
Date sorting	✅
Pagination	✅
Search title/content	✅
Excerpts shown	✅
Optional static build index	✅

Would you like a full text search index (e.g. Fuse.js or lunr.js), or blog RSS feed generation too?

You said:
yes exactly add that please...

ChatGPT said:
Perfect! Let’s extend your blog with:

✅ Full Text Search Using Fuse.js
✅ RSS Feed Generation (XML)
🧠 1. Fuse.js Full-Text Search (Client-Side)
🔧 Step 1: Install fuse.js
bash
Copy
Edit
npm install fuse.js
🧠 Step 2: Update BlogList.jsx for Fuzzy Search
At the top:

tsx
Copy
Edit
import Fuse from 'fuse.js';
Replace search logic inside the useEffect like this:

tsx
Copy
Edit

```js
useEffect(() => {
  let result = [...allBlogs];

  if (selectedTag) {
    result = result.filter(blog => blog.tags?.includes(selectedTag));
  }

  if (searchQuery.trim()) {
    const fuse = new Fuse(result, {
      keys: ['title', 'excerpt'],
      threshold: 0.3,
    });
    result = fuse.search(searchQuery).map(res => res.item);
  }

  result.sort((a, b) => {
    const d1 = new Date(a.date);
    const d2 = new Date(b.date);
    return sortOrder === 'asc' ? d1 - d2 : d2 - d1;
  });

  setFilteredBlogs(result);
  setCurrentPage(1);
}, [selectedTag, sortOrder, allBlogs, searchQuery]);
```

✅ Now users can search fuzzily by title or excerpt with typos and partial matches!

📰 2. RSS Feed Generation
This allows users to subscribe to your blog with RSS readers.

📦 Step 1: Install rss
bash
Copy
Edit
npm install rss
🧰 Step 2: Create RSS Generator
scripts/generateRSS.js:

js
Copy
Edit

```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Feed } from 'rss';

const blogDir = path.resolve('packages/client/src/blog');
const outFile = path.resolve('packages/client/public/rss.xml');

const siteUrl = 'http://localhost:3000'; // replace with your domain

const feed = new Feed({
  title: 'My Blog',
  description: 'Latest posts from my blog',
  id: siteUrl,
  link: siteUrl,
  language: 'en',
  favicon: `${siteUrl}/favicon.ico`,
  feedLinks: {
    rss: `${siteUrl}/rss.xml`,
  },
  author: {
    name: 'Blog Author',
  },
});

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach((file) => {
  const id = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
  const { data, content } = matter(raw);
  const url = `${siteUrl}/blogs/${id}`;

  feed.addItem({
    title: data.title || id,
    id: url,
    link: url,
    date: new Date(data.date || Date.now()),
    description: content.split('\n').find(l => l.trim() && !l.startsWith('#'))?.substring(0, 160),
    author: [{ name: data.author || 'Unknown' }],
  });
});

fs.writeFileSync(outFile, feed.rss2());
console.log('✅ RSS feed generated');
```

📦 Step 3: Add to package.json
json
Copy
Edit

```js
"scripts": {
  "generate:rss": "node scripts/generateRSS.js"
}
```

You can now run:

bash
Copy
Edit
npm run generate:rss
Which creates public/rss.xml.

🌐 Accessible at:
bash
Copy
Edit
http://localhost:3000/rss.xml
✅ Recap
Feature	Status
Fuzzy search (Fuse.js)	✅
RSS feed XML	✅

</p>
</li>
</ul>
