import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PortfolioHome } from "../pages/PortfolioHome/PortfolioHome";
import { BlogHome } from "../pages/BlogHome/BlogHome";
import { BlogPost } from "../pages/BlogPost/BlogPost";
import { SignIn } from "../pages/Auth/SignIn/SignIn";
import { SignUp } from "../pages/Auth/SignUp/SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { signUpValidationAction } from "./actions/authActions";
import { signInAction } from "./actions/authActions";
import { blogEntriesLoader, blogPostLoader } from "./loaders/blogLoaders";
import { blogPostAction } from "./actions/blogPostActions";

export const RouteSwitch = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <PortfolioHome />,
          index: true,
        },
        {
          path: "blog",
          children: [
            {
              element: <BlogHome />,
              index: true,
              loader: blogEntriesLoader,
            },

            {
              path: ":postId",
              element: <BlogPost />,
              loader: blogPostLoader,
              action: blogPostAction,
              shouldRevalidate: ({ formData }) => {
                if (!Object.keys(formData).length > 0) return true;
                const formDataObj = Object.fromEntries(formData);
                if (
                  formDataObj &&
                  formDataObj.authStatus === "false" &&
                  formDataObj.intent === "likecomment"
                ) {
                  return false;
                }
              },
            },
            {
              path: "signin",
              element: <SignIn />,
              action: signInAction,
            },
            {
              path: "signup",
              element: <SignUp />,
              action: signUpValidationAction,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};
