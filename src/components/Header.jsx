import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";
import { NavBar } from "./NavBar";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path fill="grey" strokeWidth="3.3" strokeLinecap="round" {...props} />
);

export function Header(props) {
  const {
    mobileMenuVisible,
    toggleMobileMenu,
    toggleTheme,
    theme,
    onBlogPage,
  } = props;

  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu
          onBlogPage={onBlogPage}
          toggleMobileMenu={toggleMobileMenu}
        />
      ) : null}

      <header
        className={`${
          mobileMenuVisible ? "" : ""
        }content-left relative flex h-20  items-center justify-between bg-gray-300 pl-1 pr-5 text-left shadow-sm outline-slate-950 dark:bg-gray-600 sm:h-24 sm:pr-7`}
      >
        <h1 className=" self-center p-4 text-4xl font-medium italic text-slate-900 dark:text-slate-100 sm:text-5xl ">
          BC
        </h1>

        <div className="absolute right-[75px] flex items-center gap-7 text-slate-900 dark:text-slate-100">
          <button
            title="light theme toggle"
            onClick={toggleTheme}
            className="h-8 w-8 sm:h-12 sm:w-12"
          >
            {theme === "dark" ? (
              <Icon
                className="flex h-8 w-8 items-center justify-center fill-gray-100 transition-colors sm:h-10 sm:w-10 sm:hover:fill-slate-800 sm:dark:hover:fill-gray-200"
                id="dark"
              />
            ) : (
              <Icon
                className=" h-8  w-8 transition-colors  hover:text-slate-800 sm:h-10 sm:w-10 "
                id="light"
              />
            )}
          </button>

          {!mobileMenuVisible ? (
            <NavBar toggleMobileMenu={toggleMobileMenu} />
          ) : null}
        </div>
        <motion.nav
          animate={mobileMenuVisible ? "open" : "closed"}
          className={`${
            mobileMenuVisible ? " right-12 z-10" : ""
          } absolute right-4 top-6 fill-slate-900 text-slate-900`}
        >
          <MobileMenuBtn
            mobileMenuVisible={mobileMenuVisible}
            toggleMobileMenu={toggleMobileMenu}
          >
            <svg
              className="mr-0 stroke-slate-900 dark:stroke-slate-100"
              width="27"
              height="27"
              viewBox="0 0 23 23"
            >
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </MobileMenuBtn>
        </motion.nav>
      </header>
    </>
  );
}
