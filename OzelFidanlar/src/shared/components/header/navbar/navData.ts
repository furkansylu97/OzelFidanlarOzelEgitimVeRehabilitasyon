export interface NavItemType {
  label: string;
  to?: string;
  children?: NavItemType[];
}

export const navData: NavItemType[] = [
  {
    label: "Ana Sayfa",
    to: "/",
  },
  {
    label: "Hakkımızda",
    to: "/about",
    children: [
      {
        label: "Biz Kimiz",
        to: "/about/us",
      },
      {
        label: "Kadromuz",
        to: "/about/team",
      },
    ],
  },
  {
    label: "Eğitimlerimiz",
    to: "/trainings",
    children: [
      {
        label: "Özgül Öğrenme Güçlüğü",
        to: "/trainings/special-learning-disability",
        children: [
          {
            label: "Özgül Öğrenme Güçlüğü Nedir",
            to: "/trainings/special-learning-disability/what-is",
          },
          {
            label: "Özgül Öğrenme Güçlüğü Belirtileri Nelerdir",
            to: "/trainings/special-learning-disability/symptoms",
          },
          {
            label: "Disleksi ve Çeşitleri",
            to: "/trainings/special-learning-disability/dyslexia-types",
          },
        ],
      },
      {
        label: "Dil ve Konuşma Bozuklukları",
        to: "/trainings/speech-and-language-disorders",
        children: [
          {
            label: "Dil ve Konuşma Bozukluğu Nedir",
            to: "/trainings/speech-and-language-disorders/what-is",
          },
          {
            label: "Dil ve Konuşma Bozukluğu Çeşitleri",
            to: "/trainings/speech-and-language-disorders/types",
          },
        ],
      },
      {
        label: "Otizm Spektrum Bozukluğu",
        to: "/trainings/autism-spectrum-disorder",
        children: [
          {
            label: "Otizm Spektrum Bozukluğu Nedir",
            to: "/trainings/autism-spectrum-disorder/what-is",
          },
          {
            label: "Otizm Spektrum Bozukluğu Belirtileri Nelerdir",
            to: "/trainings/autism-spectrum-disorder/symptoms",
          },
          {
            label: "Otizm Spektrum Bozukluğunun Nedeni Nelerdir",
            to: "/trainings/autism-spectrum-disorder/causes",
          },
        ],
      },
      {
        label: "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
        to: "/trainings/adhd",
      },
      {
        label: "Zihinsel Yetersizlik",
        to: "/trainings/intellectual-disability",
      },
      {
        label: "Down Sendromu",
        to: "/trainings/down-syndrome",
      },
      {
        label: "Ergoterapi",
        to: "/trainings/occupational-therapy",
      },
    ],
  },
  {
    label: "Hizmetlerimiz",
    to: "/services",
    children: [
      {
        label: "Aile Eğitimi ve Danışmanlık",
        to: "/services/family-education-counseling",
      },
      {
        label: "Ergenlik Dönemi Danışmanlığı",
        to: "/services/adolescent-counseling",
      },
      {
        label: "Akademik Beceri Eğitimi",
        to: "/services/academic-skills-education",
      },
      {
        label: "Rehberlik ve Psikolojik Danışmanlık",
        to: "/services/guidance-psychological-counseling",
      },
    ],
  },
  {
    label: "Galeri",
    to: "/gallery",
    children: [
      {
        label: "Etkinlikler",
        to: "/gallery/events",
      },
      {
        label: "Medya",
        to: "/gallery/media",
      },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "İletişim",
    to: "/contact",
  },
];
