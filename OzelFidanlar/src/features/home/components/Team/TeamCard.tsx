import type { TeamMember } from "../../data/Team/teamData";

interface TeamCardProps {
  member: TeamMember;
  priority?: boolean;
}

const TeamCard = ({ member, priority }: TeamCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm lg:shadow-sm transition motion-safe:hover:shadow-lg shadow-gray-500">
      <div className="h-[40vh] md:[50vh] lg:h-96 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-110"
        />
      </div>

      <div className="p-4 md:p-5 lg:p-6">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-base text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
