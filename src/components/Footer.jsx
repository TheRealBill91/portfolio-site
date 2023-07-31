import { memo } from "react";
import { SocialLinks } from "./SocialLinks";

export const Footer = memo(function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-2 bg-gray-300 p-6 pb-10 text-slate-900 dark:bg-gray-600 dark:text-slate-100"
    >
      <h2 className="pb-2 pt-3 text-center text-2xl font-bold">Contact Me</h2>
      <p className="mx-2 text-left leading-7">
        If your interested in working with someone <em>dedicated</em> to web
        development and providing value to customers, please get in touch.
      </p>
      {/* <p>Email: emailplaceholder</p> */}
      <SocialLinks />
    </footer>
  );
});
