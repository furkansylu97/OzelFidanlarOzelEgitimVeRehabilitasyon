import React from "react";
import EventsSection from "../../sections/Events/EventsSection";

const EventsPage: React.FC = () => {
  return (
    <>
      <EventsSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default EventsPage;
