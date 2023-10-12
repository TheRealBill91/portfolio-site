import { Icon } from "./Icon";

export function BackToTop() {
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
        className={`z-1 fixed bottom-5 right-5  rounded-full bg-gray-500 p-2 shadow-md ring-gray-900 transition-colors hover:bg-gray-600 active:ring-2 dark:shadow-slate-500/20 dark:ring-gray-100 dark:hover:shadow-lg lg:hidden  `}
        title="Back To Top"
      >
        <Icon
          id="up-arrow"
          className="h-7 w-7 fill-gray-200 text-gray-200 sm:h-10 sm:w-10 "
        />
      </button>
    </>
  );
}
