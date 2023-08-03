import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";
import { NavBar } from "./NavBar";

export function Header(props) {
  const { mobileMenuVisible, toggleMobileMenu, toggleTheme, theme } = props;

  return (
    <>
      {mobileMenuVisible ? <MobileMenu toggleMobileMenu={toggleMobileMenu} /> : null}

      <header className="content-left flex h-20  items-center justify-between bg-gray-300 pl-1 pr-5 text-left shadow-sm outline-slate-950 dark:bg-gray-600 sm:h-24 sm:pr-7">
        <h1 className=" self-center p-4 text-4xl font-medium italic text-slate-900 dark:text-slate-100 sm:text-5xl ">
          BC
        </h1>

        <div className="flex items-center gap-7 text-slate-900 dark:text-slate-100">
          <button
            title="light theme toggle"
            onClick={toggleTheme}
            className="h-8 w-8 sm:h-12 sm:w-12"
          >
            {theme === "dark" ? (
              <Icon
                className="flex h-8 w-8 items-center justify-center transition-colors fill-gray-100 sm:h-10 sm:w-10 sm:hover:fill-slate-800 sm:dark:hover:fill-gray-200"
                id="dark"
              />
            ) : (
                <Icon
                  className="fill-slate-gray-100 h-8  w-8 transition-colors  hover:text-slate-800 sm:h-10 sm:w-10 "
                  id="light"
                />
            )}
          </button>

          <MobileMenuBtn
            mobileMenuVisible={mobileMenuVisible}
            toggleMobileMenu={toggleMobileMenu}
          >
            {!mobileMenuVisible ? (
              <Icon
                id="open"
                aria-label="open mobile menu"
                className="h-8 w-8 "
              />
            ) : (
              <Icon
                id="close"
                aria-label="close mobile menu"
                className="h-8 w-8 text-gray-700 dark:text-slate-100"
              />
            )}
          </MobileMenuBtn>
          {!mobileMenuVisible ? (
            <NavBar toggleMobileMenu={toggleMobileMenu} />
          ) : null}
        </div>
      </header>
    </>
  );
}
