import { Link } from "react-router-dom";
import aboutImage from "../../../../assets/images/home/about/about.jpg";
import { aboutFeatures } from "../../data/About/aboutData";
import AboutItem from "../../components/About/AboutItem";

const AboutSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[40vh] lg:h-[60vh] w-full overflow-hidden">
        <img
          src={aboutImage}
          alt="Hakkımızda"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative mt-2 lg:-mt-32 flex justify-center">
        <div className="w-full max-w-sm md:max-w-lg lg:max-w-3xl rounded-sm bg-white p-8 lg:p-10 shadow-gray-500 shadow-xl">
          <h2 className="mb-8 lg:mb-10 pl-1 inline-block border-l-4 border-amber-300 bg-[#001064]/10 text-2xl lg:text-3xl font-bold text-gray-900">
            Hakkımızda
          </h2>

          <p className="text-base lg:text-lg mb-8 lg:mb-10 leading-relaxed text-gray-600">
            Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi olarak, her bireyin
            potansiyelinin doğru yaklaşım ve güvenli bir eğitim ortamıyla ortaya
            çıkarılabileceğine inanıyoruz. Bilimsel temellere dayanan, birey
            odaklı eğitim anlayışımızla; gelişimi bütüncül bir bakış açısıyla
            ele alıyor, her birey için sürdürülebilir çözümler sunuyoruz.
          </p>

          <div className="mt-10 grid gap-6 grid-cols-1 lg:grid-cols-2">
            {aboutFeatures.map((item) => (
              <AboutItem key={item.id} item={item} />
            ))}
          </div>

          <div className="group inline-block mt-14">
            <Link
              to="/about"
              className="relative inline-block overflow-hidden border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] px-8 py-4 font-semibold text-black shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
            >
              <span className="hidden lg:block absolute left-32 top-6 h-16 w-56 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:-left-8 group-hover:-top-5 group-hover:h-44 group-hover:w-60" />
              <span className="relative z-10"> Daha Fazlası</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
