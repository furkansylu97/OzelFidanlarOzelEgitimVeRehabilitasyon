import { PiUsersThreeBold } from "react-icons/pi";
import { GiBrain } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { GrLineChart } from "react-icons/gr";
import type { IconType } from "react-icons";

interface WhyUsItem {
  icon: IconType;
  title: string;
  description: string;
}

export const whyUsData: WhyUsItem[] = [
  {
    icon: PiUsersThreeBold,
    title: "Uzman Kadro",
    description:
      "Alanında deneyimli uzmanlarımızla her bireye özel çözümler sunuyoruz.",
  },
  {
    icon: GiBrain,
    title: "Bireysel Eğitim Planı",
    description:
      "Bilimsel temellere dayalı, bireyin ihtiyaçlarına özel programlar oluşturuyoruz.",
  },
  {
    icon: TbHeartHandshake,
    title: "Aile Odaklı Yaklaşım",
    description:
      "Ailelerle sürekli iletişim halinde, süreci birlikte yönetiyoruz.",
  },
  {
    icon: GrLineChart,
    title: "Ölçülebilir Gelişim",
    description:
      "Düzenli değerlendirmelerle gelişimi takip ediyoruz.",
  },
];
