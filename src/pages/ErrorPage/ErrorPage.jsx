import { useNavigate, useRouteError } from "react-router-dom";
import { useEffect } from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/bloghome");
    }, 4000);
  }, [navigate]);

  return (
    <main>
      <h1>Looks like we ran into an issue!</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  );
};
