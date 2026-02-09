import AutismSpectrumDisorderSymptomsSection from "../../sections/AutismSpectrumDisorderSymptoms/AutismSpectrumDisorderSymptomsSection";
import { Helmet } from "react-helmet-async";

const AutismSpectrumDisorderSymptomsPage = () => {
  return (
    <>
      <Helmet>
        <title>Otizm Belirtileri Nelerdir? Erken Dönem İşaretler</title>
        <meta
          name="description"
          content="Otizm belirtileri nelerdir? Bebeklik ve çocukluk döneminde görülebilen erken işaretleri ve dikkat edilmesi gereken belirtileri uzman bakışıyla öğrenin."
        />
      </Helmet>
      
      <AutismSpectrumDisorderSymptomsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default AutismSpectrumDisorderSymptomsPage;
