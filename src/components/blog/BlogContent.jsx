import { BlogContentSection } from "./BlogContentSection";

export function BlogContent({ blogContentHTML }) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(blogContentHTML, "text/html");

  const allElements = doc.body.getElementsByTagName("*");

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    if (
      element.tagName.toLowerCase() !== "h2" &&
      element.tagName.toLowerCase() !== "p"
    ) {
      element.parentNode.removeChild(element);
    } else if (element.tagName.toLowerCase() === "p") {
      // Remove <br> tags within <p> elements
      element.innerHTML = element.innerHTML.replace(/<br\s*\/?>/gi, "");
    }
  }

  const cleanedHtml = doc.body.innerHTML;

  // Split the HTML string into an array of strings
  const sections = cleanedHtml.split("<h2>").slice(1); // remove the first empty string
  // Map over the array to create a React component for each pair
  const components = sections.map((section, i) => {
    let [title, content] = section.split("</h2>");
    // Remove <p> and </p> tags from the content
    content = content.replace(/<\/?p>/g, "");
    return <BlogContentSection key={i} header={title} para={content} />;
  });

  return <div className="max-w-prose  self-center px-3">{components}</div>;
}
