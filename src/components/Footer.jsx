import { memo } from "react";
import { SocialLinks } from "./SocialLinks";

export const Footer = memo(function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-3  bg-gray-300 p-6 pb-10 text-slate-900 dark:bg-gray-600 dark:text-slate-100 sm:gap-4"
    >
      <h2 className="pb-2 pt-3 text-center text-3xl font-bold sm:text-4xl">
        Contact Me
      </h2>
      <p className="mx-2  text-left text-lg leading-7 sm:mx-6 sm:text-xl">
        If your interested in working with someone <em>dedicated</em> to web
        development and providing value to customers, please get in touch.
      </p>
      {/* <p>Email: emailplaceholder</p> */}
      <SocialLinks />
    </footer>
  );
});
