import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/homepage/HomePage";
import AboutPage from "../features/home/pages/aboutpage/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { 
        index: true, 
        element: <HomePage /> 
      },
            {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
