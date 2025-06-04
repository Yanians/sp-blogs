
import matter from "gray-matter";
import { marked } from "marked";


export function getHeaders(markdown) {
    const { data } = matter(markdown);
    return {
      title: data.title || "Untitled",
      description: data.description || "",
      authors: data.authors || [],
    };
  }
  
  // Function to extract description
  export function getDescription(markdown) {
    const { data } = matter(markdown);
    return data.description || "";
  }
  
  // Function to extract main content
  export function getContent(markdown) {
    const { content } = matter(markdown);
    return marked.parse(content);
  }
  
  // Render function that takes a config and applies parsing
  export function render(markdown, config = {}) {
    return {
      headers: config.getHeaders ? getHeaders(markdown) : null,
      description: config.getDescription ? getDescription(markdown) : null,
      content: config.getContent ? getContent(markdown) : null,
    };
  }