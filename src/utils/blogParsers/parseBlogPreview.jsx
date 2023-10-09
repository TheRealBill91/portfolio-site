import parse from "html-react-parser";

export function parseBlogPreview(blogContent) {
  const parsed = parse(blogContent, {
    replace: (domNode) => {
      if (domNode.name === "h2") {
        return <></>;
      }
    },
  });
  const blogPreviewText = parsed[2].props.children;
  return blogPreviewText;
}
