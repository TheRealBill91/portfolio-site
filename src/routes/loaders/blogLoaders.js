export async function blogEntriesLoader() {
  const blogEntries = await fetch(`http://localhost:3000/client/blog_entries`, {
    mode: "cors",
  });
  const blogEntriesData = await blogEntries.json();
  return blogEntriesData;
}

export async function blogPostLoader({ params }) {
  const postFetchDetails = {
    url: `http://localhost:3000/client/${params.postId}`,
    options: {
      mode: "cors",
    },
  };
  const commentsFetchDetails = {
    url: `http://localhost:3000/client/${params.postId}/blog_comments`,
    options: {
      mode: "cors",
    },
  };
  const blogPostData = (
    await Promise.all([
      fetch(postFetchDetails.url, postFetchDetails.options),
      fetch(commentsFetchDetails.url, commentsFetchDetails.options),
    ])
  ).map((r) => r.json());

  const [postData, commentsData] = await Promise.all(blogPostData);
  console.log(commentsData);

  return [postData.blog, commentsData];
}
