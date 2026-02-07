import React from "react";
import GallerySection from "../../sections/Gallery/GallerySection";
import MediaHighlightSection from "../../sections/Gallery/MediaHighlightSection";

const GalleryPage: React.FC = () => {
  return (
    <>
      <GallerySection />
      <section aria-hidden className="h-8 lg:h-16" />
      <MediaHighlightSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default GalleryPage;
