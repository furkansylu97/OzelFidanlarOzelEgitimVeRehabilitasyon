import HeroSection from "../../sections/Hero/HeroSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import AboutSection from "../../sections/About-us/AboutSection";
import TeamSection from "../../sections/Team/TeamSection";
import ContactSection from "../../sections/Contact/ContactSection";
import BlogSection from "../../sections/Blog/BlogSection";

const HomePage = () => {
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
      <ContactSection />
      <section aria-hidden className="h-10" />
      <BlogSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default HomePage;
