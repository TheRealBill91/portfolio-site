import { Link } from "react-router-dom";

export function BackButton({ navTo }) {
  const navName = navTo.slice(1);
  return (
    <>
      <Link to={navTo}>
        <button className="rounded-lg border border-solid border-slate-900 px-3 py-1">
          Back to {navName}
        </button>
      </Link>
    </>
  );
}
