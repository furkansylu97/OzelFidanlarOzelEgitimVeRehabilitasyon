import React from "react";
import HeroSection from "../../sections/Hero/HeroSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import { useFixedHeroHeight } from "../../../../shared/hooks/HeroHeight/useFixedHeroHeight";

const HomePage = () => {
  useFixedHeroHeight();

  return (
    <>
      <HeroSection />
      <section aria-hidden className="h-10" />
      <WhyUsSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default HomePage;
