import GallerySection from "../../sections/Gallery/GallerySection";
import MediaHighlightSection from "../../sections/Gallery/MediaHighlightSection";
import { Helmet } from "react-helmet-async";

const GalleryPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Etkinlikler ve Galeri | Özel Eğitim Çalışmalarımız</title>
        <meta
          name="description"
          content="Özel eğitim merkezimizde gerçekleştirilen terapi, grup etkinlikleri ve gelişim çalışmalarını galerimizde keşfedin. Çocukların sosyal ve bilişsel gelişimini destekleyen etkinliklerimizi inceleyin."
        />
      </Helmet>
      
      <GallerySection />
      <section aria-hidden className="h-8 lg:h-16" />
      <MediaHighlightSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default GalleryPage;
