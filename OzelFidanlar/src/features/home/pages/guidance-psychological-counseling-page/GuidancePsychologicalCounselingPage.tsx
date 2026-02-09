import GuidancePsychologicalCounselingSection from "../../sections/GuidancePsychologicalCounseling/GuidancePsychologicalCounselingSection";
import { Helmet } from "react-helmet-async";

const GuidancePsychologicalCounselingPage = () => {
  return (
    <>
      <Helmet>
        <title>Rehberlik ve Psikolojik Danışmanlık | Profesyonel Destek</title>
        <meta
          name="description"
          content="Çocukların ve ailelerin duygusal, sosyal ve psikolojik gelişimini destekleyen profesyonel rehberlik ve psikolojik danışmanlık hizmetleri sunuyoruz."
        />
      </Helmet>
      
      <GuidancePsychologicalCounselingSection />
      <section aria-hidden className="h-0 lg:h-24" />
    </>
  );
};

export default GuidancePsychologicalCounselingPage;
