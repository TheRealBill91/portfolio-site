import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";

export function Header(props) {
  const { mobileMenuVisible, toggleMobileMenu, toggleTheme, theme } = props;
  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      ) : null}
      <header className="content-left flex  h-20 items-center justify-between bg-gray-300 pl-1 pr-5 text-left shadow-sm outline-slate-950 dark:bg-gray-600">
        <h1 className="animate-headerLogoFade self-center p-4 text-4xl font-medium italic text-slate-900 dark:text-slate-100 ">
          BC
        </h1>

        <div className="flex items-center gap-5 text-slate-900 dark:text-slate-100">
          <button
            title="light theme toggle"
            onClick={toggleTheme}
            className="h-8 w-8"
          >
            {theme === "dark" ? (
              <Icon
                className="flex h-8 w-8 items-center justify-center"
                id="light"
              />
            ) : (
              <Icon className="h-8 w-8" id="dark" />
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
        </div>
      </header>
    </>
  );
}
