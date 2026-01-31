import React from "react";
import mediaImage from "../../../../assets/images/gallery/media-1.jpg";
import { Container } from "../../../../shared/components/container/Container";
import { Link } from "react-router-dom";

const MediaHighlightSection = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mb-16">
              <h1 className="inline-block text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                Medyada Biz
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                  Özel Eğitimde Ailenin Katkısı
                </h2>

                <p className="text-gray-600 text-lg mb-6">
                  Kurucu müdürümüzün konuk olduğu bu programda, özel eğitim
                  sürecinde ailenin rolü, ev ortamında sürdürülebilir destek
                  yöntemleri ve profesyonel–aile iş birliğinin önemi ele
                  alınmıştır.
                </p>

                <p className="text-gray-500 mb-6">
                  Alanında uzman isimlerin katkılarıyla hazırlanan program,
                  ailelerin bilinçlenmesini ve çocukların gelişim sürecinin daha
                  sağlıklı ilerlemesini hedeflemektedir.
                </p>

                <div className="group inline-block mt-14">
                  <Link
                    to="/gallery/media"
                    className="relative inline-block overflow-hidden border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] px-8 py-4 font-semibold text-black shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
                  >
                    <span className="absolute left-36 top-6 h-16 w-56 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:-left-8 group-hover:-top-5 group-hover:h-44 group-hover:w-60" />
                    <span className="relative z-10">Detayları İncele</span>
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={mediaImage}
                  alt="Özel Eğitimde Ailenin Katkısı Programı"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MediaHighlightSection;
