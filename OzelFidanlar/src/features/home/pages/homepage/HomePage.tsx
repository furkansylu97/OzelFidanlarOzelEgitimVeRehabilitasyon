import HeroSection from "../../sections/Hero/HeroSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import AboutSection from "../../sections/About-us/AboutSection";
import TeamSection from "../../sections/Team/TeamSection";
import ContactSection from "../../sections/Contact/ContactSection";
import BlogSection from "../../sections/Blog/BlogSection";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi | İstanbul</title>
        <meta
          name="description"
          content="Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi, İstanbul'da çocuklar için otizm, dikkat eksikliği ve öğrenme güçlüğü terapileri sunar. Uzman kadrosu ile bireysel eğitim programları, dil ve konuşma terapisi, erken müdahale ve çocuk gelişimi odaklı destek sağlayarak her çocuğun potansiyelini keşfetmesine yardımcı olur."
        />
      </Helmet>
      
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
