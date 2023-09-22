import { Icon } from "../../../components/Icon";
import { Footer } from "../../../components/Footer";
import { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { AuthButton } from "../../../components/AuthButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ loginError: "" });
  const [auth, setAuth] = useOutletContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userIsAuth;

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/client/auth/login", {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        setIsComplete(true);
        userIsAuth = true;
        setAuth(userIsAuth);
      } else {
        setPassword("");
        setAuth(false);
        throw new Error("Email and/or password is incorrect");
      }
    } catch (error) {
      setError({ loginError: error.message });
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
      if (userIsAuth === true) {
        navigate("/bloghome");
      }
    }
  };

  return (
    <>
      <main className=" flex min-h-screen flex-1 flex-col items-center justify-start px-7  py-4 dark:bg-gray-800">
        <div className="mt-10">
          <h1 className="mb-4  text-center text-2xl font-bold text-gray-800 dark:text-slate-100">
            Sign in with your account
          </h1>
          <div className="flex-col rounded-xl bg-gray-200 px-10 py-6 shadow-md shadow-gray-200 md:min-w-[400px] md:max-w-[550px] md:justify-center md:self-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 flex flex-col gap-4">
                <div className="mx-2 flex flex-col gap-2 text-gray-700">
                  <label
                    className="text-gray-800 after:ml-0.5  after:text-red-700 after:content-['*']"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="peer w-full rounded-md p-2  [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-solid [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-700"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="username@example.com"
                    type="email"
                    required
                  />
                  <span className="hidden w-[197px] text-red-700 peer-[&:not(:focus)]:peer-[&:not(:placeholder-shown)]:peer-invalid:inline lg:w-full">
                    Please provide a valid email address
                  </span>
                </div>

                <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700 ">
                  <label
                    className="text-gray-800 after:ml-0.5  after:text-red-700 after:content-['*']"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className=" peer w-full rounded-md p-2  [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-solid [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-700   "
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    id="password"
                    type="password"
                    placeholder=""
                    required
                    minLength={8}
                  />
                  <span className="hidden w-[197px] text-red-700 peer-[&:not(:focus)]:peer-[&:not(:placeholder-shown)]:peer-invalid:inline lg:w-full">
                    Please enter your password
                  </span>
                </div>
                {error.loginError && (
                  <span className="text-center text-red-600">
                    {error.loginError}
                  </span>
                )}
                <AuthButton isSubmitting={isSubmitting} name={"Sign in"} />
              </div>
            </form>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
