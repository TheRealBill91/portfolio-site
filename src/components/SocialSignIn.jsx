import { Icon } from "./Icon";

export function SocialSignIn() {
  return (
    <>
      {/* line pass through effect inspired by The
           Odin Project Sign In form */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-400"></div>
        </div>
        <div className="relative flex justify-center text-sm capitalize">
          <p className=" bg-gray-200 px-3 text-gray-700">or sigin with</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button className="flex w-[140px] items-center gap-4 rounded-lg border border-gray-600 bg-white p-2 px-3 text-lg shadow-sm">
          <Icon id="Google" className="h-6 w-6 text-gray-700" />
          Sign In
        </button>
      </div>
    </>
  );
}
