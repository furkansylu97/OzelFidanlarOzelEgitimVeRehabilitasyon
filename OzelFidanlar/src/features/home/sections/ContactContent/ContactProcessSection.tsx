import React from "react";
import { Container } from "../../../../shared/components/container/Container";

const steps = [
  {
    step: "01",
    title: "Formu Doldurun",
    description: "İhtiyacınıza uygun hizmeti seçerek formu doldurun.",
  },
  {
    step: "02",
    title: "Size Ulaşalım",
    description: "Uzman ekibimiz en kısa sürede sizinle iletişime geçsin.",
  },
  {
    step: "03",
    title: "İlk Görüşme",
    description: "Durumunuza özel yol haritasını birlikte oluşturalım.",
  },
];

const ContactProcessSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-center">
                <h2 className="inline-block text-3xl font-bold tracking-tight">
                  İletişim Sürecimiz
                </h2>
              </div>
              <p className="text-lg text-gray-600 pt-8">
                Bizimle iletişime geçtikten sonra süreç şu şekilde ilerler
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <span className="text-amber-400 font-bold text-xl">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactProcessSection;
