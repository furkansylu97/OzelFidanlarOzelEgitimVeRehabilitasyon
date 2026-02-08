import { DEFAULT_HERO_COLORS } from "./heroButtonColors";
import slide1 from "../../../../assets/images/home/hero/slide-1.jpg";
import slide2 from "../../../../assets/images/home/hero/slide-2.jpg";
import slide3 from "../../../../assets/images/home/hero/slide-3.jpg";
import slide4 from "../../../../assets/images/home/hero/slide-4.jpg";
import slide5 from "../../../../assets/images/home/hero/slide-5.jpg";
import slide6 from "../../../../assets/images/home/hero/slide-6.jpg";
import slide7 from "../../../../assets/images/home/hero/slide-7.jpg";
import slide8 from "../../../../assets/images/home/hero/slide-8.jpg";

export type HexColor = `#${string}`;

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  button?: {
    text: string;
    link: string;
  };

  colors: {
    title: HexColor;
    subtitle?: HexColor;
    description: HexColor;
    overlay: HexColor;
  };
}

export const HeroSlides: HeroSlide[] = [
  {
    image: slide1,

    title: "Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi",
    subtitle: "Her Birey Özeldir, Onları Keşfetmek Gerekir",
    description:
      "Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi olarak, bireylerin potansiyellerini en doğru şekilde ortaya çıkarmak için bilimsel temelli, bireyselleştirilmiş eğitim ve rehabilitasyon hizmetleri sunuyoruz. Alanında uzman kadromuzla her bireyin gelişim yolculuğuna güvenle eşlik ediyoruz",

    button: {
      text: "Detayları İncele",
      link: "/about",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide2,

    title: "Özgül Öğrenme Güçlüğü",
    subtitle: "",
    description:
      "Özgül Öğrenme Güçlüğü nedir, nasıl fark edilir ve nasıl desteklenir? Bu sürece dair merak edilen tüm detayları uzman bakış açısıyla keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/special-learning-disability",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide3,

    title: "Dil ve Konuşma Bozuklukları",
    subtitle: "",
    description:
      "Dil ve Konuşma Bozuklukları nedir, nasıl fark edilir ve nasıl desteklenir? İletişim gelişimini etkileyen bu sürece dair tüm detayları keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/speech-and-language-disorders",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide4,

    title: "Otizm Spectrum Bozukluğu",
    subtitle: "",
    description:
      "Otizm Spektrum Bozukluğu nedir, nasıl fark edilir ve nasıl desteklenir? Bu sürece dair tüm detayları uzman yaklaşımıyla keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/autism-spectrum-disorder",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide5,

    title: "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
    subtitle: "",
    description:
      "Dikkat Eksikliği ve Hiperaktivite Bozukluğu nedir, nasıl fark edilir ve nasıl desteklenir? Bu sürece dair merak edilen tüm detayları keşfedin.",

    button: {
      text: "Detayları İncele",
      link: "/trainings/adhd",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide6,

    title: "Zihinsel Yetersizlik",
    subtitle: "",
    description:
      "Zihinsel Yetersizlik nedir, nasıl fark edilir ve nasıl desteklenir? Bu sürece dair merak edilen tüm detayları keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/intellectual-disability",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide7,

    title: "Down Sendromu",
    subtitle: "",
    description:
      "Down Sendromu nedir, nasıl fark edilir ve nasıl desteklenir? Bu sürece dair merak edilen tüm detayları keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/down-syndrome",
    },

    colors: DEFAULT_HERO_COLORS,
  },
  {
    image: slide8,

    title: "Ergoterapi",
    subtitle: "",
    description:
      "Ergoterapi nedir ve günlük yaşam becerilerini nasıl destekler? Bu terapi yaklaşımına dair tüm detayları keşfedin",

    button: {
      text: "Detayları İncele",
      link: "/trainings/occupational-therapy",
    },

    colors: DEFAULT_HERO_COLORS,
  },
];
