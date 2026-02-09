import AcademicSkillsEducationSection from "../../sections/AcademicSkillsEducation/AcademicSkillsEducationSection";
import { Helmet } from "react-helmet-async";

const AcademicSkillsEducationPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Akademik Beceri Eğitimi | Dikkat ve Öğrenme Destek Programları
        </title>
        <meta
          name="description"
          content="Dikkat, öğrenme ve ders çalışma becerilerini geliştirmeye yönelik bireysel akademik destek programlarımızla çocukların eğitim sürecini güçlendiriyoruz."
        />
      </Helmet>
      
      <AcademicSkillsEducationSection />
      <section aria-hidden className="h-0 lg:h-24" />
    </>
  );
};

export default AcademicSkillsEducationPage;
