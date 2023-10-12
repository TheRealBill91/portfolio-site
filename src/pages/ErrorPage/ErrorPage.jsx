import { useRouteError, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/blog");
    }, 4000);
  }, [navigate]);

  return (
    <main className="height-mobile-dynamic flex flex-col items-center justify-center dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4 text-slate-900 ">
        <h1 className="text-center text-3xl font-bold md:text-4xl">Uh oh!</h1>
        <p className="text-lg md:text-xl">Looks like we ran into an issue!</p>
        <p className="text-lg italic lg:text-xl">
          {error.statusText || error.message}
        </p>
      </div>
    </main>
  );
};
