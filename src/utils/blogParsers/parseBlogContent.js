// This function parses the blog content HTML and returns an array of objects
// Each object has a title and a content property
export function parseBlogContent(blogContentHTML) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(blogContentHTML, "text/html");

  const allElements = doc.body.getElementsByTagName("*");

  for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];
    if (
      element.tagName.toLowerCase() !== "h2" &&
      element.tagName.toLowerCase() !== "p" &&
      element.tagName.toLowerCase() !== "a"
    ) {
      element.parentNode.removeChild(element);
    } else if (element.tagName.toLowerCase() === "p") {
      // Remove <br> tags within <p> elements
      element.innerHTML = element.innerHTML.replace(/<br\s*\/?>/gi, "");
    } else if (element.tagName.toLowerCase() === "a") {
      // Remove any attributes other than href and title
      for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attr = element.attributes[i];
        if (attr.name !== "href" && attr.name !== "title") {
          element.removeAttribute(attr.name);
        }
      }
    }
  }

  const cleanedHtml = doc.body.innerHTML;

  // Split the HTML string into an array of strings
  const sections = cleanedHtml.split("<h2>").slice(1); // remove the first empty string
  return sections;
}
