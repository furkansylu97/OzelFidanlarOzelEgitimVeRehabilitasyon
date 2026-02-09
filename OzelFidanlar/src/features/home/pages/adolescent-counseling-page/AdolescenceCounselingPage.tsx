import AdolescenceCounselingSection from "../../sections/AdolescentCounseling/AdolescenceCounselingSection";
import { Helmet } from "react-helmet-async";

const AdolescenceCounselingPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Ergenlik Dönemi Danışmanlığı | Profesyonel Psikolojik Destek
        </title>
        <meta
          name="description"
          content="Ergenlik döneminde yaşanan duygusal ve davranışsal zorluklara yönelik profesyonel danışmanlık hizmetleriyle gençlerin ve ailelerin yanında yer alıyoruz."
        />
      </Helmet>
      
      <AdolescenceCounselingSection />
      <section aria-hidden className="h-0 lg:h-24" />
    </>
  );
};

export default AdolescenceCounselingPage;
