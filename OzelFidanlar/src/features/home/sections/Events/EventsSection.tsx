import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { activities } from "../../data/Gallery/galleryData";
import EventsCard from "../../components/Events/EventsCard";
import { Container } from "../../../../shared/components/container/Container";

const EventsSection = () => {
  return (
    <section className="w-full">
      <div className="mb-6 lg:mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-4xl mb-12 md:mb-16">
              <div className="flex items-center justify-center">
                <h1 className="inline-block text-2xl md:text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                  Etkinliklerimiz
                </h1>
              </div>
              <div className="flex items-center justify-center text-center text-gray-600 max-w-xs md:max-w-md lg:max-w-4xl my-2 md:my-4 lg:my-8 pb-10 lg:pb-16 px-2 lg:px-0 border-b border-gray-300">
                <p className="text-base lg:text-lg">
                  Merkezimizde düzenlenen tüm etkinlikler, bireylerin gelişimini
                  desteklemek amacıyla uzman ekipler tarafından planlanmaktadır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {activities.map((activity) => (
                <EventsCard
                  key={activity.id}
                  activity={activity}
                  hoverContent="full"
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default EventsSection;
