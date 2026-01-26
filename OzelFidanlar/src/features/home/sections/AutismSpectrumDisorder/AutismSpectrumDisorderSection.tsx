import React from "react";
import asdImage from "../../../../assets/images/home/hero/slide-4.jpg";
import { autismSpectrumDisorderLinks } from "../../data/AutismSpectrumDisorder/autismSpectrumDisorderLinks";
import AutismSpectrumDisorderLinkCard from "../../components/AutismSpectrumDisorder/AutismSpectrumDisorderLinkCard";

const AutismSpectrumDisorderSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={asdImage}
          alt="Otizm Spektrum Bozukluğu"
          className="h-[calc(var(--viewport-height)*0.7)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative -mt-32 flex justify-center">
        <div className="w-full max-w-3xl rounded-sm bg-white p-10 shadow-xl shadow-gray-500">
          <h2 className="inline-block mb-10 pl-1 text-3xl font-bold text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
            Otizm Spektrum Bozukluğu
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Otizm Spektrum Bozukluğu (OSB), bireyin sosyal iletişim, etkileşim
            ve davranış alanlarında farklılıklar göstermesiyle karakterize
            edilen nörogelişimsel bir durumdur.
            <br />
            <br />
            Otizm bir hastalık değil; bireyin dünyayı algılama, iletişim kurma
            ve çevresiyle etkileşim biçimindeki farklılıklardan oluşan geniş bir
            spektrumu ifade eder.
            <br />
            <br />
            Erken tanı ve uygun eğitim desteğiyle, otizmli bireylerin yaşam
            kalitesi ve toplumsal uyumu önemli ölçüde artırılabilir.
          </p>

          <div className="my-14 flex justify-center">
            <div className="grid max-w-lg grid-cols-1 gap-16">
              {autismSpectrumDisorderLinks.map((item) => (
                <AutismSpectrumDisorderLinkCard
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

export default AutismSpectrumDisorderSection;
