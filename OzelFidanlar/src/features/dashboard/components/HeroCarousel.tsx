import React from "react"
import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";

interface HeroCarouselProps {
  images: string[];
}

const HeroCarousel: FC<HeroCarouselProps> = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <div className="overflow-hidden h-full w-full object-contain" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-[0_0_100%]"
          >
            <img
              src={src}
              alt={`slide-${index}`}
              className="h-[calc(100vh-10rem)] w-full object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
