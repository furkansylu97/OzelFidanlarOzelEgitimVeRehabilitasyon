import type { TeamMember } from "../../data/Team/teamData";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg shadow-gray-500">
      <div className="h-96 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-base text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
