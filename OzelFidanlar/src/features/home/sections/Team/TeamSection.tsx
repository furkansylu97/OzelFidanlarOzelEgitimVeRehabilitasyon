import { teamMembers } from "../../data/Team/teamData";
import TeamCard from "../../components/Team/TeamCard";
import { Container } from "../../../../shared/components/container/Container";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const featuredTeam = teamMembers.filter((member) => member.isFeatured);

  return (
    <section className="flex flex-col items-center justify-center">
      <Container>
        <div className="flex flex-col">
          <div className="mb-12 flex items-center justify-center">
            <h2 className="inline-block mt-3 pl-1 text-3xl font-bold border-l-4 text-gray-900 border-amber-300 bg-[#001064]/10 ">
              Uzman Kadromuz
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-16 ">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="group inline-block mt-14">
              <Link
                to="/about/team"
                className="relative inline-block overflow-hidden border border-[#ffda68] bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)] px-8 py-4 font-semibold text-black shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
              >
                <span className="absolute left-32 top-6 h-16 w-56 rounded-full bg-white transition-all duration-300 ease-in-out group-hover:-left-8 group-hover:-top-5 group-hover:h-44 group-hover:w-60" />
                <span className="relative z-10">Tüm Ekibi Gör</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
