import { Icon } from "./Icon";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

export function SocialLinks() {
  const linkedinID = "linkedin";
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <article className="flex justify-center gap-8 pt-3 sm:py-4 ">
        <motion.div variants={cardVariants}>
          <a
            href="https://github.com/TheRealBill91"
            target="_blank"
            rel="noreferrer"
            aria-label="Github profile link"
          >
            <Icon
              className="h-9 w-9 text-slate-900 transition-colors  dark:text-gray-100 dark:hover:text-gray-200 sm:h-10 sm:w-10 lg:hover:text-slate-700 lg:hover:dark:text-gray-300"
              id="GithubLogo"
            />
          </a>
        </motion.div>
        <motion.div variants={cardVariants}>
          <a
            href="https://www.linkedin.com/in/william-cummings-jr-b915b2203"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin profile link"
          >
            <Icon
              className="h-9 w-9 text-slate-900 transition-colors  dark:text-gray-100 dark:hover:text-gray-200 sm:h-10 sm:w-10 lg:hover:text-slate-700 lg:hover:dark:text-gray-300"
              id={linkedinID}
            />
          </a>
        </motion.div>
      </article>
    </motion.div>
  );
}
