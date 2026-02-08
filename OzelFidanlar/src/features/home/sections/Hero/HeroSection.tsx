import HeroCarousel from "../../components/Hero/HeroCarousel";
import { HeroSlides } from "../../data/Hero/heroSlides";


const HeroSection = () => {

  return (
    <section className="w-full">
      <HeroCarousel slides={HeroSlides} />
    </section>
  );
};

export default HeroSection;