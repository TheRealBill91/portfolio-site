import { Icon } from "../Icon";
import { motion } from "framer-motion";
import { socialLinksVariants } from "../../utils/FramerVariants/PortfolioVariants";

export function SocialLinks() {
  const linkedinID = "linkedin";
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <article className="flex justify-center gap-8 pt-3 sm:py-4 ">
        <motion.div variants={socialLinksVariants}>
          <a
            href="https://github.com/TheRealBill91"
            target="_blank"
            rel="noreferrer"
            aria-label="Github profile link"
          >
            <Icon
              className="h-9 w-9 text-slate-900 transition-colors  dark:text-slate-100 dark:hover:text-gray-200 sm:h-10 sm:w-10 lg:hover:text-slate-700 lg:hover:dark:text-gray-300"
              id="GithubLogo"
            />
          </a>
        </motion.div>
        <motion.div variants={socialLinksVariants}>
          <a
            href="https://www.linkedin.com/in/william-cummings-jr-b915b2203"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin profile link"
          >
            <Icon
              className="h-9 w-9 text-slate-900 transition-colors  dark:text-slate-100 dark:hover:text-gray-200 sm:h-10 sm:w-10 lg:hover:text-slate-700 lg:hover:dark:text-gray-300"
              id={linkedinID}
            />
          </a>
        </motion.div>
      </article>
    </motion.div>
  );
}
