export function parseParagraphLinks(header, para) {
  // Split the paragraph into sections based on <a> tags
  const sections = para.split(/(<a.*?\/a>)/g);

  // Create an array to hold the elements for each paragraph
  let paraElements = [];

  // Loop through each section
  for (let i = 0; i < sections.length; i++) {
    // Check if this section is a piece of text or an anchor tag
    if (sections[i].startsWith("<a")) {
      // This section is an anchor tag, so we'll extract the href, title, and link text and create a React element for it
      const href = sections[i].match(/href="(.*?)"/)[1];
      const title = sections[i].match(/title="(.*?)"/)[1];
      const linkText = sections[i].match(/>(.*?)</)[1];

      // Add the link element to the paraElements array
      paraElements.push(
        <a
          className="underline decoration-slate-900 decoration-2 underline-offset-[5px] visited:decoration-slate-600"
          key={i}
          href={href}
          title={title}
        >
          {linkText}
        </a>
      );
    } else {
      // This section is a piece of text, so we'll add it directly to the paraElements array
      paraElements.push(sections[i]);
    }
  }
  return paraElements;
}
