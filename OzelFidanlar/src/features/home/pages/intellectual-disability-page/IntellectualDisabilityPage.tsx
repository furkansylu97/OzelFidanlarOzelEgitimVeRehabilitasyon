import IntellectualDisabilitySection from "../../sections/IntellectualDisability/IntellectualDisabilitySection";
import { Helmet } from "react-helmet-async";

const IntellectualDisabilityPage = () => {
  return (
    <>
      <Helmet>
        <title>Zihinsel Yetersizlik (Entellektüel Yetersizlik) Nedir?</title>
        <meta
          name="description"
          content="Zihinsel yetersizlik nedir? Tanımı, gelişimsel özellikleri ve destek süreçleri hakkında uzman bakışıyla güvenilir ve anlaşılır bilgiler edinin."
        />
      </Helmet>
      
      <IntellectualDisabilitySection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default IntellectualDisabilityPage;
