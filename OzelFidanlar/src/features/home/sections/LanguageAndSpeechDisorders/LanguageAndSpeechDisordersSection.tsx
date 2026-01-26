import React from "react";
import lasdImage from "../../../../assets/images/home/hero/slide-3.jpg";
import { languageAndSpeechDisordersLinks } from "../../data/LanguageAndSpeechDisorders/languageAndSpeechDisordersLinks";
import LanguageAndSpeechDisordersLinkCard from "../../components/LanguageAndSpeechDisorders/LanguageAndSpeechDisordersLinkCard";

const LanguageAndSpeechDisordersSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={lasdImage}
          alt="Dil ve Konuşma Bozuklukları"
          className="h-[calc(var(--viewport-height)*0.7)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative -mt-32 flex justify-center">
        <div className="w-full max-w-3xl rounded-sm bg-white p-10 shadow-xl shadow-gray-500">
          <h2 className="mb-10 inline-block border-l-4 border-amber-300 bg-[#001064]/10 pl-1 text-3xl font-bold text-gray-900">
            Dil ve Konuşma Bozuklukları
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Dil ve konuşma bozuklukları; bireyin dili anlama, ifade etme,
            sesleri doğru üretme veya akıcı konuşma becerilerinde yaşadığı
            güçlükleri kapsayan gelişimsel farklılıklardır.
            <br />
            <br />
            Bu bozukluklar çocukluk döneminde fark edilebileceği gibi,
            nörolojik, gelişimsel ya da çevresel faktörlere bağlı olarak
            sonradan da ortaya çıkabilir.
            <br />
            <br />
            Erken tanı ve doğru terapi yaklaşımlarıyla bireyin iletişim
            becerileri önemli ölçüde geliştirilebilir.
          </p>

          <div className="my-14 flex justify-center">
            <div className="grid max-w-lg grid-cols-1 gap-16">
              {languageAndSpeechDisordersLinks.map((item) => (
                <LanguageAndSpeechDisordersLinkCard
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

export default LanguageAndSpeechDisordersSection;
