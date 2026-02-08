import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { Container } from "../../../../shared/components/container/Container";
import { contactTrust } from "../../data/ContactContent/contactTrust";
import ContactTrustItem from "../../components/ContactContent/ContactTrustItem";

const ContactHeaderSection = () => {
  return (
    <section className="w-full">
      <div className="mb-6 lg:mb-10">
        <img
          src={heroDefault}
          alt="İletişim Hero"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center">
              <h2 className="inline-block text-2xl md:text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                Bizimle İletişime Geçin
              </h2>
            </div>

            <p className="text-base lg:text-lg text-gray-600 max-w-xs md:max-w-md lg:max-w-6xl my-4 lg:my-8 pb-10 lg:pb-16 px-2 lg:px-0 border-b border-gray-300">
              Merkezimiz, sunduğumuz hizmetler ve etkinlikler hakkında detaylı
              bilgi almak, sorularınızı iletmek veya randevu oluşturmak için
              bizimle dilediğiniz zaman iletişime geçebilirsiniz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-10 lg:mt-12 w-full">
              {contactTrust.map((item) => (
                <ContactTrustItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactHeaderSection;
