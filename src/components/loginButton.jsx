export function LoginButton({ isSubmitting }) {
  return (
    <button
      className="inline-flex w-[140px] items-center justify-evenly self-center rounded-lg border-[1px] border-solid border-gray-600 bg-white p-2 text-lg text-gray-600 shadow-sm shadow-gray-100 transition-all hover:border-[1px] hover:border-solid hover:border-black hover:text-black"
      type="submit"
    >
      Login
      {isSubmitting ? (
        <svg
          className=" mr-3 h-5 w-5 animate-spin bg-white"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-10"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
    </button>
  );
}
