import type { FC } from "react";
import type { AboutFeature } from "../../data/About/aboutUsData";

interface AboutUsItemProps {
  item: AboutFeature;
}

const AboutUsItem: FC<AboutUsItemProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="group flex flex-col lg:flex-row items-center gap-4 lg:gap-6 
    bg-white rounded-2xl border-2 border-gray-200 overflow-hidden p-2 lg:p-10 
    transition-all duration-300 motion-safe:hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className="flex h-12 lg:h-16 w-12 lg:w-16 shrink-0 items-center justify-center 
      rounded-full border-2 border-[#001064] bg-[#001064]/10 text-[#001064] 
      transition-colors duration-300 motion-safe:group-hover:bg-[#001064] motion-safe:group-hover:text-[#FFBE34]"
      >
        <Icon size={26} />
      </div>

      <div>
        <h4 className="mb-2 text-lg lg:text-xl text-center lg:text-start font-semibold text-gray-900">
          {item.title}
        </h4>
        <p className="text-base text-center lg:text-start leading-relaxed text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AboutUsItem;
