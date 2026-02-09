import DyslexiaAndTypesSection from "../../sections/DyslexiaAndTypes/DyslexiaAndTypesSection";
import { Helmet } from "react-helmet-async";

const DyslexiaAndTypesPage = () => {
  return (
    <>
      <Helmet>
        <title>Disleksi Nedir? Türleri ve Belirtileri | Uzman Rehberi</title>
        <meta
          name="description"
          content="Disleksi nedir ve hangi türleri vardır? Fonolojik, görsel ve diğer disleksi çeşitlerini, belirtilerini ve erken destek yöntemlerini uzman bakış açısıyla keşfedin."
        />
      </Helmet>

      <DyslexiaAndTypesSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default DyslexiaAndTypesPage;
