export function NavBar() {
  return (
    <nav className="hidden  sm:block">
      <ul className="flex gap-6 text-lg capitalize">
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
      </ul>
    </nav>
  );
}
