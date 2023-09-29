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
import { blogEntriesLoader } from "./loaders/blogLoaders";

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
          path: "/bloghome",
          children: [
            {
              index: true,
              element: <BlogHome />,
              loader: blogEntriesLoader,
            },
            {
              path: "/bloghome/signin",
              element: <SignIn />,
              action: signInAction,
            },
            {
              path: "/bloghome/signup",
              element: <SignUp />,
              action: signUpValidationAction,
            },

            {
              path: ":blogId",
              element: <BlogPost />,
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
