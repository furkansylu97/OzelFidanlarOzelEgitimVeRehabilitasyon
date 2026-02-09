import LanguageAndSpeechDisorderTypesSection from "../../sections/LanguageAndSpeechDisorderTypes/LanguageAndSpeechDisorderTypesSection";
import { Helmet } from "react-helmet-async";

const LanguageAndSpeechDisorderTypesPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Dil ve Konuşma Bozukluğu Çeşitleri | Türleri ve Özellikleri
        </title>
        <meta
          name="description"
          content="Dil ve konuşma bozukluğu çeşitleri nelerdir? Artikülasyon bozukluğu, kekemelik ve diğer türleri uzman bakış açısıyla keşfedin."
        />
      </Helmet>
      
      <LanguageAndSpeechDisorderTypesSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default LanguageAndSpeechDisorderTypesPage;
