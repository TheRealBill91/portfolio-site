import { AuthButton } from "../../../components/AuthButton";
import { useContext, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { ToastContext } from "../../../contexts/ToastContext";
import { STATUS } from "../../../utils/enums/formStatus";
import { validateForm } from "../../../utils/signUpValidation";

export function SignUp() {
  const [clientErrors, setClientErrors] = useState({});

  const [serverErrors, setServerErrors] = useState();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [setAuth] = useOutletContext();
  const [status, setStatus] = useState(STATUS.IDLE);
  const { addToast } = useContext(ToastContext);

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

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

    const clientFormErrors = validateForm(
      password,
      passwordConfirmation,
      username,
      email
    );

    setClientErrors(clientFormErrors);

    if (Object.keys(clientErrors).length > 0) {
      return;
    }

    if (status === "SUBMITTING") {
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
