import { FaChild, FaHandsHelping, FaHeart } from "react-icons/fa";
import { SiMicrogenetics } from "react-icons/si";

export const downSyndrome = {
  hero: {
    title: "Down Sendromu Nedir?",
    imageAlt: "Down Sendromu",
  },

  intro: [
    "Down sendromu, bireyin 21. kromozomunun fazladan bir kopyaya sahip olması sonucu ortaya çıkan genetik bir farklılıktır.",
    "Bu durum bireyin fiziksel gelişimini, öğrenme hızını ve bazı sağlık alanlarını etkileyebilir.",
  ],

  paragraphs: [
    `
    Down sendromu genetik bir durumdur ve
    doğum öncesinde, doğumda veya
    doğumdan sonra fark edilebilir.
    `,
    `
    Bireylerde hafif, orta veya
    nadiren ağır düzeyde
    öğrenme güçlüğü görülebilir.
    `,
    `
    Down sendromu bir hastalık değil,
    bireyin genetik yapısındaki
    farklılığın doğal bir sonucudur.
    `,
  ],

  highlights: [
    {
      icon: SiMicrogenetics,
      title: "Genetik Farklılık",
      text: "21. kromozomun üç kopya olmasıyla ortaya çıkan genetik bir durumdur.",
    },
    {
      icon: FaChild,
      title: "Gelişimsel Etkiler",
      text: "Motor, dil ve bilişsel gelişim alanlarında destek ihtiyacı olabilir.",
    },
    {
      icon: FaHandsHelping,
      title: "Eğitim ve Destek",
      text: "Erken eğitim ve özel desteklerle bireylerin potansiyeli artırılabilir.",
    },
    {
      icon: FaHeart,
      title: "Sağlık Takibi",
      text: "Kalp, işitme ve görme gibi alanlarda düzenli sağlık kontrolleri önemlidir.",
    },
  ],

  closing: [
    "Down sendromlu bireyler uygun destekle bağımsız yaşam becerileri kazanabilir.",
    "Toplumsal farkındalık ve kapsayıcı yaklaşımlar, yaşam kalitesini önemli ölçüde artırır.",
  ],
};
