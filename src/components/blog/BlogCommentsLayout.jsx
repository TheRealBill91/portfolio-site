import { parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";
import { LikeButton } from "./LikeButton";

export function BlogCommentsLayout({ blogComments }) {
  return (
    <section className=" lg:min-w-[65ch] lg:self-center">
      <h2 className="mx-3 mb-3 text-2xl font-semibold text-slate-900">
        Comments
      </h2>
      <div className="flex flex-col gap-6 px-3 py-2">
        {blogComments.map((comment) => (
          <article
            className="flex flex-col   rounded-lg bg-gray-100 p-4 py-5 shadow-md shadow-slate-300"
            key={comment._id}
          >
            <div className="">
              <span className="mb-2 mr-3 text-slate-600">bboy91</span>
              <span className="text-slate-900">{comment.content}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-slate-600">
                {formatDistanceToNow(parseISO(comment.timestamp))} ago
              </p>
              <LikeButton comment={comment} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
