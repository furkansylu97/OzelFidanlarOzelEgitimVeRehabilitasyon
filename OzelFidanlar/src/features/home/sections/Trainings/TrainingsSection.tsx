import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { Container } from "../../../../shared/components/container/Container";
import TrainingCard from "../../components/Trainings/TrainingCard";
import { trainingsData } from "../../data/Trainings/trainingsData";

const TrainingsSection = () => {
  return (
    <section className="w-full">
      <div className="mb-6 lg:mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-[30vh] md:h-64 lg:h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center justify-center">
                <h1 className="inline-block text-2xl lg:text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                  Eğitimlerimiz
                </h1>
              </div>
              <div
                className="flex items-center justify-center text-center 
              text-gray-600 max-w-xs md:max-w-md lg:max-w-4xl 
              my-2 md:my-4 lg:my-8 pb-10 lg:pb-16 border-b border-gray-300"
              >
                <p className="text-base lg:text-lg leading-relaxed">
                  Bireysel ihtiyaçlarınızı ve öğrenme hedeflerinizi merkeze
                  alan, bilimsel temellere dayalı eğitim programlarımız; bilgiyi
                  yalnızca aktarmayı değil, kalıcı ve uygulanabilir hale
                  getirmeyi amaçlar. Size en uygun eğitim modelini keşfetmek
                  için içeriklerimizi inceleyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-9 lg:gap-10">
              {trainingsData.map((item) => (
                <TrainingCard key={item.slug} data={item} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default TrainingsSection;
