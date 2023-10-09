export function LoadingAnimation({ loadHomePage, theme }) {
  return (
    <div className={`${theme}`}>
      <main
        className={`${theme} height-mobile-dynamic flex w-full flex-col   items-center justify-center overflow-x-hidden bg-gray-200/60 font-rubik dark:bg-gray-800`}
      >
        <h2
          onAnimationEnd={loadHomePage}
          className="origin-center text-9xl  italic text-slate-900 motion-safe:animate-loadingScreen    dark:text-slate-100"
        >
          BC
        </h2>
      </main>
    </div>
  );
}
