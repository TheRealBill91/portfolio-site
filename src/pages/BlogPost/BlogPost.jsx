import { useLoaderData } from "react-router-dom";
import { BackButton } from "../../components/blog/BackButton";
import { BlogContent } from "../../components/blog/BlogContent";
import { BlogCommentsLayout } from "../../components/blog/BlogCommentsLayout";

export function BlogPost() {
  const [postData, commentsData] = useLoaderData();
  const datePublished = postData.formatted_date_stamp;

  commentsData.map((comment) => {
    console.log("each comments data" + comment.content);
  });

  const navTo = "/blog";
  return (
    <>
      <main className="flex flex-1 flex-col px-5 py-7 text-slate-900">
        <BackButton navTo={navTo} />
        <div
          className="my-3 mt-10 flex flex-col gap-3
         self-center px-2 py-6 text-center"
        >
          <h2 className="text-3xl font-semibold">{postData.title}</h2>
          <p className="max-w-[130px] self-center rounded-md border border-black px-2 py-1 shadow-md shadow-slate-200">
            {datePublished}
          </p>
        </div>
        <BlogContent blogContentHTML={postData.content} />
        <BlogCommentsLayout blogComments={commentsData} />
      </main>
    </>
  );
}
