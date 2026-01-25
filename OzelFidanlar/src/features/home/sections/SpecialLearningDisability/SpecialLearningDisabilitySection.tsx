import React from "react";
import sldImage from "../../../../assets/images/home/hero/slide-2.jpg";
import { specialLearningDisabilityLinks } from "../../data/SpecialLearningDisability/specialLearningDisabilityLinks";
import SpecialLearningDisabilityLinkCard from "../../components/SpecialLearningDisability/SpecialLearningDisabilityLinkCard";

const SpecialLearningDisabilitySection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={sldImage}
          alt="Özgül Öğrenme Güçlüğü"
          className="h-[calc(var(--viewport-height)*0.7)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative -mt-32 flex justify-center">
        <div className="w-full max-w-3xl rounded-sm bg-white p-10 shadow-xl shadow-gray-500">
          <h2 className="inline-block mb-10 pl-1 text-3xl font-bold text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
            Özgül Öğrenme Güçlüğü
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Özgül Öğrenme Güçlüğü, bireyin zeka düzeyi normal ya da normalin
            üzerinde olmasına rağmen; okuma, yazma, matematik veya akademik
            becerilerin kazanılmasında yaşıtlarına göre belirgin güçlükler
            yaşamasıyla ortaya çıkan nörogelişimsel bir farklılıktır.
            <br />
            <br />
            Bu durum, bireyin öğrenme isteği ya da çabasıyla ilgili değildir.
            Beynin bilgiyi algılama, işleme ve ifade etme süreçlerindeki
            farklılıklardan kaynaklanır.
            <br />
            <br />
            Erken fark edilip doğru şekilde desteklendiğinde, bireyin akademik
            başarısı ve sosyal uyumu önemli ölçüde güçlendirilebilir.
          </p>

          <div className="my-14 flex justify-center">
            <div className="grid max-w-lg grid-cols-1 gap-16">
              {specialLearningDisabilityLinks.map((item) => (
                <SpecialLearningDisabilityLinkCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  path={item.path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialLearningDisabilitySection;
