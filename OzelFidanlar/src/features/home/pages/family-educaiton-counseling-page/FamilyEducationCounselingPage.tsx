import FamilyEducationCounselingSection from "../../sections/FamilyEducationCounseling/FamilyEducationCounselingSection";
import { Helmet } from "react-helmet-async";

const FamilyEducationCounselingPage = () => {
  return (
    <>
      <Helmet>
        <title>Aile Eğitimi ve Danışmanlık | Uzman Destek Programları</title>
        <meta
          name="description"
          content="Aile eğitimi ve danışmanlık hizmetlerimizle ebeveynlerin çocuklarının gelişim sürecini sağlıklı şekilde desteklemelerine yardımcı oluyoruz."
        />
      </Helmet>

      <FamilyEducationCounselingSection />
      <section aria-hidden className="h-0 lg:h-24" />
    </>
  );
};

export default FamilyEducationCounselingPage;
