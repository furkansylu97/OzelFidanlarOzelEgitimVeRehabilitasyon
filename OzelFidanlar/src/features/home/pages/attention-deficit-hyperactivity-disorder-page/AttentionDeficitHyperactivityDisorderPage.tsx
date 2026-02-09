import AttentionDeficitHyperactivityDisorderSection from "../../sections/AttentionDeficitHyperactivityDisorder/AttentionDeficitHyperactivityDisorderSection";
import { Helmet } from "react-helmet-async";

const AttentionDeficitHyperactivityDisorderPage = () => {
  return (
    <>
      <Helmet>
        <title>Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB) Nedir?</title>
        <meta
          name="description"
          content="Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB) nedir? Belirtileri, nedenleri ve destek süreçleri hakkında uzman bakışıyla güvenilir bilgiler edinin."
        />
      </Helmet>
      
      <AttentionDeficitHyperactivityDisorderSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default AttentionDeficitHyperactivityDisorderPage;
