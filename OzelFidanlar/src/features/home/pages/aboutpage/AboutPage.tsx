import AboutContentSection from "../../sections/About-us/AboutContentSection";
import TeamSection from "../../sections/Team/TeamSection";
import { Helmet } from "react-helmet-async";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Hakkımızda | Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi
        </title>
        <meta
          name="description"
          content="Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi olarak 2002’den bu yana otizm, öğrenme güçlüğü ve dil-konuşma alanlarında uzman kadromuzla birey odaklı eğitim ve rehabilitasyon hizmetleri sunuyoruz."
        />
      </Helmet>

      <AboutContentSection />
      <section aria-hidden className="h-10" />
      <TeamSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default AboutPage;
