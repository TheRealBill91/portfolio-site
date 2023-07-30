import { Icon } from "./Icon";

export function BackToTop({ mobileMenuVisible }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        id="backToTop"
        onClick={scrollToTop}
        className={`${
          mobileMenuVisible ? "opacity-0" : ""
        } fixed bottom-5 right-5 z-10 rounded-full bg-gray-500 p-2 shadow-lg active:ring-2`}
        title="Back To Top"
      >
        <Icon id="up-arrow" className="h-7 w-7 fill-gray-200 " />
      </button>
    </>
  );
}
