import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";
import { useState } from "react";
import { Fade } from "./Fade";

export function Header(props) {
  const { mobileMenuVisible, toggleMobileMenu, toggleTheme, theme } = props;
  const [visible, setVisibility] = useState(true);

  const onVisibilityChange = () => {
    setVisibility(!visible);
  };

  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      ) : null}
      <header className="content-left flex h-20  items-center justify-between bg-gray-300 pl-1 pr-5 text-left shadow-sm outline-slate-950 dark:bg-gray-600 sm:h-24 sm:pr-7">
        <h1 className=" self-center p-4 text-4xl font-medium italic text-slate-900 dark:text-slate-100 sm:text-5xl ">
          BC
        </h1>

        <div className="flex items-center gap-5 text-slate-900 dark:text-slate-100">
          <button
            title="light theme toggle"
            onClick={toggleTheme}
            className="h-8 w-8 sm:h-12 sm:w-12"
          >
            {theme === "dark" ? (
              <Icon
                className="flex h-8 w-8 items-center justify-center sm:h-12 sm:w-12"
                id="dark"
              />
            ) : (
              <Icon className="h-8 w-8" id="light" />
            )}
          </button>
          <MobileMenuBtn
            mobileMenuVisible={mobileMenuVisible}
            toggleMobileMenu={toggleMobileMenu}
            onVisibilityChange={onVisibilityChange}
            visible={visible}
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
        </div>
      </header>
    </>
  );
}
