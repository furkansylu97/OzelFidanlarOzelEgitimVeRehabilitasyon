import founder from "../../../../assets/images/home/team/user-founder.jpg";
import user1 from "../../../../assets/images/home/team/user-1.jpg";
import user2 from "../../../../assets/images/home/team/user-2.jpg";
import user3 from "../../../../assets/images/home/team/user-3.jpg";
import user4 from "../../../../assets/images/home/team/user-4.jpg";
import user5 from "../../../../assets/images/home/team/user-5.jpg";
import user6 from "../../../../assets/images/home/team/user-6.jpg";
import user7 from "../../../../assets/images/home/team/user-7.jpg";
import user8 from "../../../../assets/images/home/team/user-8.jpg";
import user9 from "../../../../assets/images/home/team/user-9.jpg";
import user10 from "../../../../assets/images/home/team/user-10.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  isFeatured?: boolean;
  isFounder?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ümit Fidan",
    role: "Kurucu Müdür",
    image: founder,
    isFounder: true,
  },
  {
    id: 2,
    name: "Fatma Bengiz",
    role: "Psikolog",
    image: user1,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Nihal Sarıpınar",
    role: "Dil ve Konuşma Terapisti",
    image: user2,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Elif Büşra Çağlayan",
    role: "Dil ve Konuşma Terapisti",
    image: user3,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Aleyna Ateş",
    role: "Dil ve Konuşma Terapisti",
    image: user4,
  },
  {
    id: 6,
    name: "Mehmet Aksoy",
    role: "Özel Eğitim Öğretmeni",
    image: user5,
  },
  {
    id: 7,
    name: "Gözde Sarı",
    role: "Özel Eğitim Öğretmeni",
    image: user6,
  },
  {
    id: 8,
    name: "Selver Hurma Yılmaz",
    role: "Özel Eğitim Öğretmeni",
    image: user7,
  },
  {
    id: 9,
    name: "Hıdır Bekin",
    role: "Özel Eğitim Öğretmeni",
    image: user8,
  },
  {
    id: 10,
    name: "Fikriye Şahin",
    role: "Yardımcı Personel",
    image: user9,
  },
  {
    id: 11,
    name: "Osman Çelik",
    role: "Şoför",
    image: user10,
  },
];
