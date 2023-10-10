import { useFetcher } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Icon } from "../Icon";

export function BlogCommentForm() {
  const fetcher = useFetcher();
  const serverValidationError = fetcher.data;

  let formRef = useRef();

  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);

  return (
    <section className="py-3 lg:min-w-[65ch] lg:self-center ">
      <h2 className="mx-4 mb-1 text-2xl font-semibold capitalize text-slate-900 dark:text-slate-100 ">
        add a comment
      </h2>
      <fetcher.Form ref={formRef} method="post" className="p-3 lg:min-w-[65ch]">
        <fieldset
          className="flex gap-3 "
          aria-disabled={fetcher.state !== "idle"}
        >
          <input type="hidden" name="intent" value={"postcomment"}></input>
          <input type="hidden" name="state" value={fetcher.state}></input>
          <input
            className="min-w-[82%] rounded-lg border border-solid border-slate-900 bg-gray-100 p-2 lg:min-w-[90%]"
            type="text"
            name="content"
            minLength={2}
            maxLength={500}
            required
          ></input>
          <button
            className="rounded-md border border-solid border-slate-900 px-3 py-1 dark:border-slate-100"
            type="submit"
          >
            <Icon
              className="h-4 w-4 text-slate-900 dark:fill-slate-100"
              id="send"
            />
          </button>
        </fieldset>
        {serverValidationError && (
          <span className="mt-2 inline-block text-red-600">
            {serverValidationError.content}
          </span>
        )}
      </fetcher.Form>
    </section>
  );
}
