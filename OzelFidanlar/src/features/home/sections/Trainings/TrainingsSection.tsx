import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";
import { Container } from "../../../../shared/components/container/Container";
import TrainingCard from "../../components/Trainings/TrainingCard";
import { trainingsData } from "../../data/Trainings/trainingsData";

const TrainingsSection = () => {
  return (
    <section className="w-full">
      <div className="mb-10">
        <img
          src={heroDefault}
          alt="heroDefault"
          className="h-72 w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center justify-center">
                <h1 className="inline-block text-3xl font-bold tracking-tight pl-1 text-gray-900 border-l-4 border-amber-300 bg-[#001064]/10">
                  Eğitimlerimiz
                </h1>
              </div>
              <div className="flex items-center justify-center text-center text-gray-600 max-w-4xl my-8 pb-16 border-b border-gray-300">
                <p className="text-lg">
                  Bireysel ihtiyaçlarınızı ve öğrenme hedeflerinizi merkeze
                  alan, bilimsel temellere dayalı eğitim programlarımız; bilgiyi
                  yalnızca aktarmayı değil, kalıcı ve uygulanabilir hale
                  getirmeyi amaçlar. Size en uygun eğitim modelini keşfetmek
                  için içeriklerimizi inceleyebilirsiniz.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
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
