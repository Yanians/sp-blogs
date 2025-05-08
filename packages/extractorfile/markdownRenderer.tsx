import * as React from "react";
import { render } from "./mark";

interface MARKDOWNPROPS {
    markdownText:any;
    [key:string]:any;
}

const MarkdownRenderer = (markdownText:MARKDOWNPROPS) => {
  const [parsedData, setParsedData] = React.useState<any>(null);

  React.useEffect(() => {

    if (markdownText) {
      const config = {
        getHeaders: true,
        getDescription: true,
        getContent: true,
      };
      setParsedData(render(markdownText, config) as any);
    }
  }, [markdownText]);

  if (!parsedData) return <p>Loading...</p>;

  return (
    <div className="markdown-container">
      <h1>{parsedData?.title}</h1>
      <p><strong>Description:</strong> {parsedData?.description}</p>
      <p><strong>Authors:</strong> {parsedData?.headers?.authors.join(", ")}</p>
      <div dangerouslySetInnerHTML={{ __html: parsedData?.content }} />
    </div>
  );
};

export default MarkdownRenderer;

