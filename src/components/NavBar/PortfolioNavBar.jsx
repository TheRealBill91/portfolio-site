import { Link } from "react-router-dom";

export function PortfolioNavBar() {
  return (
    <>
      <a
        href="#about"
        className="group text-slate-900 transition hover:text-slate-800 dark:text-slate-100 dark:hover:text-slate-200 "
      >
        about me
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:group-hover:bg-slate-200 "></li>
      </a>
      <a
        href="#myWork"
        className="group text-slate-900 transition hover:text-slate-800 dark:text-slate-100"
      >
        my work
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-slate-100 dark:group-hover:bg-slate-200 "></li>
      </a>
      <a
        href="#mySkills"
        className="group text-slate-900 transition hover:text-slate-800 dark:text-slate-100 "
      >
        my skills
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-slate-100 dark:group-hover:bg-slate-200 "></li>
      </a>
      <a
        href="#contact"
        className="group text-slate-900  transition hover:text-slate-800 dark:text-slate-100 "
      >
        contact
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-slate-100 dark:group-hover:bg-slate-200 "></li>
      </a>
      <Link
        className="group text-slate-900 transition hover:text-slate-800 dark:text-slate-100 "
        to={"/blog"}
      >
        blog
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-slate-100 dark:group-hover:bg-slate-200 "></li>
      </Link>
    </>
  );
}
