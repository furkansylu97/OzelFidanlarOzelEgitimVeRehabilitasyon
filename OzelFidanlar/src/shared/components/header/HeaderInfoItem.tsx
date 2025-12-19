import React from "react";

interface HeaderInfoItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  iconClassName?: string;
  containerClassName?: string;
}

const HeaderInfoItem: React.FC<HeaderInfoItemProps> = ({
  icon,
  title,
  children,
  iconClassName = "w-6 h-6",
}) => {
  return (
    <div className="flex items-center">
      <div className="bg-[#081c7b] border-2 border-[#74ae38] rounded-full w-12 h-12 flex justify-center items-center">
        <img src={icon} alt={`${title} Icon`} className={iconClassName} />
      </div>
      <div className="text-white text-sm ml-3">
        <div className="font-medium">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default HeaderInfoItem;
