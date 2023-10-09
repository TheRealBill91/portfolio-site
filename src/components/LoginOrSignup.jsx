import { Link } from "react-router-dom";

export function LoginOrSignout() {
  return (
    <div className="px-3 py-2">
      <article className="flex flex-col items-center gap-3 rounded-lg p-3  dark:text-slate-100 ">
        <p className="self-center text-2xl capitalize">
          to join the conversation
        </p>
        <div className="mt-2 flex flex-col gap-4">
          <Link
            className="rounded-lg border border-solid border-slate-900 p-3 text-center capitalize dark:border-slate-100"
            to={"/blog/signin"}
            relative="path"
          >
            sign in
          </Link>
          <p className="text-center capitalize">or</p>
          <Link
            className="rounded-lg border border-solid border-slate-900 p-3 text-center capitalize dark:border-slate-100"
            to={"/blog/signup"}
          >
            sign up
          </Link>
        </div>
      </article>
    </div>
  );
}
