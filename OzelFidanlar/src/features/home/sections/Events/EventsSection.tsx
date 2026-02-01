import React from "react";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { activities } from "../../data/Gallery/galleryData";
import EventsCard from "../../components/Events/EventsCard";
import { Container } from "../../../../shared/components/container/Container";

const EventsSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-16">
              <div className="flex items-center justify-center">
                <h1 className="inline-block text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                  Etkinliklerimiz
                </h1>
              </div>
              <div className="flex items-center justify-center text-center text-gray-600 max-w-4xl my-8 pb-16 border-b border-gray-300">
                <p className="text-lg">
                  Merkezimizde düzenlenen tüm etkinlikler, bireylerin gelişimini
                  desteklemek amacıyla uzman ekipler tarafından planlanmaktadır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-12">
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
