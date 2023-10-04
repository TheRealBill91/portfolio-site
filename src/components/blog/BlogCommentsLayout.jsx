import { parseISO } from "date-fns";
import { formatDistanceToNow, parse } from "date-fns/esm";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function BlogCommentsLayout({ blogComments }) {
  const isAuth = useContext(AuthContext);
  console.log(blogComments);
  return (
    <section>
      <h2 className="mx-3 mb-3 text-2xl font-semibold text-slate-900">
        Comments
      </h2>
      <div className="flex flex-col gap-6 px-3 py-2">
        {blogComments.map((comment) => (
          <article
            className="flex flex-col   rounded-lg bg-gray-100 p-4 py-5 shadow-slate-300"
            key={comment.id}
          >
            <div className="flex gap-3">
              <span className="mb-2 font-medium">
                {comment.author.username}
              </span>
              <p>{comment.content}</p>
            </div>
            <div className="flex gap-3">
              {console.log(typeof comment.timestamp, comment.timestamp)}
              <p>
                {typeof comment.timestamp !== "undefined" &&
                  formatDistanceToNow(parseISO(comment.timestamp))}{" "}
                ago
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
