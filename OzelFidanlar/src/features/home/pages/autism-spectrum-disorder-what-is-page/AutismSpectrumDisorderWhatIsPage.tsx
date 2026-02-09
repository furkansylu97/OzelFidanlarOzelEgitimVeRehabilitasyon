import AutismSpectrumDisorderWhatIsSection from "../../sections/AutismSpectrumDisorderWhatIs/AutismSpectrumDisorderWhatIsSection";
import { Helmet } from "react-helmet-async";

const AutismSpectrumDisorderWhatIsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Otizm Spektrum Bozukluğu Nedir? Belirtiler ve Erken Destek
        </title>
        <meta
          name="description"
          content="Otizm Spektrum Bozukluğu nedir? Erken belirtiler, özellikler ve eğitim desteği hakkında uzman bakış açısıyla kapsamlı bilgi edinin."
        />
      </Helmet>
      
      <AutismSpectrumDisorderWhatIsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default AutismSpectrumDisorderWhatIsPage;
