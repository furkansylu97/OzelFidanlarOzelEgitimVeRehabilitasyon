import user1 from "../../../../assets/images/home/team/user-1.jpg";
import user2 from "../../../../assets/images/home/team/user-2.jpg";
import user3 from "../../../../assets/images/home/team/user-3.jpg";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  isFeatured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Fatma Bengiz",
    role: "Psikolog",
    image: user1,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Mehmet Aksoy",
    role: "Özel Eğitim Öğretmeni",
    image: user2,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Elif Büşra Çağlayan",
    role: "Dil ve Konuşma Terapisti",
    image: user3,
    isFeatured: true,
  },
];
