import { Icon } from "../Icon";
import { motion } from "framer-motion";
import { cardVariants } from "../../utils/FramerVariants/PortfolioVariants";

export function MySkills() {
  return (
    <motion.div
      initial="offscreen"
      viewport={{ once: true }}
      whileInView="onscreen"
    >
      <motion.div variants={cardVariants}>
        <h2
          id="mySkills"
          className="[:target:text-color-green-100] py-2 text-center text-3xl font-bold text-slate-900 target:outline-black dark:text-slate-100 sm:mt-3 sm:text-4xl "
        >
          My Skills
        </h2>
      </motion.div>
      <motion.div variants={cardVariants}>
        <div className="outline-1px flex w-full overflow-hidden rounded-md px-8 pt-2 sm:w-3/4 lg:w-4/5 ">
          <ul className="flex origin-center animate-skillsCarousel  justify-between gap-8 px-11 text-center sm:animate-skillsCarouselSm lg:animate-skillsCarouselLg">
            <li className="flex min-w-[115px] flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900   shadow-sm  dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-10 lg:min-w-[135px]">
              <Icon id="HTML5" className="h-10 w-10  pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">HTML</p>
            </li>
            <li className="dark:shadow-slate-500/20sm:gap-2 flex min-w-[115px] flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-slate-100 sm:gap-2 sm:p-6 lg:min-w-[135px] ">
              <Icon id="CSS3" className=" h-10 w-10 pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">CSS</p>
            </li>
            <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 text-slate-900  shadow-sm dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-8 md:px-6">
              <Icon
                id="JavaScript"
                className="h-10 w-10 pb-2 sm:h-12 sm:w-12"
              />
              <p className="sm: text-lg">JavaScript</p>
            </li>
            <li className="flex min-w-[115px] flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-10 lg:min-w-[135px]">
              <Icon id="React" className="h-10 w-10 pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">React</p>
            </li>
            <li className="flex min-w-[115px] flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-10 lg:min-w-[135px] ">
              <Icon id="Git" className="h-10 w-10 pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">Git</p>
            </li>
            <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 px-6 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-8 lg:min-w-[135px] ">
              <Icon id="Tailwind" className="h-10 w-10 pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">Tailwind</p>
            </li>
            <li className="flex min-w-[115px] flex-col items-center gap-1 rounded-md bg-white p-4 px-6 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-slate-100 dark:shadow-slate-500/20 sm:gap-2 sm:p-6 sm:px-8 lg:min-w-[135px] ">
              <Icon id="NodeJS" className="h-10 w-10 pb-2 sm:h-12 sm:w-12" />
              <p className="sm: text-lg">Node.js</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
