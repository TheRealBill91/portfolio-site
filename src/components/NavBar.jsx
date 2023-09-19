import { Link } from "react-router-dom";
export function NavBar({ onBlogPage }) {
  return (
    <nav className="hidden  sm:block">
      <ul className="flex gap-6 text-lg capitalize">
        {!onBlogPage ? (
          <>
            <a
              href="#about"
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 dark:hover:text-gray-200 "
            >
              about me
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:group-hover:bg-gray-200 "></li>
            </a>
            <a
              href="#myWork"
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100"
            >
              my work
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </a>
            <a
              href="#mySkills"
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
            >
              my skills
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </a>
            <a
              href="#contact"
              className="group text-slate-900  transition hover:text-slate-800 dark:text-gray-100 "
            >
              contact
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </a>
            <Link
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
              to={"/bloghome"}
            >
              blog
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </Link>
          </>
        ) : (
          <>
            <Link
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
              to={"/bloghome"}
            >
              Blog
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </Link>
            <Link
              to={"/bloghome/signup"}
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
            >
              Sign Up
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </Link>
            <Link
              to={"/bloghome/signin"}
              className="group   text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
            >
              Sign in
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </Link>
            <div className="border-r border-gray-500"></div>
            <Link
              className="group text-slate-900 transition hover:text-slate-800 dark:text-gray-100 "
              to={"/"}
            >
              Portfolio
              <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
