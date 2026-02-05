import { Container } from "../../../../shared/components/container/Container";
import AboutUsItem from "../../components/About/AboutUsItem";
import { aboutFeatures } from "../../data/About/aboutUsData";

const AboutUsFeaturesSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col gap-6 my-8 lg:my-10">
            <div className="flex justify-center">
              <h2 className="mb-6 lg:mb-10 inline-block pl-1 text-xl lg:text-2xl font-bold border-l-4 border-amber-300 bg-[#001064]/10 text-gray-900">
                Eğitim Anlayışımız
              </h2>
            </div>

            <div className="grid gap-6 lg:gap-10 grid-cols-1 lg:grid-cols-2">
              {aboutFeatures.map((item) => (
                <AboutUsItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutUsFeaturesSection;
