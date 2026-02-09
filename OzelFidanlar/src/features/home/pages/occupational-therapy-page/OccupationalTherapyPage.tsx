import OccupationalTherapySection from "../../sections/OccupationalTherapy/OccupationalTherapySection";
import { Helmet } from "react-helmet-async";

const OccupationalTherapyPage = () => {
  return (
    <>
      <Helmet>
        <title>Ergoterapi Nedir? Çocuklar İçin Ergoterapi Desteği</title>
        <meta
          name="description"
          content="Ergoterapi nedir? Çocuklarda duyu bütünleme, motor beceriler ve günlük yaşam becerilerini destekleyen ergoterapi uygulamaları hakkında uzman bilgiler edinin."
        />
      </Helmet>
      
      <OccupationalTherapySection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default OccupationalTherapyPage;
