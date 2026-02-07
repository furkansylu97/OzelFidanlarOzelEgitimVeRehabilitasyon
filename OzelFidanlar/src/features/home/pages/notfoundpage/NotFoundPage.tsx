import React from "react";
import NotFoundSection from "../../sections/NotFound/NotFoundSection";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <NotFoundSection />
      <section aria-hidden className="h-10 lg:h-24" />
    </>
  );
};

export default NotFoundPage;
