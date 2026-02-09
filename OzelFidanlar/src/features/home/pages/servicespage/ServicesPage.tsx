import ServicesSection from "../../sections/Services/ServicesSection";
import { Helmet } from "react-helmet-async";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | Özel Eğitim ve Rehabilitasyon Programları</title>
        <meta
          name="description"
          content="Aile danışmanlığı, ergenlik dönemi desteği, akademik beceri eğitimi ve psikolojik danışmanlık hizmetlerimizle bireylerin gelişimini bütüncül bir yaklaşımla destekliyoruz."
        />
      </Helmet>

      <ServicesSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default ServicesPage;
