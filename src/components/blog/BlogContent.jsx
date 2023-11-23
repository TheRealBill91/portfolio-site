import { parseBlogContent } from "../../utils/blogParsers/parseBlogContent";
import { BlogContentSection } from "./BlogContentSection";
import DOMPurify from "dompurify";
import { forwardRef } from "react";

export const BlogContent = forwardRef(function BlogContent(
  { blogContentHTML },
  ref
) {
  const cleanHTML = DOMPurify.sanitize(blogContentHTML);
  const sections = parseBlogContent(cleanHTML);

  // Map over the array to create a React component for each pair
  const components = sections.map((section, i) => {
    let [title, content] = section.split("</h2>");
    // Remove <p> and </p> tags from the content
    content = content.replace(/<\/?p>/g, "");
    return <BlogContentSection key={i} header={title} para={content} />;
  });

  return (
    <div ref={ref} className="max-w-prose self-center px-3">
      {components}
    </div>
  );
});
