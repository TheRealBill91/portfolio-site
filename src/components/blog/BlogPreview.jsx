import { BlogPreviewContent } from "./BlogPreviewContent";
import { Link } from "react-router-dom";
export function BlogPreview({ blogEntry }) {
  return (
    <Link to={blogEntry.id}>
      <article className="hover: flex  flex-col justify-between gap-2 rounded-lg border-[2px] border-solid border-white bg-white p-4 px-5 text-slate-900 shadow-[5px_5px_9px_-2px_rgba(79,79,79,0.27)]  shadow-gray-200 hover:border-[2px] hover:border-solid hover:border-slate-900 hover:transition-all dark:border-gray-600 dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-900/30  dark:hover:border-slate-100  lg:p-5 lg:px-6  ">
        <h3 className=" line-clamp-2 text-2xl font-bold">{blogEntry.title}</h3>
        <BlogPreviewContent blogContent={blogEntry.content} />
        <div className="flex justify-between border-t-[1px] border-t-gray-200 pt-2">
          <div className="flex gap-1">
            <p>{blogEntry.author.first_name}</p>
            <p>{blogEntry.author.last_name}</p>
          </div>

          <p>{blogEntry.formatted_date_stamp}</p>
        </div>
      </article>
    </Link>
  );
}
