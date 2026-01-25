import React from "react";
import TrainingsSection from "../../sections/Trainings/TrainingsSection";

const TrainingsPage: React.FC = () => {
  return (
    <>
      <TrainingsSection />
      <section aria-hidden className="h-24" />
    </>
  );
};

export default TrainingsPage;
