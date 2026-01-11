import React from "react";
import WhyUsItem from "../../components/Why-us/WhyUsItem";
import { whyUsData } from "../../data/Why-us/whyUsData";
import { Container } from "../../../../shared/components/container/Container";

const WhyUsSection = () => {
  return (
    <section className="flex justify-center w-full bg-gray-50 my-10">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center">
              <h2 className="inline-block font-bold text-2xl text-gray-900 bg-[#001064]/10 border-l-4 border-amber-300 border-solid">
                Neden Fidanlar
              </h2>
            </div>
            <div className="text-center my-10">
              <p className="text-gray-600 font-medium">
                Her bireyin potansiyelini ortaya çıkarmak için bilimsel
                temellere dayalı ve bireye özel yaklaşımlar sunuyoruz. Güven,
                empati ve süreklilik anlayışıyla her adımda yanında oluyoruz.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 ">
            {whyUsData.map((item, index) => (
              <WhyUsItem key={index} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
