import { parseBlogPreview } from "../../utils/blogParsers/parseBlogPreview";
import DOMPurify from "dompurify";

export function BlogPreviewContent({ blogContent }) {
  const cleanHTML = DOMPurify.sanitize(blogContent);
  const blogPreviewText = parseBlogPreview(cleanHTML);
  return (
    <>
      <p className="line-clamp-2 text-slate-700 dark:text-slate-200">{blogPreviewText[0]}</p>
    </>
  );
}
