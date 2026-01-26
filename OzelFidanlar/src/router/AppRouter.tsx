import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../features/home/pages/homepage/HomePage";
import AboutPage from "../features/home/pages/aboutpage/AboutPage";
import AboutUsPage from "../features/home/pages/aboutuspage/AboutUsPage";
import TeamPage from "../features/home/pages/teampage/TeamPage";
import TrainingsPage from "../features/home/pages/trainingspage/TrainingsPage";
import SpecialLearningDisabilityPage from "../features/home/pages/special-learning-disability-page/SpecialLearningDisabilityPage";
import SpecialLearningDisabilityWhatIsPage from "../features/home/pages/special-learning-disability-what-is-page/SpecialLearningDisabilityWhatIsPage";
import SpecialLearningDisabilitySymptomsPage from "../features/home/pages/special-learning-disability-symptoms-page/SpecialLearningDisabilitySymptomsPage";
import DyslexiaAndTypesPage from "../features/home/pages/dyslexia-and-types-page/DyslexiaAndTypesPage";

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
          {
            path: "special-learning-disability",
            children: [
              {
                index: true,
                element: <SpecialLearningDisabilityPage />,
              },
              {
                path: "what-is",
                element: <SpecialLearningDisabilityWhatIsPage />,
              },
              {
                path: "symptoms",
                element: <SpecialLearningDisabilitySymptomsPage />,
              },
              {
                path: "dyslexia-types",
                element: <DyslexiaAndTypesPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
