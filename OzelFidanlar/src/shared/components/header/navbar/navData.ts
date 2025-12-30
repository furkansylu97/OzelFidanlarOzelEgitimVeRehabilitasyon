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
        label: "Özel Eğitim Hizmetleri",
        to: "/trainings/special-education",
        children: [
          {
            label: "Özel Öğrenme Güçlüğü",
            to: "/trainings/special-education/special-learning-disability",
          },
          {
            label: "Dil ve Konuşma Bozuklukları",
            to: "/trainings/special-education/speech-and-language-disorders",
          },
          {
            label: "Otizm Spektrum Bozukluğu",
            to: "/trainings/special-education/autism-spectrum-disorder",
          },
          {
            label: "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
            to: "/trainings/special-education/adhd",
          },
          {
            label: "Zihinsel Yetersizlik",
            to: "/trainings/special-education/intellectual-disability",
          },
          {
            label: "Down Sendromu",
            to: "/trainings/special-education/down-syndrome",
          },
          {
            label: "Ergoterapi",
            to: "/trainings/special-education/occupational-therapy",
          },
        ],
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
