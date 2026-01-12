import type { FC } from "react";
import type { AboutFeature } from "../../data/About/aboutData";

interface AboutItemProps {
  item: AboutFeature;
}

const AboutItem: FC<AboutItemProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-start gap-5">
      <div className="flex justify-center">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full 
          border-2 border-[#001064] bg-[#001064]/10 text-[#001064]"
        >
          <Icon size={24} />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
        <p className="text-base text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

export default AboutItem;
