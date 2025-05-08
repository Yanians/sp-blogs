// //@ts-nocheck
// import * as React from "react";

// interface BlogPostProviderProps {
//   setBlogPost:React.Dispatch<React.SetStateAction<[] | {}>>
//   blogPost:any;
//   children:React.ReactNode;
//   [key:string]:any;
// }

//  function BlogPostProvider(props:BlogPostProviderProps):{contextValue:any}{
   
//    const { children, defaultBlogPost,} = props;
//    const [ blogPost, setBlogPost ] = React.useState<null | BlogPostProviderProps>(null);

//    React.useEffect(()=>{
//       if(typeof defaultBlogPost !== null){
//            setBlogPost(defaultBlogPost);
//       }
//    },[blogPost]);

//   console.log(blogPost)

//    const contextValue = React.useMemo(() => {
//       return { blogPost, setBlogPost}
//    },[blogPost]);

//    return (
//       <div>{children}</div>
//    )
// }

// export function UseBlogPost(){
//    return React.useContext(ContextBlogPost).blogPost;
// }

// export default BlogPostProvider;

