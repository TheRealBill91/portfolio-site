export function BlogPreview({ blogEntry }) {
  console.log(blogEntry);
  return (
    <article className="hover: flex min-w-[300px] flex-col justify-start gap-2 rounded-lg border-[2px] border-solid border-white bg-white p-4 text-slate-900 shadow-[5px_5px_9px_-2px_rgba(79,79,79,0.27)] shadow-gray-200 hover:border-[2px] hover:border-solid hover:border-slate-900 hover:transition-all dark:bg-gray-600  dark:text-slate-100 dark:shadow-slate-900/30  ">
      <h3 className=" text-2xl font-bold">{blogEntry.title}</h3>
      <p className="line-clamp-2  text-slate-600">
        {blogEntry.content}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-1 ">
          <p>{blogEntry.author.first_name}</p>
          <p>{blogEntry.author.last_name}</p>
        </div>

        <p>{blogEntry.formatted_date_stamp}</p>
      </div>
    </article>
  );
}
