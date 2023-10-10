export async function blogEntriesLoader() {
  const blogEntries = await fetch(
    `${import.meta.env.VITE_API_URL}/client/blog_entries`,
    {
      mode: "cors",
    }
  );
  const blogEntriesData = await blogEntries.json();
  return blogEntriesData;
}

export async function blogPostLoader({ params }) {
  const postFetchDetails = {
    url: `${import.meta.env.VITE_API_URL}/client/${params.postId}`,
    options: {
      mode: "cors",
    },
  };
  const commentsFetchDetails = {
    url: `${import.meta.env.VITE_API_URL}/client/${params.postId}/blog_comments`,
    options: {
      mode: "cors",
      credentials: "include",
    },
  };
  const blogPostData = (
    await Promise.all([
      fetch(postFetchDetails.url, postFetchDetails.options),
      fetch(commentsFetchDetails.url, commentsFetchDetails.options),
    ])
  ).map((r) => r.json());

  const [postData, commentsData] = await Promise.all(blogPostData);

  return [postData.blog, commentsData];
}
