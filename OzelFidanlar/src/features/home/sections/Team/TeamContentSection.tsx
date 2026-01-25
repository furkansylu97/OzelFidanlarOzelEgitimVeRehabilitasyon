import { Container } from "../../../../shared/components/container/Container";
import { teamMembers } from "../../data/Team/teamData";
import TeamCard from "../../components/Team/TeamCard";
import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

const TeamContentSection = () => {
  const founder = teamMembers.find((m) => m.isFounder);
  const otherMembers = teamMembers.filter((m) => !m.isFounder);

  return (
    <section>
      <div className="mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-72 w-full object-cover"
        />
      </div>
      <div className="flex justify-center mb-16">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="inline-block pl-1 text-3xl font-bold border-l-4 border-amber-300 bg-[#001064]/10 text-gray-900">
              Kadromuz
            </h1>
          </div>

          <div className="flex items-center justify-center text-center text-gray-600 max-w-4xl my-8 pb-16 border-b border-gray-300">
            <p className="text-lg">
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
                  <div className="mb-16 flex justify-center">
                    <div className="mx-auto w-full max-w-96">
                      <TeamCard member={founder} />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-16 grid-cols-3">
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
