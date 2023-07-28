import { Icon } from "./Icon";
import timelesslg from "../assets/photos/timeless-images/timeless-img-lg.png";
import timelessmd from "../assets/photos/timeless-images/timeless-img-md.png";
import timelesssml from "../assets/photos/timeless-images/timeless-img-md.png";
import weatherlg from "../assets/photos/weather-forecast-imgs/weather-img-lg.png";
import weathermd from "../assets/photos/weather-forecast-imgs/weather-img-md.png";
import weathersml from "../assets/photos/weather-forecast-imgs/weather-img-sml.png";

export function MyWork() {
  const GITHUB_SVG_ID = "GithubLogo";
  const OPEN_IN_NEW_ID = "open-in-new";
  return (
    <section className=" p-4 outline outline-black">
      <h2 className="pb-4 text-center text-xl font-bold">My Work</h2>
      <div className="flex flex-col gap-8">
        <article className="shadow-md ">
          <img
            className="hover"
            src={timelesslg}
            srcSet={`${timelessmd} 767w, ${timelesssml} 500w `}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
            alt="watch e-commerce store home page"
          ></img>
          <div className="outline-grey flex flex-col gap-5 p-6 pt-4 outline-1 ">
            <p className="text-center text-gray-600">
              {" "}
              An e-commerce watch store built using Vite & React Router
            </p>
            <div className="flex items-center justify-evenly gap-4">
              <h3 className="text-center text-lg ">Timeless </h3>
              <div className="flex gap-4">
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
        <article className="shadow-md">
          <img
            src={weatherlg}
            srcSet={`${weathermd} 767w, ${weathersml} 500w `}
            sizes="(max-width: 600px) 500px, (max-width: 900px) 767px, 1138px "
            alt="weather forecast website home page"
          ></img>
          <div className=" flex flex-col flex-nowrap content-center gap-4 p-6 outline">
            <p className="text-center text-gray-600 ">
              A weather forecast website with searchable locations and different
              weather metrics
            </p>
            <div className="flex items-center justify-center gap-4 ">
              <h3 className="text-center text-lg">Weather Forecast </h3>
              <a
                aria-label="Github profile link"
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
        </article>
        <article>
          {/*   <image alt="project 3 image placeholder">
          Project 3 image placeholder
        </image> */}
          <div className="outline-grey flex flex-col gap-4 p-6 outline">
            <p className="text-center">
              Project description Project description Project description
              Project description Project description
            </p>
            <div className="flex items-center justify-center gap-4">
              <h3 className="text-center text-lg">Project 3</h3>
              <a
                aria-label="Github profile link"
                target="_blank"
                rel="noreferrer"
              >
                <Icon className="h-8 w-8" id={GITHUB_SVG_ID} />
              </a>
              <a aria-label="open in browser icon" target="_blank">
                <Icon className="h-8 w-8" id={OPEN_IN_NEW_ID} />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
