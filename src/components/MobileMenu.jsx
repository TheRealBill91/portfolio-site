import { useEffect, useState } from "react";

export function MobileMenu({ toggleMobileMenu }) {
  const [mounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <div className="height-mobile-dynamic fixed right-0 top-0 z-10 flex   w-screen flex-col items-center justify-evenly  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
        <ul className="absolute z-10  flex h-96   flex-col justify-evenly gap-12 text-3xl capitalize text-gray-700 dark:text-slate-100 ">
          <a
            href="#about"
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } transition-all delay-100 duration-500 `}
          >
            <li className=" " onClick={toggleMobileMenu}>
              about me
            </li>
          </a>

          <a
            href="#myWork"
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } transition-all delay-300 duration-500 `}
          >
            <li className=" " onClick={toggleMobileMenu}>
              my work
            </li>
          </a>
          <a
            href="#mySkills"
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } transition-all delay-500 duration-500 `}
          >
            <li className=" " onClick={toggleMobileMenu}>
              my skills
            </li>
          </a>
          <a
            href="#contact"
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            } transition-all delay-700 duration-500 `}
          >
            <li
              className=" "
              style={{ transitionDelay: "1500ms" }}
              onClick={toggleMobileMenu}
            >
              contact
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
