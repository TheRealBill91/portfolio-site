import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PortfolioHome } from "../pages/PortfolioHome/PortfolioHome";
import { BlogHome } from "../pages/BlogHome/BlogHome";
import { BlogPost } from "../pages/BlogPost/BlogPost";
import { SignIn } from "../pages/Auth/SignIn/SignIn";
import { SignUp } from "../pages/Auth/SignUp/SignUp";
import { AuthProvider } from "../contexts/AuthContext";

async function blogEntriesLoader() {
  const blogEntries = await fetch(`http://localhost:3000/client/blog_entries`, {
    mode: "cors",
  });
  return await blogEntries.json();
}

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
            },
            {
              path: "/bloghome/signup",
              element: <SignUp />,
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
