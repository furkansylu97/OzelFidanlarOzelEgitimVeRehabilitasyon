import AutismSpectrumDisorderSection from "../../sections/AutismSpectrumDisorder/AutismSpectrumDisorderSection";
import { Helmet } from "react-helmet-async";

const AutismSpectrumDisorderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Otizm Spektrum Bozukluğu | Belirtiler ve Eğitim Desteği</title>
        <meta
          name="description"
          content="Otizm Spektrum Bozukluğu nedir, belirtileri nelerdir ve nasıl desteklenir? Uzman yaklaşımıyla otizm hakkında kapsamlı bilgi edinin."
        />
      </Helmet>
      
      <AutismSpectrumDisorderSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default AutismSpectrumDisorderPage;
