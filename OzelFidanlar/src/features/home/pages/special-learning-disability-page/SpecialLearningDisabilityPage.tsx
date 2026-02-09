import SpecialLearningDisabilitySection from "../../sections/SpecialLearningDisability/SpecialLearningDisabilitySection";
import { Helmet } from "react-helmet-async";

const SpecialLearningDisabilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Özgül Öğrenme Güçlüğü Eğitimi | Fidanlar Özel Eğitim Merkezi
        </title>
        <meta
          name="description"
          content="Özgül öğrenme güçlüğü ve disleksi alanında bireye özel eğitim programları sunuyoruz. Fidanlar Özel Eğitim Merkezi’nde erken müdahale ve bilimsel yöntemlerle çocukların akademik ve sosyal gelişimini destekliyoruz."
        />
      </Helmet>
      
      <SpecialLearningDisabilitySection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default SpecialLearningDisabilityPage;
