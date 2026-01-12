import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { FC } from "react";
import Autoplay from "embla-carousel-autoplay";
import type { HeroSlide } from "../../data/Hero/heroSlides";
import { Link } from "react-router-dom";
import { Container } from "../../../../shared/components/container/Container";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const HeroCarousel: FC<HeroCarouselProps> = ({ slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 25,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());

      setAnimate(false);

      setTimeout(() => {
        setAnimate(true);
      }, 300);
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div
      className="relative overflow-hidden h-full w-full object-contain"
      ref={emblaRef}
    >
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-[0_0_100%]">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[calc(var(--viewport-height)-10rem)] w-full object-cover"
            />
            <div
              className="absolute inset-0 flex justify-center"
              style={{ backgroundColor: slide.colors.overlay }}
            >
              <Container className="relative mt-[calc(var(--viewport-height)*0.3)]">
                <div
                  className={`absolute px-3 max-w-2xl transition-all duration-1000 ease-out ${
                    index === selectedIndex && animate
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                >
                  <h2
                    className="inline-block text-2xl font-bold px-1 mb-4 bg-[#001064]/25 border-l-4 border-solid border-amber-300"
                    style={{ color: slide.colors.title }}
                  >
                    {slide.title}
                  </h2>

                  {slide.subtitle && (
                    <h4
                      className="text-lg font-medium italic mb-4"
                      style={{ color: slide.colors.subtitle }}
                    >
                      {slide.subtitle}
                    </h4>
                  )}

                  <p
                    className="text-base font-normal mb-6"
                    style={{ color: slide.colors.description }}
                  >
                    {slide.description}
                  </p>

                  {slide.button && (
                    <Link
                      to={slide.button.link}
                      className="relative inline-block overflow-hidden px-8 py-4 border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] text-black font-semibold shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px] group"
                    >
                      <span
                        className="absolute left-36 top-6 h-16 w-56 rounded-full bg-white transition-all
                       group-hover:w-60 group-hover:h-44 group-hover:-left-8 group-hover:-top-5 duration-300 ease-in-out"
                      />
                      <span className="relative z-10">{slide.button.text}</span>
                    </Link>
                  )}
                </div>
              </Container>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-[#001064] scale-125"
                : "bg-[#001064]/50 hover:bg-[#001064]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
