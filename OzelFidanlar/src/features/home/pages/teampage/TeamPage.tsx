import TeamContentSection from "../../sections/Team/TeamContentSection";
import { Helmet } from "react-helmet-async";

const TeamPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Uzman Kadromuz | Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi
        </title>
        <meta
          name="description"
          content="Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi’nin uzman kadrosu; otizm, öğrenme güçlüğü ve dil-konuşma alanlarında profesyonel destek sunar. Deneyimli ekibimizle çocukların gelişimini güvenli ve bilimsel yöntemlerle destekliyoruz."
        />
      </Helmet>
      
      <TeamContentSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default TeamPage;
