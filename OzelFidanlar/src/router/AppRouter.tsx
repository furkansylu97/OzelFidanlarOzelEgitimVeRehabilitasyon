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
import LanguageAndSpeechDisordersPage from "../features/home/pages/language-and-speech-disorders/LanguageAndSpeechDisordersPage";
import LanguageAndSpeechDisorderWhatIsPage from "../features/home/pages/language-and-speech-disorders-what-is-page/LanguageAndSpeechDisorderWhatIsPage";
import LanguageAndSpeechDisorderTypesPage from "../features/home/pages/language-and-speech-disorder-types-page/LanguageAndSpeechDisorderTypesPage";
import AutismSpectrumDisorderPage from "../features/home/pages/autism-spectrum-disorder-page/AutismSpectrumDisorderPage";
import AutismSpectrumDisorderWhatIsPage from "../features/home/pages/autism-spectrum-disorder-what-is-page/AutismSpectrumDisorderWhatIsPage";
import AutismSpectrumDisorderSymptomsPage from "../features/home/pages/autism-spectrum-disorder-symptoms-page/AutismSpectrumDisorderSymptomsPage";
import AutismSpectrumDisorderCausesPage from "../features/home/pages/autism-spectrum-disorder-causes-page/AutismSpectrumDisorderCausesPage";
import AttentionDeficitHyperactivityDisorderPage from "../features/home/pages/attention-deficit-hyperactivity-disorder-page/AttentionDeficitHyperactivityDisorderPage";
import IntellectualDisabilityPage from "../features/home/pages/intellectual-disability-page/IntellectualDisabilityPage";
import DownSyndromePage from "../features/home/pages/down-syndrome-page/DownSyndromePage";
import OccupationalTherapyPage from "../features/home/pages/occupational-therapy-page/OccupationalTherapyPage";
import ServicesPage from "../features/home/pages/servicespage/ServicesPage";
import FamilyEducationCounselingPage from "../features/home/pages/family-educaiton-counseling-page/FamilyEducationCounselingPage";
import AdolescenceCounselingPage from "../features/home/pages/adolescent-counseling-page/AdolescenceCounselingPage";

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
          {
            path: "speech-and-language-disorders",
            children: [
              {
                index: true,
                element: <LanguageAndSpeechDisordersPage />,
              },
              {
                path: "what-is",
                element: <LanguageAndSpeechDisorderWhatIsPage />,
              },
              {
                path: "types",
                element: <LanguageAndSpeechDisorderTypesPage />,
              },
            ],
          },
          {
            path: "autism-spectrum-disorder",
            children: [
              {
                index: true,
                element: <AutismSpectrumDisorderPage />,
              },
              {
                path: "what-is",
                element: <AutismSpectrumDisorderWhatIsPage />,
              },
              {
                path: "symptoms",
                element: <AutismSpectrumDisorderSymptomsPage />,
              },
              {
                path: "causes",
                element: <AutismSpectrumDisorderCausesPage />,
              },
            ],
          },
          {
            path: "adhd",
            element: <AttentionDeficitHyperactivityDisorderPage />,
          },
          {
            path: "intellectual-disability",
            element: <IntellectualDisabilityPage />,
          },
          {
            path: "down-syndrome",
            element: <DownSyndromePage />,
          },
          {
            path: "occupational-therapy",
            element: <OccupationalTherapyPage />,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServicesPage />,
          },
          {
            path: "family-education-counseling",
            element: <FamilyEducationCounselingPage />,
          },
          {
            path: "adolescent-counseling",
            element: <AdolescenceCounselingPage />,
          },
        ],
      },
    ],
  },
]);
