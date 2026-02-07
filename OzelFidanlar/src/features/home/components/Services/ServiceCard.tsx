import { Link } from "react-router-dom";
import type { ServiceCategory } from "../../data/Services/servicesData";

interface ServiceCardProps {
  data: ServiceCategory;
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  const Icon = data.icon;

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-300 shadow-md transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl">
      <div className="flex h-40 md:h-48 lg:h-56 items-center justify-center bg-[#4fb3bf]">
        <Icon className="text-6xl md:text-8xl lg:text-9xl text-rose-700" />
      </div>

      <div className="flex flex-1 flex-col gap-3 md:gap-4 p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900">{data.label}</h3>

        <p className="line-clamp-3 text-base leading-relaxed text-gray-600">
          {data.description}
        </p>

        <div className="mt-auto">
          <Link
            to={`/services/${data.slug}`}
            className="group/button relative inline-block overflow-hidden border border-[#ffda68]
              bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)]
              px-6 lg:px-8 py-3 lg:py-4 font-semibold text-black
              shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
          >
            <span
              className="hidden lg:block absolute left-36 top-6 h-16 w-56 rounded-full bg-white
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

export default ServiceCard;
