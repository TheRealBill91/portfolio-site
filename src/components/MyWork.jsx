import { Icon } from "./Icon";
import timelesslg from "../assets/photos/timeless-images/timeless-img-lg.png";
import timelessmd from "../assets/photos/timeless-images/timeless-img-md.png";
import timelesssml from "../assets/photos/timeless-images/timeless-img-sml.png";
import weatherlg from "../assets/photos/weather-forecast-imgs/weather-img-lg.png";
import weathermd from "../assets/photos/weather-forecast-imgs/weather-img-md.png";
import weathersml from "../assets/photos/weather-forecast-imgs/weather-img-sml.png";
import todolistlg from "../assets/photos/todo-list-images/todo-list-lg.png";
import todolistmd from "../assets/photos/todo-list-images/todo-list-md.png";
import todolistsml from "../assets/photos/todo-list-images/todo-list-sml.png";
import battleshiplg from "../assets/photos/battleship-images/battleship-lg.png";
import battleshipmd from "../assets/photos/battleship-images/battleship-md.png";
import battleshipsml from "../assets/photos/battleship-images/battleship-sml.png";

import { memo } from "react";
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

export const MyWork = memo(function MyWork() {
  const GITHUB_SVG_ID = "GithubLogo";
  const OPEN_IN_NEW_ID = "open-in-new";
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <section id="myWork" className="xl: p-4 xl:p-6 xl:px-10">
        <motion.div
          variants={cardVariants}
          whileInView="onscreen"
          initial="offscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-black-600 pb-4 text-center text-3xl font-bold text-slate-900 dark:text-gray-100 sm:text-4xl">
            My Work
          </h2>
        </motion.div>
        <div className=" flex  flex-col gap-8 sm:mx-8 lg:grid lg:grid-cols-2 xl:mx-10">
          <motion.div
            variants={cardVariants}
            whileInView="onscreen"
            initial="offscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <article className="shadow-slate-400/45 rounded-md bg-white   bg-gradient-to-t from-white  from-30%  to-gray-400/70 shadow-md dark:rounded-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 sm:mx-10 sm:pl-0 sm:pr-0  sm:pt-0 lg:mx-0 lg:flex lg:flex-col ">
              <img
                className="rounded-md rounded-b-none px-0 sm:w-full sm:rounded-b-md lg:h-[300px] lg:w-full lg:object-cover lg:object-top "
                src={timelesslg}
                srcSet={`${timelessmd} 767w, ${timelesssml} 500w `}
                sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
                alt="watch e-commerce store home page"
              ></img>

              <div className=" flex flex-col gap-6 p-6 pt-4 dark:rounded-b-md sm:mt-3 sm:gap-8 xl:h-[168px] ">
                <p className=" text-center text-lg text-slate-600 dark:text-gray-300 sm:text-xl">
                  {" "}
                  An e-commerce watch store built using Vite & React Router
                </p>
                <div className=" flex items-center justify-between px-2  text-slate-900 dark:text-gray-100 sm:px-6 ">
                  <h3 className="text-center text-2xl sm:text-3xl ">
                    Timeless{" "}
                  </h3>
                  <div className="flex gap-5 sm:gap-7">
                    <a
                      className="group"
                      aria-label="Github project link"
                      href="https://github.com/TheRealBill91/shopping-cart"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon
                        className="group-hover: fill-white-400 h-8 w-8 rounded-full  text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700 "
                        id={GITHUB_SVG_ID}
                      />
                    </a>
                    <a
                      aria-label="open in browser icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://timelesswatches.netlify.app/"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={OPEN_IN_NEW_ID}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileInView="onscreen"
            initial="offscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <article className="shadow-slate-400/45 h-full rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70 shadow-md dark:rounded-md  dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 sm:mx-10 sm:p-6 sm:pb-0 sm:pl-0 sm:pr-0 sm:pt-0 lg:mx-0">
              <img
                src={battleshiplg}
                srcSet={`${battleshipmd} 767w, ${battleshipsml} 500w `}
                sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
                alt="battleship game home page"
                className="rounded-md rounded-b-none sm:rounded-b-md lg:h-[300px] lg:w-full lg:object-cover lg:object-top"
              ></img>
              <div className=" flex flex-col flex-nowrap content-center gap-6 p-6 pt-4 dark:rounded-b-md sm:mt-3 sm:gap-8 ">
                <p className="text-center text-lg text-slate-600 dark:text-gray-300 sm:text-xl ">
                  Classic battleship game built with HTML, CSS, and JavaScript
                </p>
                <div className="flex items-center justify-between gap-6  text-slate-900 dark:text-gray-100 sm:px-6 ">
                  <h3 className="text-center text-2xl capitalize sm:text-3xl">
                    battleship{" "}
                  </h3>
                  <div className="flex gap-5 sm:gap-7">
                    <a
                      aria-label="Github project link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/TheRealBill91/Battleship-Odin-Project"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={GITHUB_SVG_ID}
                      />
                    </a>
                    <a
                      aria-label="open in browser icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://therealbill91.github.io/Battleship-Odin-Project/"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={OPEN_IN_NEW_ID}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <article className="shadow-slate-400/45 rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70 shadow-md dark:rounded-md  dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 sm:mx-10 sm:p-6 sm:pb-0 sm:pl-0 sm:pr-0 sm:pt-0 lg:mx-0">
              <img
                src={weatherlg}
                srcSet={`${weathermd} 767w, ${weathersml} 500w `}
                sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
                alt="weather forecast website home page"
                className="rounded-md rounded-b-none sm:rounded-b-md lg:h-[300px] lg:w-full lg:object-cover lg:object-top"
              ></img>
              <div className=" flex flex-col flex-nowrap content-center gap-6 p-6 dark:rounded-b-md sm:mt-3 sm:gap-8 ">
                <p className="text-center text-lg text-slate-600 dark:text-gray-300 sm:text-xl ">
                  A weather forecast website with searchable locations and
                  different weather metrics
                </p>
                <div className="flex items-center justify-between gap-6  text-slate-900 dark:text-gray-100 sm:px-6 ">
                  <h3 className="text-center text-2xl sm:text-3xl">
                    Weather Wise{" "}
                  </h3>
                  <div className="flex gap-5 sm:gap-7">
                    <a
                      aria-label="Github project link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/TheRealBill91/Weather-Forecast-Site"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={GITHUB_SVG_ID}
                      />
                    </a>
                    <a
                      aria-label="open in browser icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://therealbill91.github.io/Weather-Forecast-Site/"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={OPEN_IN_NEW_ID}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <article className="shadow-slate-400/45 flex h-full flex-1 flex-col rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70 shadow-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 sm:mx-10 sm:p-6 sm:pb-0 sm:pl-0 sm:pr-0 sm:pt-0 lg:mx-0 ">
              <img
                className="rounded-md rounded-b-none sm:rounded-b-md lg:h-[300px] lg:w-full lg:object-cover lg:object-top "
                alt="todo list website home page"
                src={todolistlg}
                srcSet={`${todolistmd} 767w, ${todolistsml} 500w`}
                sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px"
              ></img>
              <div className=" flex flex-1 flex-col gap-6 p-6 sm:mt-3 sm:gap-8 lg:h-[176px] lg:justify-around">
                <p className="text-center text-lg text-slate-600 dark:text-gray-300 sm:text-xl ">
                  A feature rich, minimalist designed to-do list
                </p>
                <div className="flex items-center justify-between px-1 text-slate-900 dark:text-gray-100 sm:px-6">
                  <h3 className="text-center text-2xl sm:text-3xl">
                    To-do list
                  </h3>
                  <div className="flex gap-5">
                    <a
                      aria-label="Github project link"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/TheRealBill91/Todo-List"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={GITHUB_SVG_ID}
                      />
                    </a>
                    <a
                      aria-label="open in browser icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://therealbill91.github.io/Todo-List/"
                    >
                      <Icon
                        className="h-8 w-8 text-slate-900 transition-colors hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-300 sm:h-10 sm:w-10 lg:hover:text-slate-700"
                        id={OPEN_IN_NEW_ID}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
});
