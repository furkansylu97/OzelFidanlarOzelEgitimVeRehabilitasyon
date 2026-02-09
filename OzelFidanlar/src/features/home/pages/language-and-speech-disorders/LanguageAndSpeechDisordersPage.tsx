import LanguageAndSpeechDisordersSection from "../../sections/LanguageAndSpeechDisorders/LanguageAndSpeechDisordersSection";
import { Helmet } from "react-helmet-async";

const LanguageAndSpeechDisordersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Dil ve Konuşma Bozuklukları Nedir? Çeşitleri ve Destek Süreci
        </title>
        <meta
          name="description"
          content="Dil ve konuşma bozuklukları nedir? Gecikmiş konuşma, artikülasyon bozukluğu ve diğer türleri uzman bakış açısıyla öğrenin ve erken destek sürecini keşfedin."
        />
      </Helmet>
      
      <LanguageAndSpeechDisordersSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default LanguageAndSpeechDisordersPage;
