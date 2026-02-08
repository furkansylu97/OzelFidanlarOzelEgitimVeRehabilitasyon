import AboutUsContentSection from "../../sections/About-us/AboutUsContentSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import AboutUsFeaturesSection from "../../sections/About-us/AboutUsFeaturesSection";


const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutUsContentSection />
      <section aria-hidden className="h-10" />
      <AboutUsFeaturesSection />
      <section aria-hidden className="h-10" />
      <WhyUsSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default AboutUsPage;
