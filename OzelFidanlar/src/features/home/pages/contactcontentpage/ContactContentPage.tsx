import React from "react";
import ContactContentSection from "../../sections/ContactContent/ContactContentSection";
import ContactHeaderSection from "../../sections/ContactContent/ContactHeaderSection";
import ContactProcessSection from "../../sections/ContactContent/ContactProcessSection";
import ContactMapSection from "../../sections/ContactContent/ContactMapSection";
import ContactCtaSection from "../../sections/ContactContent/ContactCtaSection";

const ContactContentPage = () => {
  return (
    <>
      <ContactHeaderSection />
      <ContactProcessSection />
      <ContactContentSection />
      <ContactMapSection />
      <ContactCtaSection />
      <section aria-hidden className="h-0 lg:h-24" />
    </>
  );
};

export default ContactContentPage;
