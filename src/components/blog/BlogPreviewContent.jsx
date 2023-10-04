import parse from "html-react-parser";

export function BlogPreviewContent({ blogContent }) {
  const parsed = parse(blogContent, {
    replace: (domNode) => {
      if (domNode.name === "h2") {
        return <></>;
      }
    },
  });
  const blogPreviewText = parsed[2].props.children;
  return (
    <>
      <p className="line-clamp-2">{blogPreviewText}</p>
    </>
  );
}
