import { useContext } from "react";
import { Form, useActionData, useNavigation, Navigate } from "react-router-dom";
import { AuthButton } from "../../../components/AuthButton";
import { AuthContext } from "../../../contexts/AuthContext";

export function SignIn() {
  const { auth } = useContext(AuthContext);

  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const serverError = useActionData();

  return (
    <>
      {auth === true && <Navigate to={"/blog"} />}
      <main className=" flex min-h-screen flex-1 flex-col items-center justify-start bg-white px-7  py-8 dark:bg-gray-800">
        <div className="mt-10">
          <h1 className="mb-4  text-center text-2xl font-bold text-gray-800 dark:text-slate-100">
            Sign in with your account
          </h1>
          <div className="flex-col rounded-xl bg-gray-200 px-10 py-6 shadow-md shadow-gray-200 md:min-w-[400px] md:max-w-[550px] md:justify-center md:self-center">
            <Form method="POST" action="/blog/signin">
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
                {serverError && (
                  <span className="px-1 pb-3 text-center text-red-700">
                    {serverError.message}
                  </span>
                )}
                <AuthButton submitting={submitting} name={"Sign in"} />
              </div>
            </Form>
          </div>
        </div>
      </main>
    </>
  );
}
