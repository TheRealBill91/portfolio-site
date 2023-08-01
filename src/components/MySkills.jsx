import { Icon } from "./Icon";

export function MySkills() {
  return (
    <>
      <h2
        id="mySkills"
        className="py-2 text-center text-3xl font-bold text-slate-900 dark:text-slate-100 "
      >
        My Skills
      </h2>
      <div className="flex px-8  ">
        <ul className="flex animate-skillsCarousel justify-between gap-8 px-11 text-center">
          <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 px-8 shadow-sm outline-2  outline-black dark:bg-gray-600 dark:text-gray-100 dark:shadow-slate-500/20">
            <Icon id="HTML5" className="h-10 w-10  pb-2" />
            <p>HTML</p>
          </li>
          <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-gray-100 dark:shadow-slate-500/20 ">
            <Icon id="CSS3" className=" h-10 w-10 pb-2" />
            <p>CSS</p>
          </li>
          <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 text-slate-900  shadow-sm dark:bg-gray-600 dark:text-gray-100 dark:shadow-slate-500/20">
            <Icon id="JavaScript" className="h-10 w-10 pb-2" />
            <p className="">JavaScript</p>
          </li>
          <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-gray-100 dark:shadow-slate-500/20">
            <Icon id="React" className="h-10 w-10 pb-2" />
            <p className="">React</p>
          </li>
          <li className="flex flex-col items-center gap-1 rounded-md bg-white p-4 px-8 text-slate-900 shadow-sm dark:bg-gray-600 dark:text-gray-100 dark:shadow-slate-500/20 ">
            <Icon id="Git" className="h-10 w-10 pb-2" />
            <p className="">Git</p>
          </li>
        </ul>
      </div>
    </>
  );
}
