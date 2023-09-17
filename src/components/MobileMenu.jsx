import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      ease: "easeIn",
    },
  },
};

export function MobileMenu({ toggleMobileMenu, onBlogPage }) {
  const [mounted, setMount] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      <div className="height-mobile-dynamic fixed right-0 top-0 z-10 flex   w-screen flex-col items-center justify-evenly  bg-gray-200/70 backdrop-blur-lg dark:bg-gray-600/70">
        <ul className="absolute z-10  flex h-96   flex-col justify-evenly gap-14 text-3xl capitalize text-gray-700 dark:text-slate-100 ">
          {!onBlogPage ? (
            <>
              <a
                href="#about"
                className={`${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                } transition-all delay-100 duration-500 `}
              >
                <li className=" " onClick={toggleMobileMenu}>
                  about me
                </li>
              </a>
              <a
                href="#myWork"
                className={`${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                } transition-all delay-300 duration-500 `}
              >
                <li className=" " onClick={toggleMobileMenu}>
                  my work
                </li>
              </a>
              <a
                href="#mySkills"
                className={`${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                } transition-all delay-500 duration-500 `}
              >
                <li className=" " onClick={toggleMobileMenu}>
                  my skills
                </li>
              </a>
              <a
                href="#contact"
                className={`${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-0"
                } transition-all delay-700 duration-500 `}
              >
                <li
                  className=" "
                  style={{ transitionDelay: "1500ms" }}
                  onClick={toggleMobileMenu}
                >
                  contact
                </li>
              </a>{" "}
              <AnimatePresence>
                <Link onClick={toggleMobileMenu} to="/bloghome">
                  <motion.div
                    key={location.pathname}
                    initial={itemVariants.initial}
                    exit={itemVariants.exit}
                    animate={itemVariants.animate}
                  >
                    Blog
                  </motion.div>
                </Link>
              </AnimatePresence>
            </>
          ) : (
            <AnimatePresence>
              <Link onClick={toggleMobileMenu} to={"/"}>
                <motion.div
                  key={location.pathname}
                  initial={itemVariants.initial}
                  exit={itemVariants.exit}
                  animate={{
                    ...itemVariants.animate,
                    transition: { delay: 0.1, duration: 0.5 },
                  }}
                >
                  Portfolio
                </motion.div>
              </Link>
              <Link onClick={toggleMobileMenu} to={"/signup"}>
                <motion.div
                  key={location.pathname}
                  initial={itemVariants.initial}
                  exit={itemVariants.exit}
                  animate={{
                    ...itemVariants.animate,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                >
                  Sign Up
                </motion.div>
              </Link>
              <Link onClick={toggleMobileMenu} to={"/login"}>
                <motion.div
                  key={location.pathname}
                  initial={itemVariants.initial}
                  exit={itemVariants.exit}
                  animate={{
                    ...itemVariants.animate,
                    transition: { delay: 0.5, duration: 0.5 },
                  }}
                >
                  Login
                </motion.div>
              </Link>
            </AnimatePresence>
          )}
        </ul>
      </div>
    </>
  );
}
