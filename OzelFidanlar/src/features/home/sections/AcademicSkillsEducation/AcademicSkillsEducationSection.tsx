import { Container } from "../../../../shared/components/container/Container";
import { FaUserCheck, FaCheckCircle, FaHandshake } from "react-icons/fa";
import { academicSkillsEducationData } from "../../data/AcademicSkillsEducation/academicSkillsEducation";

const AcademicSkillsEducationSection = () => {
  const { hero, about, benefits, scope, targetAudience, note } =
    academicSkillsEducationData;

  return (
    <section className="w-full">
      <div className="relative h-80 w-full">
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="mb-4 text-4xl font-bold text-white">{hero.title}</h1>
            <p className="text-lg text-gray-200">{hero.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Container>
          <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr]">
            <main className="space-y-14">
              <section>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Hizmet Hakkında
                </h2>

                {about.paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="mt-4 text-lg leading-relaxed text-gray-700 first:mt-0"
                  >
                    {text}
                  </p>
                ))}
              </section>

              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Akademik Beceri Eğitimi Size Neler Kazandırır?
                </h3>

                <ul className="space-y-3 text-gray-700">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg">
                      <FaCheckCircle className="text-amber-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  Hizmet Kapsamı
                </h3>

                <ul className="space-y-3 text-gray-700">
                  {scope.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <FaHandshake className="shrink-0 text-lg text-[#74ae38]" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            <aside className="h-fit rounded-2xl border border-gray-300 bg-gray-50 p-8">
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-gray-900">
                <FaUserCheck className="text-amber-400" />
                Kimler İçin Uygun?
              </h3>

              <ul className="space-y-3 text-gray-700">
                {targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p className="mt-6 border-t border-gray-200 pt-4 text-sm text-gray-600">
                {note}
              </p>
            </aside>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AcademicSkillsEducationSection;
