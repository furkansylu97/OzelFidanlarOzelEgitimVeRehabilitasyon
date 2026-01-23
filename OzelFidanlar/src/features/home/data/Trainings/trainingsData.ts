import slide2 from "../../../../assets/images/home/hero/slide-2.jpg";
import slide3 from "../../../../assets/images/home/hero/slide-3.jpg";
import slide4 from "../../../../assets/images/home/hero/slide-4.jpg";
import slide5 from "../../../../assets/images/home/hero/slide-5.jpg";
import slide6 from "../../../../assets/images/home/hero/slide-6.jpg";
import slide7 from "../../../../assets/images/home/hero/slide-7.jpg";
import slide8 from "../../../../assets/images/home/hero/slide-8.jpg";

export interface TrainingsCategory {
  label: string;
  slug: string;
  description: string;
  image: string;
}

export const trainingsData: TrainingsCategory[] = [
  {
    label: "Özgül Öğrenme Güçlüğü",
    slug: "special-learning-disability",
    description:
      "Özgül öğrenme güçlüğü, bireyin okuma, yazma ve matematik alanlarında yaşadığı öğrenme farklılıklarını kapsar.",
    image: slide2,
  },
  {
    label: "Dil ve Konuşma Bozuklukları",
    slug: "speech-and-language-disorders",
    description:
      "Dil gelişimi ve konuşma akıcılığını etkileyen bozukluklara yönelik eğitim ve destek programları.",
    image: slide3,
  },
  {
    label: "Otizm Spektrum Bozukluğu",
    slug: "autism-spectrum-disorder",
    description:
      "Otizm spektrum bozukluğu olan bireyler için yapılandırılmış ve bireysel eğitim yaklaşımları.",
    image: slide4,
  },
  {
    label: "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
    slug: "adhd",
    description:
      "DEHB tanısı olan bireyler için dikkat, dürtü kontrolü ve akademik becerileri destekleyici eğitimler.",
    image: slide5,
  },
  {
    label: "Zihinsel Yetersizlik",
    slug: "intellectual-disability",
    description:
      "Zihinsel yetersizliği olan bireyler için bilişsel gelişimi, günlük yaşam becerilerini ve bağımsızlığı desteklemeye yönelik, bireysel ihtiyaçlara göre planlanmış özel eğitim programları.",
    image: slide6,
  },
  {
    label: "Down Sendromu",
    slug: "down-syndrome",
    description:
      "Down sendromlu bireylerin bilişsel, sosyal ve günlük yaşam becerilerini geliştirmeye yönelik, bireysel ihtiyaçlara göre planlanmış özel eğitim programları.",
    image: slide7,
  },
  {
    label: "Ergoterapi",
    slug: "occupational-therapy",
    description:
      "Bireylerin günlük yaşam aktivitelerine bağımsız katılımını artırmayı hedefleyen; ince motor beceriler, duyusal bütünleme, dikkat ve öz bakım alanlarını destekleyen ergoterapi uygulamaları.",
    image: slide8,
  },
];
