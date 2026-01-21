import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/homepage/HomePage";
import AboutPage from "../features/home/pages/aboutpage/AboutPage";
import AboutUsPage from "../features/home/pages/aboutuspage/AboutUsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
          {
            path: "us",
            element: <AboutUsPage />,
          },
        ],
      },
    ],
  },
]);
