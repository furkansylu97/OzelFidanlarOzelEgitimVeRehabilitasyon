import mediaImage from "../../../../assets/images/gallery/media-1.jpg";
import { Container } from "../../../../shared/components/container/Container";
import { FaTv, FaCalendarAlt, FaMicrophone } from "react-icons/fa";

const MediaSection: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={mediaImage}
          alt="Özel Eğitimde Ailenin Katkısı"
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mt-4 lg:-mt-32 flex justify-center">
        <Container>
          <div className="mx-auto max-w-sm md:max-w-xl lg:max-w-4xl rounded-2xl bg-white p-2 lg:p-12 shadow-2xl">
            <span className="inline-flex items-center gap-2 mb-4 rounded-full bg-[#001064]/10 px-4 py-1 text-sm font-semibold text-[#001064]">
              <FaTv size={14} />
              Medyada Biz
            </span>

            <div className="mb-4 lg:mb-6">
              <h2 className="inline-block text-xl lg:text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                Özel Eğitimde Ailenin Katkısı
              </h2>
            </div>

            <div className="mb-6 lg:mb-8 lg:flex flex-wrap gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <FaTv className="text-[#001064]" />
                TV Programı
              </span>

              <span className="flex items-center my-2 lg:my-0 gap-2">
                <FaCalendarAlt className="text-[#001064]" />
                2022
              </span>

              <span className="flex items-center gap-2">
                <FaMicrophone className="text-[#001064]" />
                Kurucu Müdür Röportajı
              </span>
            </div>

            <div className="space-y-4 md:space-y-5 lg:space-y-6 text-base lg:text-lg leading-relaxed text-gray-600 mb-8 md:mb-10 lg:mb-12">
              <p>
                Kurucu müdürümüzün konuk olduğu bu programda, özel eğitim
                sürecinde ailenin rolü ve sorumlulukları kapsamlı bir şekilde
                ele alınmıştır. Çocuğun gelişim yolculuğunda ailenin yalnızca
                destekleyici değil, sürecin aktif bir parçası olduğuna dikkat
                çekilmiş; ev ortamında uygulanabilecek sürdürülebilir destek
                modelleri örneklerle paylaşılmıştır.
              </p>

              <p>
                Program kapsamında, eğitim ve terapi süreçlerinin uzman–aile iş
                birliği ile daha etkili ve kalıcı hale geldiği vurgulanmış;
                profesyonel rehberlik ile ailelerin bilinçli yaklaşımlar
                geliştirmesinin önemi üzerinde durulmuştur. Bu yaklaşımın,
                bireyin akademik, sosyal ve duygusal gelişimine doğrudan katkı
                sağladığı ifade edilmiştir.
              </p>

              <p>
                Alanında uzman konukların katkılarıyla zenginleşen yayında,
                ailelerin sürece dahil olmasının yalnızca kurum içi eğitimle
                sınırlı kalmayıp, günlük yaşamın her alanına yayılan bütüncül
                bir gelişim modeli sunduğu aktarılmıştır. Böylece bireyin
                kazanımlarının kalıcı hale gelmesi ve yaşam kalitesinin
                artırılması hedeflenmiştir.
              </p>

              <p>
                Bu yayın, özel eğitim alanında güven temelli, sürdürülebilir ve
                bilimsel yaklaşımların önemini ortaya koyması açısından önemli
                bir referans niteliği taşımakta; aileler ve eğitimciler için yol
                gösterici bir kaynak sunmaktadır.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default MediaSection;
