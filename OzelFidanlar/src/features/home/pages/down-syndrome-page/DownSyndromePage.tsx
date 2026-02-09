import DownSyndromeSection from "../../sections/DownSyndrome/DownSyndromeSection";
import { Helmet } from "react-helmet-async";

const DownSyndromePage = () => {
  return (
    <>
      <Helmet>
        <title>Down Sendromu Nedir? Özellikleri ve Destek Süreçleri</title>
        <meta
          name="description"
          content="Down sendromu nedir? Gelişimsel özellikleri, eğitim süreçleri ve erken destek yaklaşımları hakkında uzman bakışıyla güvenilir bilgiler edinin."
        />
      </Helmet>
      
      <DownSyndromeSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default DownSyndromePage;
