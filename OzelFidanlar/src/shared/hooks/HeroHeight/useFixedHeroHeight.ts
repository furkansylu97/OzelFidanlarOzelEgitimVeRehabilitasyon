import { useEffect } from "react";

export const useFixedHeroHeight = () => {
  useEffect(() => {
    const vh = window.innerHeight;

    document.documentElement.style.setProperty(
      "--viewport-height",
      `${vh}px`
    );
  }, []);
};

