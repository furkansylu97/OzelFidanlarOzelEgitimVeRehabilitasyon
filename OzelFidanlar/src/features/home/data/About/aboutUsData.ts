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
      "Her bireyin gelişim düzeyi, öğrenme hızı ve ihtiyaçları doğrultusunda özel olarak planlanan bireyselleştirilmiş eğitim ve terapi programları uyguluyoruz. Eğitim sürecini standart kalıplar yerine kişiye özel çözümlerle şekillendiriyoruz.",
    icon: FaUserFriends,
  },
  {
    id: 2,
    title: "Bilimsel ve Güncel Yaklaşım",
    description:
      "Uyguladığımız tüm eğitim ve terapi yöntemleri, güncel bilimsel araştırmalara ve kanıta dayalı uygulamalara dayanmaktadır. Sürekli gelişen eğitim modellerini yakından takip ederek hizmet kalitemizi sürekli artırıyoruz.",
    icon: FaBrain,
  },
  {
    id: 3,
    title: "Güvenli ve Destekleyici Ortam",
    description:
      "Sevgi, saygı ve güven temelli bir eğitim atmosferi oluşturarak bireylerin kendilerini rahat, değerli ve güvende hissetmelerini sağlıyoruz. Pozitif öğrenme ortamı ile kalıcı gelişimi destekliyoruz.",
    icon: FaHeart,
  },
  {
    id: 4,
    title: "Aile ile Güçlü İş Birliği",
    description:
      "Eğitim sürecinin ayrılmaz bir parçası olarak ailelerle sürekli iletişim halinde çalışıyoruz. Aile katılımını destekleyerek bireyin gelişimini sadece kurumda değil, günlük yaşamın her alanında sürdürülebilir hale getiriyoruz.",
    icon: FaHandsHelping,
  },
];
