import { AuthButton } from "../../../components/AuthButton";
import { useState } from "react";
import {
  useActionData,
  useNavigation,
  Form,
  useSubmit,
} from "react-router-dom";
import { Footer } from "../../../components/Footer";
import { validateForm } from "../../../utils/signUpValidation";

export function SignUp() {
  const [clientErrors, setClientErrors] = useState({});
  const navigation = useNavigation();
  const submit = useSubmit();

  const serverErrors = useActionData();

  const submitting = navigation.state === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordConfirmation = formData.get("passwordConfirmation");

    const clientFormErrors = validateForm(
      username,
      email,
      password,
      passwordConfirmation
    );

    setClientErrors(clientFormErrors);
    if (Object.keys(clientFormErrors).length) {
      return;
    }

    submit(formData, {
      replace: true,
      method: "post",
      action: "/bloghome/signup",
    });
  };

  return (
    <>
      <main className="flex min-h-screen flex-1   flex-col items-center px-8  py-14 dark:bg-gray-800">
        <div className="mt-8 justify-start">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-700 dark:text-slate-100">
            Sign Up today
          </h1>
          <div className="w-full flex-col rounded-xl bg-gray-200 px-10 py-10 shadow-md shadow-gray-200 dark:shadow-gray-500 md:min-w-[400px] md:max-w-[500px] md:justify-center md:self-center">
            <Form noValidate onSubmit={handleSubmit} method="POST">
              <div className="mb-3 flex flex-col gap-4">
                <div className="mx-2 flex flex-col gap-2 text-gray-700">
                  <label className="dark:text-slate-800" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="w-full rounded-md p-2"
                    name="username"
                    placeholder="beebop123"
                    type="text"
                    required
                  />
                  {clientErrors && (
                    <span className="text-red-600">
                      {clientErrors.username}
                    </span>
                  )}
                </div>
                <div className="mx-2 flex flex-col gap-2 text-gray-700">
                  <label className="dark:text-slate-800" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-md p-2"
                    name="email"
                    placeholder="username@example.com"
                    type="email"
                    required
                  />
                  {clientErrors && (
                    <span className="text-red-600">{clientErrors.email}</span>
                  )}
                  {serverErrors && (
                    <span className="text-red-600">{serverErrors.email}</span>
                  )}
                </div>

                <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                  <label htmlFor="password">Password</label>
                  <input
                    className="w-full rounded-md p-2"
                    name="password"
                    id="password"
                    type="password"
                    required
                  />
                  {clientErrors && (
                    <span className="text-red-600">
                      {clientErrors.password}
                    </span>
                  )}
                </div>
                <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                  <label htmlFor="passwordConfirmation">Confirm Password</label>
                  <input
                    className="w-full rounded-md border  px-2 py-2 pr-8 focus:border focus:border-black "
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    type="password"
                    required
                  />

                  {clientErrors && (
                    <span className="text-red-600">
                      {clientErrors.passwordConfirmation}
                    </span>
                  )}
                  {clientErrors && (
                    <span className="text-red-600">
                      {clientErrors.passwordsMatch}
                    </span>
                  )}
                </div>
                <AuthButton submitting={submitting} name={"Sign up"} />
              </div>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
