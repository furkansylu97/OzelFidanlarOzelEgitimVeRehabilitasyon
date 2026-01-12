import type { IconType } from "react-icons";
import {
  FaUserFriends,
  FaBrain,
  FaHeart,
  FaHandsHelping,
} from "react-icons/fa";

export interface AboutFeature {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: 1,
    title: "Birey Odaklı Eğitim",
    description:
      "Her bireyin ihtiyaçlarına göre özel olarak planlanan programlar.",
    icon: FaUserFriends,
  },
  {
    id: 2,
    title: "Bilimsel Yaklaşım",
    description: "Güncel ve kanıta dayalı eğitim ve terapi yöntemleri.",
    icon: FaBrain,
  },
  {
    id: 3,
    title: "Güvenli Ortam",
    description: "Sevgi, saygı ve güven temelli destekleyici eğitim atmosferi.",
    icon: FaHeart,
  },
  {
    id: 4,
    title: "Aile İş Birliği",
    description: "Ailelerle sürekli iletişim ve ortak gelişim süreci.",
    icon: FaHandsHelping,
  },
];
