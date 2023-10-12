import { AuthButton } from "../../../components/AuthButton";
import { useState } from "react";
import {
  useActionData,
  useNavigation,
  Form,
  useSubmit,
} from "react-router-dom";
import { validateForm } from "../../../utils/signUpValidation";
import { Wrapper } from "../../../components/Wrapper";
import { BackButton } from "../../../components/blog/BackButton";

export function SignUp() {
  const [clientErrors, setClientErrors] = useState({});
  const navigation = useNavigation();
  const submit = useSubmit();

  const navTo = "/blog";

  const serverErrors = useActionData();
  const submitting = navigation.state === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) {
      return;
    }
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
      action: "/blog/signup",
    });
  };

  return (
    <>
      <Wrapper>
        <main className="flex min-h-screen flex-1 flex-col   items-center bg-slate-50 px-8  py-14 dark:bg-gray-800">
          <BackButton navTo={navTo} />
          <div className="mt-8 justify-start">
            <h1 className="my-3 text-center text-2xl font-bold capitalize text-gray-700 dark:text-slate-100">
              sign up today
            </h1>
            <div className="w-full flex-col rounded-xl bg-gray-300 px-10 py-8 shadow-md shadow-gray-200 dark:bg-gray-500 dark:shadow-gray-500 md:min-w-[400px] md:max-w-[500px] md:justify-center md:self-center">
              <Form noValidate onSubmit={handleSubmit} method="POST">
                <div className="mb-3 flex flex-col gap-4">
                  <div className="mx-2 flex flex-col gap-2 text-gray-700">
                    <label className="dark:text-slate-50" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="w-full rounded-md bg-slate-50 p-2 placeholder:text-slate-400 dark:bg-slate-100"
                      name="username"
                      placeholder="beebop123"
                      type="text"
                    />
                    {Object.keys(clientErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {clientErrors.username}
                      </span>
                    )}
                    {serverErrors && Object.keys(serverErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {serverErrors.username}
                      </span>
                    )}
                  </div>
                  <div className="mx-2 flex flex-col gap-2 text-gray-700">
                    <label className="dark:text-slate-50" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-md bg-slate-50 p-2 placeholder:text-slate-400"
                      name="email"
                      placeholder="username@example.com"
                      type="email"
                    />
                    {Object.keys(clientErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {clientErrors.email}
                      </span>
                    )}
                    {serverErrors && Object.keys(serverErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {serverErrors.email}
                      </span>
                    )}
                  </div>

                  <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                    <label className="dark:text-slate-50" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full rounded-md bg-slate-50 p-2  dark:bg-slate-100"
                      name="password"
                      id="password"
                      type="password"
                    />
                    {Object.keys(clientErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {clientErrors.password}
                      </span>
                    )}
                    {serverErrors && Object.keys(serverErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {serverErrors.password}
                      </span>
                    )}
                  </div>
                  <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700">
                    <label
                      className="dark:text-slate-50"
                      htmlFor="passwordConfirmation"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full rounded-md border bg-slate-50  px-2 py-2 pr-8  focus:border focus:border-black "
                      name="passwordConfirmation"
                      id="passwordConfirmation"
                      type="password"
                    />

                    {Object.keys(clientErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {clientErrors.passwordConfirmation}
                      </span>
                    )}
                    {Object.keys(clientErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {clientErrors.passwordsMatch}
                      </span>
                    )}
                    {serverErrors && Object.keys(serverErrors).length > 0 && (
                      <span className="text-red-700 dark:text-slate-100 dark:underline dark:decoration-red-700 dark:underline-offset-[5px]">
                        {serverErrors.passwordConfirmation}
                      </span>
                    )}
                  </div>
                  <AuthButton submitting={submitting} name={"Sign up"} />
                </div>
              </Form>
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}
