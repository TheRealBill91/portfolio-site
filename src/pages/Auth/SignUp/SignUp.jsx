import { AuthButton } from "../../../components/AuthButton";
import { Icon } from "../../../components/Icon";
import { useContext, useState } from "react";
import { useOutletContext, useNavigate, useNavigation } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { ToastContext } from "../../../contexts/ToastContext";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

export function SignUp() {
  const [clientErrors, setClientErrors] = useState({});

  const [serverErrors, setServerErrors] = useState();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useOutletContext();
  const [status, setStatus] = useState(STATUS.IDLE);
  const { addToast } = useContext(ToastContext);

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const validateUserName = (username) => {
    if (username.length < 1) {
      return "Username must be between 1 and 14 characters";
    } else if (username.length > 14) {
      return "Username must be between 1 and 14 characters";
    }
    return null;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = regex.test(email);
    if (!emailValid) {
      return "Please enter a valid email address in the format: example@domain.com.";
    } else {
      return null;
    }
  };

  const validatePassword = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordValid = strongPasswordRegex.test(password);
    if (!passwordValid) {
      return "Your password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character such as @$!%*?&.";
    } else {
      return null;
    }
  };

  const passwordsMatch = () => {
    if (password !== passwordConfirmation) {
      return "Passwords do not match";
    } else if (password === passwordConfirmation) {
      return null;
    }
  };

  const validateForm = () => {
    const clientErrors = {};

    const userNameError = validateUserName(username);
    if (userNameError) {
      clientErrors.username = userNameError;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      clientErrors.email = emailError;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      clientErrors.password = passwordError;
    }

    const passwordConfirmationError = validatePassword(passwordConfirmation);
    if (passwordConfirmationError) {
      clientErrors.passwordConfirmation = passwordError;
    }

    const passwordsMatchError = passwordsMatch();
    if (passwordsMatchError) {
      clientErrors.passwordsMatch = passwordsMatchError;
    }

    setClientErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "username":
        setUserName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordConfirmation":
        setPasswordConfirmation(value);
        break;
      default:
        console.log("handleInputChange error");
    }
  };

  const processServerErrors = (errors) => {
    const serverErrors = errors.map((error) => {
      return error;
    });
    return serverErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userIsAuth;

    const formValid = validateForm();

    if (!formValid) {
      return;
    }

    if (status === "SUBMITTING") {
      console.log("reached this part, good");
      return;
    }

    setStatus(STATUS.SUBMITTING);
    try {
      const response = await fetch(
        "http://localhost:3000/client/users/signup",
        {
          mode: "cors",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
            passwordConfirmation,
          }),
          credentials: "include",
        }
      );

      const serverErrors = await response.json();

      if (response.ok) {
        addToast("Sign up successful");
        setStatus(STATUS.COMPLETED);
        // setIsComplete(true);
        userIsAuth = true;
        setAuth(userIsAuth);
      } else {
        setStatus(STATUS.SUBMITTED);

        setAuth(false);
        throw serverErrors;
      }
    } catch (serverErrors) {
      const processedServerErrors = processServerErrors(serverErrors.errors);
      setServerErrors(processedServerErrors);
    } finally {
      if (userIsAuth) {
        navigate("/bloghome");
      }
    }
  };

  return (
    <>
      <main className="flex min-h-screen flex-1   flex-col items-center px-8  py-14 dark:bg-gray-800">
        <div className="mt-8 justify-start">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-700 dark:text-slate-100">
            Sign Up today
          </h1>
          <div className="w-full flex-col rounded-xl bg-gray-200 px-10 py-10 shadow-md shadow-gray-200 dark:shadow-gray-500 md:min-w-[400px] md:max-w-[500px] md:justify-center md:self-center">
            <form noValidate onSubmit={handleSubmit}>
              <div className="mb-3 flex flex-col gap-4">
                <div className="mx-2 flex flex-col gap-2 text-gray-700">
                  <label className="dark:text-slate-800" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="w-full rounded-md p-2"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="beebop123"
                    type="text"
                    required
                  />
                  {clientErrors.username && (
                    <span className="text-red-600">
                      {clientErrors.username}
                    </span>
                  )}
                  {serverErrors &&
                    serverErrors.map((error) => {
                      return (
                        error.path === "username" && (
                          <span className="text-red-600">{error.msg}</span>
                        )
                      );
                    })}
                </div>
                <div className="mx-2 flex flex-col gap-2 text-gray-700">
                  <label className="dark:text-slate-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-md p-2"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="username@example.com"
                    type="email"
                    required
                  />
                  {clientErrors.email && (
                    <span className="text-red-600">{clientErrors.email}</span>
                  )}
                  {serverErrors &&
                    serverErrors.map((error) => {
                      return (
                        error.path === "email" && (
                          <span className="text-red-600">{error.msg}</span>
                        )
                      );
                    })}
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
                  {clientErrors.password && (
                    <span className="text-red-600">
                      {clientErrors.password}
                    </span>
                  )}
                  {serverErrors &&
                    serverErrors.map((error) => {
                      return (
                        error.path === "password" && (
                          <span className="text-red-600">{error.msg}</span>
                        )
                      );
                    })}
                </div>
                <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                  <label htmlFor="passwordConfirmation">Confirm Password</label>
                  <input
                    className="w-full rounded-md border  px-2 py-2 pr-8 focus:border focus:border-black "
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={handleInputChange}
                    id="passwordConfirmation"
                    type="password"
                    required
                  />

                  {clientErrors.passwordConfirmation && (
                    <span className="text-red-600">
                      {clientErrors.passwordConfirmation}
                    </span>
                  )}
                  {clientErrors.passwordsMatch && (
                    <span className="text-red-600">
                      {clientErrors.passwordsMatch}
                    </span>
                  )}
                  {serverErrors &&
                    serverErrors.map((error) => {
                      return (
                        error.path === "passwordConfirmation" && (
                          <span className="text-red-600 ">{error.msg}</span>
                        )
                      );
                    })}
                </div>
                <AuthButton status={status} name={"Sign up"} />
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
