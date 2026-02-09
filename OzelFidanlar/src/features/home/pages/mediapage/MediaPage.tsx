import MediaSection from "../../sections/Media/MediaSection";
import { Helmet } from "react-helmet-async";

const MediaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Medyada Biz | Basın ve Program Görünümlerimiz</title>
        <meta
          name="description"
          content="Özel Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi’nin basın ve medya programlarındaki yerini inceleyin. Uzman görüşleri ve özel eğitim üzerine yapılan yayınlarımızı keşfedin."
        />
      </Helmet>
      
      <MediaSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default MediaPage;
