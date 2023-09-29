export async function blogEntriesLoader() {
  const blogEntries = await fetch(`http://localhost:3000/client/blog_entries`, {
    mode: "cors",
  });
  const blogEntriesData = await blogEntries.json();
  return blogEntriesData;
}
