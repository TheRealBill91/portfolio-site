import { useLoaderData } from "react-router-dom";
import { BackButton } from "../../components/blog/BackButton";
import { BlogContent } from "../../components/blog/BlogContent";
import { BlogCommentsLayout } from "../../components/blog/BlogCommentsLayout";
import { BlogCommentForm } from "../../components/blog/BlogCommentForm";
import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { LoginOrSignout } from "../../components/LoginOrSignup";
import { useScroll, motion, useSpring } from "framer-motion";

export function BlogPost() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
     offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [postData, commentsData] = useLoaderData();
  const datePublished = postData.formatted_date_stamp;
  const { auth } = useContext(AuthContext);

  const navTo = "/blog";
  return (
    <>
      <main className="flex flex-1 flex-col bg-gray-100/50 px-5 py-10 text-slate-900 dark:bg-slate-800 lg:px-10  ">
        <BackButton navTo={navTo} />
        <motion.div
          className="fixed left-0 right-0 top-0 h-1 origin-left transform bg-slate-700 dark:bg-slate-300  "
          style={{ scaleX }}
        ></motion.div>
        <div
          className="my-3 mt-10 flex flex-col gap-3 self-center
         px-2 py-6 text-center dark:text-slate-100"
        >
          <h2 className="text-3xl font-semibold">{postData.title}</h2>
          <p className="max-w-[130px] self-center rounded-md border border-slate-900 px-2 py-1 shadow-md shadow-slate-200 dark:border-slate-100 dark:shadow-slate-700">
            {datePublished}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <BlogContent ref={ref} blogContentHTML={postData.content} />
          </div>

          <div className="mb-2 mt-3 flex flex-col items-center px-3    lg:min-w-[600px] lg:self-center  ">
            <div className="w-full self-start border-t border-gray-400"></div>
          </div>
          {auth ? <BlogCommentForm /> : <LoginOrSignout />}
          {!auth && (
            <div className="mb-3 mt-3 flex flex-col items-center px-3    lg:min-w-[600px] lg:self-center  ">
              <div className="w-full self-start border-t border-gray-400"></div>
            </div>
          )}
          <BlogCommentsLayout blogComments={commentsData} />
        </div>
      </main>
    </>
  );
}
