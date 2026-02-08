import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { activities } from "../../data/Gallery/galleryData";
import GalleryCard from "../../components/Gallery/GalleryCard";
import { Container } from "../../../../shared/components/container/Container";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const featuredActivities = activities.filter(
    (activity) => activity.isFeatured,
  );

  return (
    <section className="w-full">
      <div className="mb-6 lg:mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container className="border-b pb-12 md:pb-14 lg:pb-16 border-gray-300">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-4xl mb-12 md:mb-14 lg:mb-16">
              <div className="flex items-center justify-center">
                <h1 className="inline-block text-2xl lg:text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                  Etkinliklerimiz
                </h1>
              </div>
              <div
                className="flex items-center justify-center text-center 
                text-gray-600 max-w-xs md:max-w-md lg:max-w-4xl 
              my-2 md:my-4 lg:my-8 pb-10 lg:pb-16 border-b border-gray-300"
              >
                <p className="text-base lg:text-lg leading-relaxed">
                  Merkezimizde düzenlenen etkinlikler; katılımcıların sosyal,
                  bilişsel ve duygusal gelişimini desteklemek amacıyla özenle
                  planlanır. Atölye çalışmaları, grup etkinlikleri ve özel gün
                  organizasyonları ile hem etkileşimi hem de aktif katılımı
                  teşvik eden, güvenli ve destekleyici bir ortam sunmayı
                  hedefliyoruz. Tüm etkinliklerimiz, bireysel farklılıklar
                  gözetilerek profesyonel bir yaklaşım ile hayata geçirilir.
                </p>
              </div>
            </div>

            <div className="grid rid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 ">
              {featuredActivities.map((activity) => (
                <GalleryCard key={activity.id} activity={activity} />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="group inline-block mt-10 lg:mt-14">
                <Link
                  to="/gallery/events"
                  className="relative inline-block overflow-hidden border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] px-6 lg:px-8 py-3 lg:py-4 font-semibold text-black shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
                >
                  <span className="hidden lg:block absolute left-36 top-6 h-16 w-56 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:-left-8 group-hover:-top-5 group-hover:h-44 group-hover:w-60" />
                  <span className="relative z-10">Detayları İncele</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default GallerySection;
