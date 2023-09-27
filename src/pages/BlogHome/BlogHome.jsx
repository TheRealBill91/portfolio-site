import { createContext, useContext, useEffect, useState } from "react";
import { BlogPreview } from "../../components/blog/BlogPreview";
import { Footer } from "../../components/Footer";
import { BounceAnimation } from "../../components/BounceAnimation";
import {
  useLoaderData,
  useOutletContext,
  useRouteLoaderData,
} from "react-router-dom";
import { Toaster, toast } from "sonner";
import { ToastContext } from "../../contexts/ToastContext";

import "../../main.css";

export function BlogHome() {
  const [auth, setAuth, onBlogPage, theme] = useOutletContext();
  const { toasts, setToasts } = useContext(ToastContext);
  const [error, setError] = useState(null);
  const blogEntries = useLoaderData();

  const backgroundColor =
    theme === "dark" ? "rgb(75 85 99)" : "rgb(248 250 252)";
  const textColor = theme === "dark" ? "#F1F5F9" : "#0F172A";

  useEffect(() => {
    if (toasts.length > 0) {
      toast.success(toasts.at(-1));
      setToasts([]);
    }
  }, [toasts]);

  return (
    <>
      <main className=" flex min-h-screen flex-col gap-6 bg-gray-200/60 px-6 py-9 text-slate-900 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-bold capitalize dark:text-slate-100">
          blog entries
        </h2>
        <section
          className={`grid flex-1 auto-rows-max ${
            blogEntries.length > 0
              ? "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
              : ""
          } gap-6 px-4  dark:text-slate-100  md:gap-10`}
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
              backgroundColor: `${backgroundColor}`,
              color: `${textColor}`,
              border: "none",
            },
            duration: 5000,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
