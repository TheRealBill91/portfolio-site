import { Icon } from "./Icon";

export function SocialSignIn() {
  const handleSignInClick = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/v1/client/auth/login/google`,
      "_self"
    );
  };
  return (
    <>
      {/* line pass through effect inspired by The
           Odin Project Sign In form */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-400"></div>
        </div>
        <div className="relative flex justify-center text-sm capitalize">
          <p className=" bg-gray-300 px-3 text-gray-700 dark:bg-gray-500 dark:text-slate-100">
            or sign in with
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handleSignInClick}
          className="mb-2 flex h-[54px] w-full items-center justify-center gap-2 rounded-lg bg-white p-2 px-3 text-lg text-gray-700 shadow-sm hover:text-black"
        >
          <Icon
            id="google"
            className="h-9 w-9 fill-current text-transparent"
            fill="currentColor"
          />
          Sign In
        </button>
      </div>
    </>
  );
}
