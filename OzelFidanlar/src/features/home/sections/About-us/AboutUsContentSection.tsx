import React from "react";
import aboutUsImage from "../../../../assets/images/home/about/aboutus.jpg";

const AboutUsContentSection: React.FC = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <img
          src={aboutUsImage}
          alt="Özel Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi"
          className="h-[calc(var(--viewport-height)*0.7)] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative -mt-32 flex justify-center">
        <div className="w-full max-w-3xl rounded-sm bg-white p-10 shadow-xl shadow-gray-500">
          <h2 className="mb-10 inline-block border-l-4 border-amber-300 bg-[#001064]/10 pl-1 text-3xl font-bold text-gray-900">
            Hakkımızda
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-gray-600">
            Özel Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi olarak, 2002
            yılından bu yana özel eğitim alanında edindiğimiz bilgi, deneyim ve
            mesleki birikimle bireylerin yaşamlarına dokunuyoruz. Kurulduğumuz
            günden bu yana temel amacımız; her bireyin kendi potansiyelini
            keşfedebileceği, güvenli ve destekleyici bir eğitim ortamı
            sunmaktır.
            <br />
            <br />
            Eğitim sürecini yalnızca akademik bir gelişim olarak değil; sosyal,
            duygusal ve davranışsal boyutlarıyla bir bütün olarak ele alıyoruz.
            Alanında uzman, deneyimli ve sürekli kendini geliştiren kadromuzla;
            bilimsel temellere dayalı, bireyselleştirilmiş eğitim ve terapi
            programları uyguluyoruz.
            <br />
            <br />
            Özel Fidanlar’da her birey özeldir. Bu anlayışla; bireysel
            farklılıklara saygı duyan, sürdürülebilir gelişimi hedefleyen ve
            ailelerle güçlü bir iş birliği içerisinde ilerleyen bir yaklaşımı
            benimsiyoruz. Çocuklarımızın ve ailelerinin yaşam kalitesini
            artırmak, bağımsız bireyler olarak topluma kazandırılmalarına katkı
            sağlamak en temel motivasyonumuzdur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContentSection;
