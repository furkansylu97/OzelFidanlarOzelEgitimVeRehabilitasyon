import EventsSection from "../../sections/Events/EventsSection";
import { Helmet } from "react-helmet-async";

const EventsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Etkinliklerimiz | Özel Eğitim Atölye ve Grup Çalışmaları</title>
        <meta
          name="description"
          content="Özel eğitim merkezimizde düzenlenen atölye çalışmaları, grup etkinlikleri ve gelişim odaklı programları keşfedin. Çocukların sosyal, bilişsel ve duygusal gelişimini destekleyen etkinliklerimizi inceleyin."
        />
      </Helmet>
      <EventsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default EventsPage;
