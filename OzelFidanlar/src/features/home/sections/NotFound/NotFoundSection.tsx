import { Link } from "react-router-dom";
import { Container } from "../../../../shared/components/container/Container";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

const NotFoundSection = () => {
  return (
    <section className="w-full">
      <div className="mb-6 md:mb-10">
        <img
          src={heroDefault}
          alt="Hizmetlerimiz"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center text-center max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
            <span className="text-7xl lg:text-8xl font-extrabold mb-4">
              <span className="text-[#001064]">4</span>
              <span className="text-amber-400">0</span>
              <span className="text-[#f31f23]">4</span>
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mb-2 lg:mb-4">
              Aradığınız Sayfa Bulunamadı
            </h1>

            <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
              Üzgünüz, aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış
              olabilir. Ana sayfaya dönerek gezintinize devam edebilirsiniz.
            </p>

            <div className="flex items-center justify-center">
              <div className="group inline-block mt-6 md:mt-10 lg:mt-14">
                <Link
                  to="/"
                  className="relative inline-block overflow-hidden border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] px-6 lg:px-8 py-3 lg:py-4 font-semibold text-black shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
                >
                  <span className="hidden lg:block absolute left-24 top-6 h-16 w-56 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:-left-8 group-hover:-top-5 group-hover:h-44 group-hover:w-60" />
                  <span className="relative z-10">Anasayfa</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default NotFoundSection;
