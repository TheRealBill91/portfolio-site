export function parseParagraphLinks(header, para) {
  // Split the content into paragraphs based on <p></p>
  const paragraphs = para.split("&nbsp;");
  // Create an array to hold the elements for each paragraph
  let paraElements = [];
  // Loop through each paragraph
  for (let i = 0; i < paragraphs.length; i++) {
    // Split the paragraph into sections based on <a> tags
    const sections = paragraphs[i].split(/(<a.*?\/a>)/g);
    // Create an array to hold the elements for this paragraph
    let sectionElements = [];
    // Loop through each section
    for (let j = 0; j < sections.length; j++) {
      // Check if this section is a piece of text or an anchor tag
      if (sections[j].startsWith("<a")) {
        // This section is an anchor tag, so we'll extract the href, title, and link text and create a React element for it
        const href = sections[j].match(/href="(.*?)"/)[1];
        const title = sections[j].match(/title="(.*?)"/)[1];
        const linkText = sections[j].match(/>(.*?)</)[1];
        // Add the link element to the sectionElements array
        sectionElements.push(
          <a
            className="underline decoration-slate-900 decoration-2 underline-offset-[5px] visited:decoration-slate-600"
            href={href}
            title={title}
            key={j}
          >
            {linkText}
          </a>
        );
      } else {
        // This section is a piece of text, so we'll add it directly to the sectionElements array
        sectionElements.push(sections[j]);
      }
    }
    // Add this paragraph's elements to the paraElements array, wrapped in a <p> tag with some bottom margin
    paraElements.push(
      <p className="mb-4" key={i}>
        {sectionElements}
      </p>
    );
  }
  return paraElements;
}
