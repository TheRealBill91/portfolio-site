import { Link } from "react-router-dom";

export function BackButton({ navTo }) {
  const navName = navTo.slice(1);
  return (
    <>
      <Link to={navTo} className="self-start">
        <button className=" rounded-lg border border-solid border-slate-900 px-3 py-1 dark:border-slate-100 dark:text-slate-100">
          Back to {navName}
        </button>
      </Link>
    </>
  );
}
