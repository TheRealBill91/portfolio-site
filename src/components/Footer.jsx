import { memo } from "react";
import { SocialLinks } from "./portfolio/SocialLinks";
import { motion } from "framer-motion";

import { cardVariants } from "../utils/FramerVariants/PortfolioVariants";

export const Footer = memo(function Footer() {
  return (
    <motion.div
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
    >
      <footer
        id="contact"
        className="flex flex-col items-center gap-3   bg-gray-300 p-6 pb-10 text-slate-900 dark:bg-gray-600 dark:text-slate-100 sm:gap-4"
      >
        <motion.div variants={cardVariants}>
          <h2 className="pb-2 pt-3 text-center text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>
        </motion.div>
        <motion.div variants={cardVariants}>
          <p className="px-2 text-center text-lg leading-7 sm:mx-6 sm:text-xl lg:mx-2">
            If your interested in working with someone <em>dedicated</em> to web
            development and providing value to customers, please get in touch.
          </p>
        </motion.div>
        <SocialLinks />
      </footer>
    </motion.div>
  );
});
