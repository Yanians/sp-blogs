import * as React from "react";
import { useParams } from "react-router-dom";
import MarkdownElement from "../blog/components/markdownElement";

export function slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // remove non-word characters
      .trim()
      .replace(/\s+/g, '-')       // replace spaces with -
  }

const BlogDetail = (props:any) => {
    const {sSrData } = props;
  const { title } = useParams();
  console.log('I am in the blog details page: ',title)
  const post = sSrData.find((find:any)=>find.title === title);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <h4>by {post.authors?.find((author:string)=>author)}</h4>
      <p>{post.description}</p>
      {/* <div dangerouslySetInnerHTML={{ __html: marked(post.outputRender) }} /> */}
      <MarkdownElement renderedMarkdown={post.outputRender} />
    </div>
  );
};

export default BlogDetail;