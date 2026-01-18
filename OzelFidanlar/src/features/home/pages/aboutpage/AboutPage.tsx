import React from "react";
import AboutContentSection from "../../sections/About-us/AboutContentSection";
import TeamSection from "../../sections/Team/TeamSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutContentSection />
      <section aria-hidden className="h-10" />
      <TeamSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default AboutPage;
