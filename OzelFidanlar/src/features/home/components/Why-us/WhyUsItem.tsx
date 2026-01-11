import type { IconType } from "react-icons";

interface WhyUsItemProps {
  icon: IconType;
  title: string;
  description: string;
}

const WhyUsItem = ({ icon: Icon, title, description }: WhyUsItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-[#001064]/20 via-amber-200/20 to-transparent blur-xl" />
      </div>
      <div className="relative z-10 flex flex-col justify-center gap-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#001064]/10 text-[#001064] transition-colors duration-300 group-hover:bg-[#001064] group-hover:text-[#FFBE34]">
            <Icon size={36} />
          </div>
        </div>

        <div>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#001064]">
            {title}
          </h3>
          <p className="text-base font-medium leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsItem;
