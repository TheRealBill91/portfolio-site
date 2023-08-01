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

export const MyWork = memo(function MyWork() {
  const GITHUB_SVG_ID = "GithubLogo";
  const OPEN_IN_NEW_ID = "open-in-new";
  return (
    <section id="myWork" className="p-4">
      <h2 className="text-black-600 pb-4 text-center text-3xl font-bold text-slate-900 dark:text-gray-100">
        My Work
      </h2>

      <div className="flex flex-col gap-8">
        <article className=" shadow-slate-400/45  rounded-md  bg-white bg-gradient-to-t from-white from-30% to-gray-400/70 shadow-md dark:rounded-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 ">
          <img
            className="rounded-md rounded-b-none px-0"
            src={timelesslg}
            srcSet={`${timelessmd} 767w, ${timelesssml} 500w `}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
            alt="watch e-commerce store home page"
          ></img>
          <div className=" flex flex-col  gap-6 p-6 pt-4 dark:rounded-b-md ">
            <p className=" text-center text-lg text-slate-600 dark:text-gray-300">
              {" "}
              An e-commerce watch store built using Vite & React Router
            </p>
            <div className="flex items-center justify-between  px-2 text-slate-900 dark:text-gray-100">
              <h3 className="text-center text-2xl ">Timeless </h3>
              <div className="flex gap-5">
                <a
                  className="group"
                  aria-label="Github project link"
                  href="https://github.com/TheRealBill91/shopping-cart"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    className=" group-hover: fill-white-400 h-8 w-8 rounded-full  "
                    id={GITHUB_SVG_ID}
                  />
                </a>
                <a
                  aria-label="open in browser icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://timelesswatches.netlify.app/"
                >
                  <Icon className="h-8 w-8" id={OPEN_IN_NEW_ID} />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="shadow-slate-400/45 rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70  shadow-md dark:rounded-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20">
          <img
            src={battleshiplg}
            srcSet={`${battleshipmd} 767w, ${battleshipsml} 500w `}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
            alt="battleship game home page"
            className="rounded-md rounded-b-none"
          ></img>
          <div className=" flex flex-col flex-nowrap content-center gap-6 p-6 dark:rounded-b-md ">
            <p className="text-center text-lg text-slate-600 dark:text-gray-300 ">
              Classic battleship game built with HTML, CSS, and JavaScript
            </p>
            <div className="flex items-center justify-between gap-6  text-slate-900 dark:text-gray-100 ">
              <h3 className="text-center text-2xl capitalize">battleship </h3>
              <div className="flex gap-5">
                <a
                  aria-label="Github project link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/TheRealBill91/Battleship-Odin-Project"
                >
                  <Icon className="h-8 w-8" id={GITHUB_SVG_ID} />
                </a>
                <a
                  aria-label="open in browser icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://therealbill91.github.io/Battleship-Odin-Project/"
                >
                  <Icon className="h-8 w-8" id={OPEN_IN_NEW_ID} />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="shadow-slate-400/45 rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70  shadow-md dark:rounded-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20">
          <img
            src={weatherlg}
            srcSet={`${weathermd} 767w, ${weathersml} 500w `}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
            alt="weather forecast website home page"
            className="rounded-md rounded-b-none"
          ></img>
          <div className=" flex flex-col flex-nowrap content-center gap-6 p-6 dark:rounded-b-md ">
            <p className="text-center text-lg text-slate-600 dark:text-gray-300 ">
              A weather forecast website with searchable locations and different
              weather metrics
            </p>
            <div className="flex items-center justify-between gap-6  text-slate-900 dark:text-gray-100 ">
              <h3 className="text-center text-2xl">Weather Wise </h3>
              <div className="flex gap-5">
                <a
                  aria-label="Github project link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/TheRealBill91/Weather-Forecast-Site"
                >
                  <Icon className="h-8 w-8" id={GITHUB_SVG_ID} />
                </a>
                <a
                  aria-label="open in browser icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://therealbill91.github.io/Weather-Forecast-Site/"
                >
                  <Icon className="h-8 w-8" id={OPEN_IN_NEW_ID} />
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="shadow-slate-400/45 rounded-md bg-white bg-gradient-to-t from-white from-30% to-gray-200/70 shadow-md dark:bg-gray-600 dark:bg-gradient-to-t dark:from-gray-600 dark:to-gray-600 dark:shadow-slate-500/20 ">
          <img
            className="rounded-md rounded-b-none"
            alt="todo list website home page"
            src={todolistlg}
            srcSet={`${todolistmd} 767w, ${todolistsml} 500w`}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px"
          ></img>
          <div className=" flex flex-col gap-6 p-6">
            <p className="text-center text-lg text-slate-600 dark:text-gray-300">
              A feature rich, minimalist designed to-do list
            </p>
            <div className="flex items-center justify-between px-1 text-slate-900 dark:text-gray-100">
              <h3 className="text-center text-2xl">To-do list</h3>
              <div className="flex gap-5">
                <a
                  aria-label="Github project link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/TheRealBill91/Todo-List"
                >
                  <Icon className="h-8 w-8" id={GITHUB_SVG_ID} />
                </a>
                <a
                  aria-label="open in browser icon"
                  target="_blank"
                  rel="noreferrer"
                  href="https://therealbill91.github.io/Todo-List/"
                >
                  <Icon className="h-8 w-8" id={OPEN_IN_NEW_ID} />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
});
