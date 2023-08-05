export function LoadingAnimation({ loadHomePage, theme }) {
  return (
    <div className={`${theme}`}>
      <main
        className={`${theme} flex min-h-screen w-full flex-col   items-center justify-center overflow-x-hidden bg-gray-200/60 font-rubik dark:bg-gray-800`}
      >
        <h2
          onAnimationEnd={loadHomePage}
          className="origin-center italic  text-9xl text-slate-900 motion-safe:animate-loadingScreen    dark:text-gray-100"
        >
          BC
        </h2>
      </main>
    </div>
  );
}
