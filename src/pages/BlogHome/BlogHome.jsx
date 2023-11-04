import { useContext, useEffect } from "react";
import { BlogPreview } from "../../components/blog/BlogPreview";
import {
  useLoaderData,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import { Toaster, toast } from "sonner";
import { ToastContext } from "../../contexts/ToastContext";

import "../../main.css";
import { AuthContext } from "../../contexts/AuthContext";
import {
  toastBackgroundColors,
  toastTextColors,
} from "../../assets/styles/toastStyles";

export function BlogHome() {
  // eslint-disable-next-line no-unused-vars
  const [onBlogPage, theme] = useOutletContext();
  const { toasts, addToast, removeToasts } = useContext(ToastContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const blogEntries = useLoaderData();
  const { setAuth } = useContext(AuthContext);

  const isLoggedIn = searchParams.get("isLoggedIn") === "true";
  const isSignedUp = searchParams.get("isSignedUp") === "true";

  useEffect(() => {
    if (isLoggedIn) {
      addToast("Login success");
      setAuth(true);
      setSearchParams({});
    } else if (isSignedUp) {
      addToast("Signup success");
      setAuth(true);
      setSearchParams({});
    }
  }, []);

  // colors for sonner banners
  const backgroundColors = toastBackgroundColors(theme);
  const textColors = toastTextColors(theme);

  useEffect(() => {
    if (toasts.length > 0) {
      toast.success(toasts.at(-1));
      removeToasts();
    }
  }, [toasts]);

  return (
    <>
      <main className=" flex min-h-screen flex-col gap-6 bg-gray-100 px-6 py-9 text-slate-900 dark:bg-gray-800 md:px-8 lg:px-10 xl:px-16">
        <h2 className="text-center text-3xl font-bold capitalize dark:text-slate-100">
          blog entries
        </h2>
        <section
          className={`grid flex-1 auto-rows-max ${
            blogEntries.length > 0
              ? "grid-cols-[repeat(auto-fill,minmax(275px,1fr))]  xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]"
              : ""
          } gap-6 px-3 dark:text-slate-100   md:gap-10  md:px-4`}
        >
          {blogEntries.length > 0 ? (
            blogEntries.map((blogEntry) => (
              <BlogPreview key={blogEntry._id} blogEntry={blogEntry} />
            ))
          ) : (
            <p className="text-center text-lg">No blog entries yet...</p>
          )}
        </section>
        <Toaster
          toastOptions={{
            style: {
              backgroundColor: `${backgroundColors}`,
              color: `${textColors}`,
              border: "none",
            },
            duration: 5000,
          }}
        />
      </main>
    </>
  );
}
