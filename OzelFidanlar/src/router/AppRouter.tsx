import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/homepage/HomePage";
import AboutPage from "../features/home/pages/aboutpage/AboutPage";
import AboutUsPage from "../features/home/pages/aboutuspage/AboutUsPage";
import TeamPage from "../features/home/pages/teampage/TeamPage";
import TrainingsPage from "../features/home/pages/trainingspage/TrainingsPage";

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
          {
            path: "team",
            element: <TeamPage />,
          },
        ],
      },
      {
        path: "trainings",
        children: [
          {
            index: true,
            element: <TrainingsPage />,
          },
        ],
      },
    ],
  },
]);
