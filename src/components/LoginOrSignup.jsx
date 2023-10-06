import { Link } from "react-router-dom";

export function LoginOrSignout() {
  return (
    <>
      <article>
        <p className="capitalize">to comment:</p>
        <div>
          <Link to={"/blog/signin"}>
          
          </Link>
        </div>
      </article>
    </>
  );
}
