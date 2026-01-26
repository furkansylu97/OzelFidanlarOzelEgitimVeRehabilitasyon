import { Link } from "react-router-dom";

interface AutismSpectrumDisorderLinkCardProps {
  title: string;
  description: string;
  path: string;
}

const AutismSpectrumDisorderLinkCard = ({
  title,
  description,
  path,
}: AutismSpectrumDisorderLinkCardProps) => {
  return (
    <div className="rounded-md border border-gray-300 p-5 bg-sky-300/20 hover:bg-white shadow-lg shadow-gray-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-2 text-xl font-semibold text-gray-800 border-b border-gray-300 pb-2">
        {title}
      </h3>

      <p className="my-5 text-gray-600">{description}</p>

      <div className="group inline-block">
        <Link
          to={path}
          className="relative inline-block overflow-hidden border border-[#ffda68]
          bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)]
          px-8 py-4 font-semibold text-black
          shadow-[rgba(33,35,38,0.1)_0_10px_10px_-10px]"
        >
          <span
            className="absolute left-32 top-6 h-16 w-56 rounded-full bg-white
            transition-all duration-300 ease-in-out
            group-hover:-left-8 group-hover:-top-5
            group-hover:h-44 group-hover:w-60"
          />
          <span className="relative z-10">Detaylı Bilgi</span>
        </Link>
      </div>
    </div>
  );
};

export default AutismSpectrumDisorderLinkCard;
