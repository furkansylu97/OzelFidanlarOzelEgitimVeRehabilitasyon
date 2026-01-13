import React from "react";
import HeroSection from "../../sections/Hero/HeroSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import { useFixedHeroHeight } from "../../../../shared/hooks/HeroHeight/useFixedHeroHeight";
import AboutSection from "../../sections/About-us/AboutSection";
import TeamSection from "../../sections/Team/TeamSection";

const HomePage = () => {
  useFixedHeroHeight();

  return (
    <>
      <HeroSection />
      <section aria-hidden className="h-10" />
      <WhyUsSection />
      <section aria-hidden className="h-10" />
      <AboutSection />
      <section aria-hidden className="h-10" />
      <TeamSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default HomePage;
