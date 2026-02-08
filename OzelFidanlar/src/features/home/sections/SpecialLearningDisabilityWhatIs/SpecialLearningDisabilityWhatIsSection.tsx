import sldImage from "../../../../assets/images/home/hero/slide-2.jpg";
import { specialLearningDisabilityWhatIs } from "../../data/SpecialLearningDisabilityWhatIs/specialLearningDisabilityWhatIs";

const SpecialLearningDisabilityWhatIsSection: React.FC = () => {
  const { hero, intro, paragraphs, highlights, closing } =
    specialLearningDisabilityWhatIs;

  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={sldImage}
          alt={hero.imageAlt}
          className="h-[40vh] lg:h-[60vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mt-2 lg:-mt-32 flex justify-center">
        <div className="w-full max-w-sm md:max-w-xl lg:max-w-3xl rounded-sm bg-white p-10 shadow-xl shadow-gray-500">
          <h2 className="mb-8 lg:mb-10 inline-block border-l-4 border-amber-300 bg-[#001064]/10 pl-1 text-lg lg:text-2xl font-bold text-gray-900">
            {hero.title}
          </h2>

          <div className="space-y-6 mb-6 lg:mb-0 text-base lg:text-lg leading-relaxed text-gray-600">
            {intro.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600">
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <div className="my-10 md:my-12 lg:my-14 grid grid-cols-1 gap-10 lg:gap-12">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="group flex max-w-sm md:max-w-md lg:max-w-xl gap-4 rounded-md border border-gray-300 p-5 shadow-lg shadow-gray-500 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
                  >
                    <div className="mt-1 text-amber-300 transition-colors duration-300 motion-safe:group-hover:text-[#001064]">
                      <Icon className="w-8 lg:w-10 h-8 lg:h-10 motion-safe:group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="px-2">
                      <h2 className="text-base
                       lg:text-xl font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-base lg:text-lg text-gray-600 my-2">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6 text-base lg:text-lg leading-relaxed text-gray-600">
            {closing.map((text, i) => (
              <p
                key={i}
                className={
                  i === closing.length - 1 ? "font-medium text-gray-700" : ""
                }
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialLearningDisabilityWhatIsSection;
