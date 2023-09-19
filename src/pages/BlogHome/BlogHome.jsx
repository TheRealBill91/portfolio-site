import { createContext, useEffect, useState } from "react";
import { BlogPreview } from "../../components/blog/BlogPreview";
import { Footer } from "../../components/Footer";
import { BounceAnimation } from "../../components/BounceAnimation";

export const AuthContext = createContext();

export function BlogHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogEntries, setBlogEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchBlogEntries() {
      setIsLoading(true);
      try {
        const resp = await fetch(`http://localhost:3000/client/blog_entries`, {
          signal: abortController.signal,
          mode: "cors",
        });
        if (!resp.ok) throw resp;
        setBlogEntries(await resp.json());
      } catch (err) {
        if (!err.name === "AbortError") {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogEntries();

    return () => abortController.abort();
  }, []);

  if (isLoading) return <BounceAnimation />;
  if (error) throw error;

  return (
    <>
      <main className="flex min-h-screen flex-col gap-5 bg-gray-200/60 px-6 py-9 dark:bg-gray-800">
        <h2 className="text-center text-3xl font-bold capitalize dark:text-slate-100">
          blog entries
        </h2>
        <section className="grid flex-1 auto-rows-max grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6  px-4  dark:text-slate-100">
          {blogEntries.map((blogEntry) => (
            <BlogPreview key={blogEntry._id} blogEntry={blogEntry} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
