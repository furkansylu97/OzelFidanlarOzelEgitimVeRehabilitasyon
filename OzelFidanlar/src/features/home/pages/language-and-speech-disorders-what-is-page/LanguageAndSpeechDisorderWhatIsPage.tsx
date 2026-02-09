import LanguageAndSpeechDisorderWhatIsSection from "../../sections/LanguageAndSpeechDisorderWhatIs/LanguageAndSpeechDisorderWhatIsSection";
import { Helmet } from "react-helmet-async";

const LanguageAndSpeechDisorderWhatIsPage = () => {
  return (
    <>
    <Helmet>
        <title>
          Dil ve Konuşma Bozukluğu Nedir? Belirtileri ve Destek Süreci
        </title>
        <meta
          name="description"
          content="Dil ve konuşma bozukluğu nedir? Çocuklarda görülen belirtiler, nedenleri ve erken destek sürecini uzman bakış açısıyla öğrenin."
        />
      </Helmet>
      
      <LanguageAndSpeechDisorderWhatIsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default LanguageAndSpeechDisorderWhatIsPage;
