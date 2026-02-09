import SpecialLearningDisabilitySymptomsSection from "../../sections/SpecialLearningDisabilitySymptoms/SpecialLearningDisabilitySymptomsSection";
import { Helmet } from "react-helmet-async";

const SpecialLearningDisabilitySymptomsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Özgül Öğrenme Güçlüğü Belirtileri | Erken İşaretler ve Uzman Rehberi
        </title>
        <meta
          name="description"
          content="Özgül öğrenme güçlüğü belirtileri nelerdir? Okuma, yazma ve matematikte görülen erken işaretleri ve ne zaman uzman desteği alınması gerektiğini öğrenin."
        />
      </Helmet>

      <SpecialLearningDisabilitySymptomsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default SpecialLearningDisabilitySymptomsPage;
