import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export function BlogNavBar({ signOut }) {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold text-slate-900 hover:text-slate-900 dark:text-slate-100"
            : "group text-slate-800 transition  dark:text-gray-200"
        }
        to={"/blog"}
        end
      >
        Blog
        <li className="duration-400 h-1 max-w-0 bg-slate-800 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-200 dark:group-hover:bg-gray-200 "></li>
      </NavLink>
      <NavLink
        to={"/blog/signup"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold text-slate-900 hover:text-slate-900 dark:text-slate-100"
            : "group text-slate-800 transition  dark:text-gray-200"
        }
      >
        Sign Up
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
      </NavLink>
      {auth ? (
        <button
          className="group capitalize text-slate-900 transition hover:text-slate-800 dark:text-slate-100 dark:hover:text-slate-200 "
          onClick={signOut}
        >
          sign out{" "}
          <li className="duration-400 h-1 max-w-0 bg-slate-800 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-200 dark:group-hover:bg-gray-200 "></li>
        </button>
      ) : (
        <NavLink
          to={"/blog/signin"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-semibold text-slate-900 hover:text-slate-900 dark:text-slate-100"
              : "group text-slate-800 transition  dark:text-gray-200"
          }
        >
          Sign in
          <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
        </NavLink>
      )}

      <div className="h-8 border-r border-slate-900 dark:border-slate-100"></div>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-semibold text-slate-900 hover:text-slate-900 dark:text-slate-100"
            : "group text-slate-800 transition  dark:text-gray-200"
        }
        to={"/"}
      >
        Portfolio
        <li className="duration-400 h-1 max-w-0 bg-slate-900 transition-all group-hover:max-w-full group-hover:bg-slate-800 dark:bg-gray-100 dark:group-hover:bg-gray-200 "></li>
      </NavLink>
    </>
  );
}
