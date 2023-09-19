export function BounceAnimation() {
  return (
    <div className="flex flex-1  items-center justify-center bg-gray-200/60 dark:bg-gray-800">
      <div className="mx-1 my-12 h-4 w-4 animate-bounceLoader rounded-full bg-gray-500 dark:bg-gray-300"></div>
      <div className="animation-delay-200 mx-1 my-12 h-4 w-4 animate-bounceLoader rounded-full bg-gray-500 dark:bg-gray-300"></div>
      <div className="animation-delay-400 mx-1 my-12 h-4 w-4 animate-bounceLoader rounded-full bg-gray-500 dark:bg-gray-300"></div>
    </div>
  );
}
