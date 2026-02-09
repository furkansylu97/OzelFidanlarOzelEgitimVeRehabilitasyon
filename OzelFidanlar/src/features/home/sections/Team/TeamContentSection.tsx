import { Container } from "../../../../shared/components/container/Container";
import { teamMembers } from "../../data/Team/teamData";
import TeamCard from "../../components/Team/TeamCard";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

const TeamContentSection = () => {
  const founder = teamMembers.find((m) => m.isFounder);
  const otherMembers = teamMembers.filter((m) => !m.isFounder);

  return (
    <section>
      <div className="mb-6 md:mb-10">
        <img
          src={heroDefault}
          alt="Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi uzman kadrosu"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="inline-block pl-1 text-2xl lg:text-3xl font-bold border-l-4 border-amber-300 bg-[#001064]/10 text-gray-900">
            Kadromuz
          </h1>

          <div
            className="flex items-center justify-center text-center 
          text-gray-600 max-w-xs md:max-w-md lg:max-w-4xl 
            my-2 md:my-4 lg:my-8 pb-10 lg:pb-16 px-2 lg:px-0 border-b border-gray-300"
          >
            <p className="text-base lg:text-lg leading-relaxed">
              Kurumumuz, alanında uzmanlaşmış ve mesleki etik değerleri ön
              planda tutan profesyonel kadrosuyla; bireylerin gelişim
              süreçlerini bilimsel ve bütüncül bir bakış açısıyla ele
              almaktadır. Disiplinler arası ekip çalışması ve
              bireyselleştirilmiş uygulamalar sayesinde, her bireyin
              ihtiyaçlarına uygun, güvenli ve sürdürülebilir çözümler sunmayı
              temel ilke edinerek gelişim süreçlerine değer katmayı amaçlıyoruz.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div>
              <div>
                {founder && (
                  <div className="mb-12 lg:mb-16 flex justify-center">
                    <div className="mx-auto w-full max-w-xs lg:max-w-96">
                      <TeamCard member={founder} />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                {otherMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TeamContentSection;
