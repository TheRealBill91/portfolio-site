import { useFetcher } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Icon } from "../Icon";

export function LikeButton({ comment }) {
  const fetcher = useFetcher();

  const { auth } = useContext(AuthContext);

  // optimistically update the like status

  // if there is `formData` then it is posting to the action
  const liked = fetcher.formData
    ? fetcher.formData.get("liked") === "yes"
    : // if its not posting to the action, use the record's value
      comment.liked;

  let upvoteCount;
  if (auth && fetcher.formData) {
    upvoteCount = fetcher.formData.get("liked") === "yes" && comment.upvote + 1;
  } else if (!fetcher.formData) {
    upvoteCount = comment.upvote;
  }

  return (
    <fetcher.Form method="post" action="">
      <input type="hidden" name="authStatus" value={auth}></input>
      <input type="hidden" name="commentId" value={comment._id}></input>
      <input type="hidden" name="intent" value={"likecomment"}></input>
      <div className="flex items-center gap-3">
        {upvoteCount > 0 ? (
          <p className="text-slate-600 dark:text-slate-700">{upvoteCount}</p>
        ) : null}
        <button
          className={`${
            liked
              ? `rounded-lg border border-transparent bg-slate-700 p-2 text-white `
              : "rounded-lg border border-solid border-slate-700 bg-transparent p-2 text-slate-900"
          }flex items-center justify-center`}
          type="submit"
          name="liked"
          value={liked ? "no" : "yes"}
        >
          <Icon
            className={`${
              liked ? "fill-gray-100 " : "fill-slate-700"
            } h-4 w-4  `}
            id={"thumbs-up"}
          />
        </button>
      </div>
    </fetcher.Form>
  );
}
