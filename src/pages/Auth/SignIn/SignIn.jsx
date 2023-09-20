import { Icon } from "../../../components/Icon";
import { Footer } from "../../../components/Footer";
import { useState } from "react";
import { redirect, useOutletContext } from "react-router-dom";
import { AuthButton } from "../../../components/AuthButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [auth, setAuth] = useOutletContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const validateForm = () => {
    let formValid = true;
    let emailError;
    let passwordError;
    // Check email validity
    if (!validateEmail(email)) {
      formValid = false;
      emailError = "Invalid email address";
    } else {
      emailError = "";
    }

    /*   if (!validatePassword(password)) {
      formValid = false;
      passwordError =
        "Password must include: 8 characters, 1 uppercase letter, 1 number, 1 special character.";
    } else {
      passwordError = "";
    } */

    setErrors({ email: emailError, password: passwordError });
    return formValid;
  };

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

    const formValid = validateForm();
    if (!formValid) {
      return;
    }
    setIsSubmitting(true);
    console.log("getting here?");
    try {
      const response = await fetch("http://localhost:3000/client/auth/login", {
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      console.log(response);

      if (response.ok) {
        setIsComplete(true);
        userIsAuth = true;
        setAuth(userIsAuth);
      } else {
        setAuth(false);
        throw new Error("Login failed");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
      if (userIsAuth) {
        redirect("/bloghome");
      }
    }
  };

  return (
    <>
      <main className="mb-14 mt-10 flex min-h-screen  flex-1 flex-col items-center  px-7 py-4">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-700">
          Sign in with your account
        </h1>
        <div className="flex-col rounded-xl bg-gray-200 px-10 py-6 shadow-md shadow-gray-200 md:min-w-[400px] md:max-w-[550px] md:justify-center md:self-center">
          <form noValidate onSubmit={handleSubmit}>
            <div className="mb-3 flex flex-col gap-4">
              <div className="mx-2 flex flex-col gap-2 text-gray-700">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full rounded-md p-2"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="username@example.com"
                  type="email"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email}</span>
                )}
              </div>

              <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                <label htmlFor="password">Password</label>
                <input
                  className="w-full rounded-md p-2"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  id="password"
                  type="password"
                  required
                />
                {errors.password && (
                  <span className="text-red-600">{errors.password}</span>
                )}
              </div>
              <AuthButton isSubmitting={isSubmitting} name={"Sign in"} />

              {isSubmitted && !isComplete && (
                <span>Login failed, try again</span>
              )}
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
      </main>
      <Footer />
    </>
  );
}
