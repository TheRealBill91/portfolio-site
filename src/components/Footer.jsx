import { memo } from "react";
import { SocialLinks } from "./portfolio/SocialLinks";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 80,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      ease: "ease-in",
    },
  },
};

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
        {/* <p>Email: emailplaceholder</p> */}
        <SocialLinks />
      </footer>
    </motion.div>
  );
});
