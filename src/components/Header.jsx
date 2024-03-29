import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./mobilemenus/MobileMenu";
import { Icon } from "./Icon";
import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";
import { NavBar } from "./NavBar/NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

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

  const navigate = useNavigate();
  const { addToast } = useContext(ToastContext);
  const { setAuth } = useContext(AuthContext);

  const signOut = async () => {
    // only toggle mobile menu if screen size is mobile
    const smallScreen = window.matchMedia("(max-width: 640px)").matches;
    if (smallScreen) {
      toggleMobileMenu();
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/v1/client/auth/logout`,
        {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw response;
      }
      addToast("Log out successful");
      setAuth(false);
      navigate("/blog");
    } catch (error) {
      console.log("Something wrong with fetch method: " + error);
    }
  };

  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu
          onBlogPage={onBlogPage}
          toggleMobileMenu={toggleMobileMenu}
          signOut={signOut}
        />
      ) : null}

      <header className={` bg-gray-400/70 shadow-sm dark:bg-gray-500 `}>
        <div className="content-left h-18 relative  flex  items-center justify-between border-none   pl-1   text-left  outline-none  sm:h-20 md:px-10 md:py-4  lg:px-12 ">
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
              <NavBar
                toggleMobileMenu={toggleMobileMenu}
                onBlogPage={onBlogPage}
                signOut={signOut}
              />
            ) : null}
          </div>
          <motion.nav
            animate={mobileMenuVisible ? "open" : "closed"}
            className={`${
              mobileMenuVisible ? " right-12 z-10" : ""
            } absolute right-4 top-[1.2rem] fill-slate-900 text-slate-900`}
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
        </div>
      </header>
    </>
  );
}
