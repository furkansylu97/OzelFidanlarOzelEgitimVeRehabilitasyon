import React from "react";
import HeroCarousel from "../components/HeroCarousel";

import slide1 from "../../../assets/images/home/slide-1.jpg";
import slide2 from "../../../assets/images/home/slide-2.jpg";
import slide3 from "../../../assets/images/home/slide-3.jpg";
import slide4 from "../../../assets/images/home/slide-4.jpg";
import slide5 from "../../../assets/images/home/slide-5.jpg";
import slide6 from "../../../assets/images/home/slide-6.jpg";
import slide7 from "../../../assets/images/home/slide-7.jpg";
import slide8 from "../../../assets/images/home/slide-8.jpg";


const HeroSection = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  return (
    <section className="relative w-full">
      <HeroCarousel images={images} />
    </section>
  );
};

export default HeroSection;