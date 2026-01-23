import { Link } from "react-router-dom";
import type { TrainingsCategory } from "../../data/Trainings/trainingsData";

interface TrainingCardProps {
  data: TrainingsCategory;
}

const TrainingCard = ({ data }: TrainingCardProps) => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-300 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-96 overflow-hidden">
        <img
          src={data.image}
          alt={data.label}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold text-gray-900">{data.label}</h3>

        <p className="line-clamp-3 text-base leading-relaxed text-gray-600">
          {data.description}
        </p>

        <div className="mt-auto">
          <Link
            to={`/trainings/${data.slug}`}
            className="group/button relative inline-block overflow-hidden border border-[#ffda68]
              bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)]
              px-8 py-4 font-semibold text-black
              shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
          >
            <span
              className="absolute left-36 top-6 h-16 w-56 rounded-full bg-white
                transition-all duration-300 ease-in-out
                group-hover/button:-left-8
                group-hover/button:-top-5
                group-hover/button:h-44
                group-hover/button:w-60"
            />
            <span className="relative z-10">Detayları İncele</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
