import TrainingsSection from "../../sections/Trainings/TrainingsSection";
import { Helmet } from "react-helmet-async";

const TrainingsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Eğitim Programlarımız | Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi
        </title>
        <meta
          name="description"
          content="Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi’nde otizm, öğrenme güçlüğü, dil ve konuşma bozuklukları, DEHB ve ergoterapi alanlarında bireye özel eğitim programları sunuyoruz. Bilimsel ve güvenilir yaklaşımlarla gelişimi destekliyoruz."
        />
      </Helmet>
      
      <TrainingsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default TrainingsPage;
