import { redirect } from "react-router-dom";

export async function googleLoginSuccess() {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/v1/client/auth/google_login/success`,
    {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    }
  );

  if (response.ok) {
    return redirect(`/blog?isLoggedIn=${true}`);
  }

  throw new Response("Issue verifying google login");
}
