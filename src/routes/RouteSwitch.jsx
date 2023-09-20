import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PortfolioHome } from "../pages/PortfolioHome/PortfolioHome";
import { BlogHome } from "../pages/BlogHome/BlogHome";
import { BlogPost } from "../pages/BlogPost/BlogPost";
import { SignIn } from "../pages/Auth/SignIn/SignIn";

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
            },
            {
              path: "/bloghome/signin",
              element: <SignIn />,
            },
            {},

            {
              path: ":blogId",
              element: <BlogPost />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
