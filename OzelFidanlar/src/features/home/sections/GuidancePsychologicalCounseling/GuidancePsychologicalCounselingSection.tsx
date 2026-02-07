import { Container } from "../../../../shared/components/container/Container";
import { FaUserCheck, FaCheckCircle, FaHandshake } from "react-icons/fa";
import { guidancePsychologicalCounselingData } from "../../data/GuidancePsychologicalCounseling/guidancePsychologicalCounseling";

const GuidancePsychologicalCounselingSection = () => {
  const { hero, about, benefits, scope, targetAudience, note } =
    guidancePsychologicalCounselingData;

  return (
    <section className="w-full">
      <div className="relative h-[30vh] md:h-64 lg:h-72 w-full">
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-sm md:max-w-2xl lg:max-w-3xl px-3 lg:px-4">
            <h2 className="mb-3 lg:mb-4 text-xl md:text-2xl lg:text-4xl font-bold text-white">
              {hero.title}
            </h2>
            <p className="text-base lg:text-lg text-gray-200">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Container>
          <div className="grid gap-10 md:gap-14 lg:gap-16 py-12 md:py-16 lg:py-20 lg:grid-cols-[2fr_1fr]">
            <main className="space-y-10 md:space-y-12 lg:space-y-14">
              <section>
                <h2 className="mb-4 md:mb-5 lg:mb-6 text-2xl lg:text-3xl font-bold text-gray-900">
                  Hizmet Hakkında
                </h2>

                {about.paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="mt-2 md:mt-3 lg:mt-4 text-base lg:text-lg leading-relaxed text-gray-700 first:mt-0"
                  >
                    {text}
                  </p>
                ))}
              </section>

              <section>
                <h3 className="mb-4 text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                  Rehberlik ve Psikolojik Danışmanlık Size Neler Kazandırır?
                </h3>

                <ul className="space-y-2 lg:space-y-3 text-gray-700">
                  {benefits.map((item, index) => (
                    <li
                      key={index}
                      className="flex lg:items-center gap-2 lg:gap-3 text-base lg:text-lg"
                    >
                      <FaCheckCircle className="mt-2 lg:mt-0 shrink-0 text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-3 lg:mb-4 text-lg lg:text-2xl font-semibold text-gray-900">
                  Hizmet Kapsamı
                </h3>

                <ul className="space-y-2 lg:space-y-3 text-gray-700">
                  {scope.map((item, index) => (
                    <li
                      key={index}
                      className="flex lg:items-center gap-2 lg:gap-3"
                    >
                      <FaHandshake className="mt-1 lg:mt-0 shrink-0 text-lg text-[#74ae38]" />
                      <span className="text-base lg:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            <aside className="h-fit rounded-2xl border border-gray-300 bg-gray-50 p-6 md:p-7 lg:p-8">
              <h3 className="mb-3 lg:mb-4 flex items-center gap-2 lg:gap-3 text-lg font-semibold text-gray-900">
                <FaUserCheck className="text-amber-400" />
                Kimler İçin Uygun?
              </h3>

              <ul className="space-y-2 text-sm lg:text-base lg:space-y-3 text-gray-700">
                {targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="mt-4 lg:mt-6 border-t border-gray-200 pt-3 lg:pt-4 text-sm text-gray-600">
                {note}
              </p>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default GuidancePsychologicalCounselingSection;
