import SpecialLearningDisabilityWhatIsSection from "../../sections/SpecialLearningDisabilityWhatIs/SpecialLearningDisabilityWhatIsSection";
import { Helmet } from "react-helmet-async";

const SpecialLearningDisabilityWhatIsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Özgül Öğrenme Güçlüğü Nedir? | Belirtiler ve Eğitim Yaklaşımı
        </title>
        <meta
          name="description"
          content="Özgül öğrenme güçlüğü nedir? Disleksi ve öğrenme farklılıkları hakkında bilimsel bilgiler, erken belirtiler ve destek süreci hakkında uzman rehberini keşfedin."
        />
      </Helmet>
      
      <SpecialLearningDisabilityWhatIsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default SpecialLearningDisabilityWhatIsPage;
