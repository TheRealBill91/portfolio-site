import { useContext } from "react";
import { Form, useActionData, useNavigation, Navigate } from "react-router-dom";
import { AuthButton } from "../../../components/AuthButton";
import { AuthContext } from "../../../contexts/AuthContext";
import { Wrapper } from "../../../components/Wrapper";
import { BackButton } from "../../../components/blog/BackButton";
import { SocialSignIn } from "../../../components/SocialSignIn";

export function SignIn() {
  const { auth } = useContext(AuthContext);

  const navTo = "/blog";

  const navigation = useNavigation();
  const submitting = navigation.state === "submitting";

  const signInButtonName = submitting ? "Signing in" : "Sign in";

  const serverError = useActionData();

  return (
    <>
      <Wrapper>
        {auth === true && <Navigate to={"/blog"} />}
        <main className=" flex min-h-screen  flex-1 flex-col items-center justify-start bg-slate-50 px-8  py-14 dark:bg-gray-800">
          <BackButton navTo={navTo} />
          <div className="mt-10">
            <h1 className="mb-4  text-center text-2xl font-bold text-gray-800 dark:text-slate-100">
              Sign in with your account
            </h1>
            <div className="flex-col rounded-xl bg-gray-300 px-8 py-6 shadow-md shadow-slate-200 dark:bg-gray-500 dark:shadow-slate-600 md:min-w-[400px] md:max-w-[550px] md:justify-center md:self-center">
              <Form method="POST" action="/blog/signin">
                <input type="hidden" name="state" value={submitting}></input>
                <div className="mb-3 flex flex-col gap-4">
                  <div className="mx-2 flex flex-col gap-2 text-gray-700">
                    <label
                      className="text-gray-800 after:ml-0.5 after:text-red-800  after:content-['*'] dark:text-slate-50"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="peer w-full rounded-md p-2 dark:bg-slate-50  [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-solid [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-800"
                      name="email"
                      placeholder="username@example.com"
                      type="email"
                      required
                    />
                    <span className="hidden  w-full text-red-800 peer-[&:not(:focus)]:peer-[&:not(:placeholder-shown)]:peer-invalid:inline dark:text-slate-50 dark:underline dark:decoration-red-800 dark:underline-offset-[5px] lg:w-full">
                      Please provide a valid email address
                    </span>
                  </div>

                  <div className="mx-2 mb-3 flex flex-col gap-2 text-gray-700 ">
                    <label
                      className="text-gray-800 after:ml-0.5 after:text-red-700  after:content-['*'] dark:text-slate-50"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className=" peer w-full rounded-md p-2 placeholder:text-white dark:bg-slate-50 dark:placeholder:text-slate-50   [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-solid [&:not(:focus)]:[&:not(:placeholder-shown)]:invalid:border-red-800   "
                      name="password"
                      id="password"
                      type="password"
                      placeholder="password"
                      required
                      minLength={8}
                    />
                    <span className=" hidden w-full text-red-800 peer-[&:not(:focus)]:peer-[&:not(:placeholder-shown)]:peer-invalid:inline dark:text-slate-100 dark:underline dark:decoration-red-800 dark:underline-offset-[5px] lg:w-full">
                      Please enter your password
                    </span>
                  </div>
                  {serverError && (
                    <span className="px-1 pb-3 text-center text-red-700">
                      {serverError.message}
                    </span>
                  )}
                  <AuthButton submitting={submitting} name={signInButtonName} />
                </div>
              </Form>
              <SocialSignIn />
            </div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}
