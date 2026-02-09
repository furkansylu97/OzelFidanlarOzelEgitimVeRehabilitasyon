import AboutUsContentSection from "../../sections/About-us/AboutUsContentSection";
import WhyUsSection from "../../sections/Why-us/WhyUsSection";
import AboutUsFeaturesSection from "../../sections/About-us/AboutUsFeaturesSection";
import { Helmet } from "react-helmet-async";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Kurumsal Hakkımızda | Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi
        </title>
        <meta
          name="description"
          content="2002’den bu yana Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi olarak otizm, öğrenme güçlüğü ve özel eğitim alanlarında bireyselleştirilmiş terapi programları sunuyoruz. Uzman kadromuzla çocukların gelişimini destekleyen güvenli ve bilimsel bir eğitim ortamı sağlıyoruz."
        />
      </Helmet>
      
      <AboutUsContentSection />
      <section aria-hidden className="h-10" />
      <AboutUsFeaturesSection />
      <section aria-hidden className="h-10" />
      <WhyUsSection />
      <section aria-hidden className="h-10" />
    </>
  );
};

export default AboutUsPage;
