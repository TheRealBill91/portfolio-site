import { parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";
import { LikeButton } from "./LikeButton";

export function BlogCommentsLayout({ blogComments }) {
  return (
    <section className="lg:self-left my-4 max-w-prose px-3 pl-1 sm:flex sm:flex-col sm:items-center  sm:self-center  lg:min-w-[65ch] lg:pl-2">
      <h2 className="mx-2 mb-3  text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:self-start">
        Comments
      </h2>
      <div className="flex flex-col gap-6 px-3 py-2 lg:pl-0">
        {blogComments.length > 0 ? (
          blogComments.map((comment) => (
            <article
              className="flex max-w-[600px] flex-col rounded-lg bg-gray-200 p-4 py-5 shadow-md shadow-slate-300 dark:bg-gray-300 dark:shadow-slate-600 lg:min-w-[62ch]"
              key={comment._id}
            >
              <div className="">
                <span className="mb-2 mr-3 text-slate-600 dark:text-slate-700">
                  {comment.author.first_last_initial ||
                    comment.author.local.username}
                </span>
                <span className="text-slate-900">{comment.content}</span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3 ">
                <p className="text-slate-600  dark:text-slate-700">
                  {formatDistanceToNow(parseISO(comment.timestamp))} ago
                </p>
                <LikeButton comment={comment} />
              </div>
            </article>
          ))
        ) : (
          <p className="text-slate-900 dark:text-slate-100">
            No comments yet...
          </p>
        )}
      </div>
    </section>
  );
}
