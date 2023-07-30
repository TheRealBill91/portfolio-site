import { MobileMenuBtn } from "./MobileMenuBtn";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "./Icon";

export function Header({ mobileMenuVisible, toggleMobileMenu }) {
  return (
    <>
      {mobileMenuVisible ? (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      ) : null}
      <header className="content-left flex  h-20 items-center justify-center bg-gray-200 text-left shadow-sm outline-slate-950">
        <h1 className="self-center p-4 text-xl ">Billy Cummings</h1>

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
              className="h-8 w-8 text-gray-700"
            />
          )}
        </MobileMenuBtn>
      </header>
    </>
  );
}
