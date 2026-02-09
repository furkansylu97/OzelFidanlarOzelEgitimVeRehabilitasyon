import AutismSpectrumDisorderCausesSection from "../../sections/AutismSpectrumDisorderCauses/AutismSpectrumDisorderCausesSection";
import { Helmet } from "react-helmet-async";

const AutismSpectrumDisorderCausesPage = () => {
  return (
    <>
      <Helmet>
        <title>Otizm Neden Olur? Otizm Spektrum Bozukluğunun Nedenleri</title>
        <meta
          name="description"
          content="Otizm neden olur? Otizm Spektrum Bozukluğunun genetik ve çevresel nedenleri hakkında bilimsel temelli bilgileri uzman bakışıyla öğrenin."
        />
      </Helmet>

      <AutismSpectrumDisorderCausesSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default AutismSpectrumDisorderCausesPage;
