import ContactContentSection from "../../sections/ContactContent/ContactContentSection";
import ContactHeaderSection from "../../sections/ContactContent/ContactHeaderSection";
import ContactProcessSection from "../../sections/ContactContent/ContactProcessSection";
import ContactMapSection from "../../sections/ContactContent/ContactMapSection";
import ContactCtaSection from "../../sections/ContactContent/ContactCtaSection";
import { Helmet } from "react-helmet-async";

const ContactContentPage = () => {
  return (
    <>
      <Helmet>
        <title>İletişim | Merkez Adı</title>
        <meta
          name="description"
          content="Bizimle iletişime geçin. Adres, telefon ve randevu bilgileri için iletişim sayfamızı ziyaret edin."
        />
      </Helmet>
      
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
