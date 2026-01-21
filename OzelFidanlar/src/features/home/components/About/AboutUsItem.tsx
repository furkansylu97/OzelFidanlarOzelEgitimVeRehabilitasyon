import type { FC } from "react";
import type { AboutFeature } from "../../data/About/aboutUsData";

interface AboutUsItemProps {
  item: AboutFeature;
}

const AboutUsItem: FC<AboutUsItemProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group flex gap-6 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#001064] bg-[#001064]/10 text-[#001064] transition-colors duration-300 group-hover:bg-[#001064] group-hover:text-[#FFBE34]">
        <Icon size={26} />
      </div>

      <div>
        <h4 className="mb-2 text-xl font-semibold text-gray-900">
          {item.title}
        </h4>
        <p className="text-base leading-relaxed text-gray-600">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default AboutUsItem;
