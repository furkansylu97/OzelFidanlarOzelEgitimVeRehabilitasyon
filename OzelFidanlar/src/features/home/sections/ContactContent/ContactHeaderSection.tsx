import React from "react";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { Container } from "../../../../shared/components/container/Container";
import { contactTrust } from "../../data/ContactContent/contactTrust";
import ContactTrustItem from "../../components/ContactContent/ContactTrustItem";

const ContactHeaderSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10">
        <img
          src={heroDefault}
          alt="İletişim Hero"
          className="h-72 w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center">
              <h1 className="inline-block text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                Bizimle İletişime Geçin
              </h1>
            </div>

            <p className="text-lg text-gray-600 max-w-6xl my-8 pb-12 border-b border-gray-300">
              Merkezimiz, sunduğumuz hizmetler ve etkinlikler hakkında detaylı
              bilgi almak, sorularınızı iletmek veya randevu oluşturmak için
              bizimle dilediğiniz zaman iletişime geçebilirsiniz.
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 w-full">
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
