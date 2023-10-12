import { processServerErrors } from "../../utils/signUpValidation";
import { redirect } from "react-router";

export async function signUpValidationAction({ request }) {
  const formData = await request.formData();
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordConfirmation = formData.get("passwordConfirmation");

  const state = formData.get("state");

  if (state === "submitting") {
    return null;
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/client/users/signup`,
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

  if (response.ok) {
    return redirect(`/blog?isSignedUp=${true}`);
  }
  const formResponse = await response.json();
  const unprocessedServerErrors = formResponse.errors;
  const serverErrors = processServerErrors(unprocessedServerErrors);
  return serverErrors;
}

export async function signInAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const state = formData.get("state");

  if (state === "submitting") {
    return null;
  }

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/client/auth/login`,
    {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    const serverError = await response.json();
    return serverError;
  }

  return redirect(`/blog?isLoggedIn=${true}`);
}
