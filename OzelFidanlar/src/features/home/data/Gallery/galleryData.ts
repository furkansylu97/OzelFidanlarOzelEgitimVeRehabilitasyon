import GalleryImage1 from "../../../../assets/images/gallery/gallery-1.jpg";
import GalleryImage2 from "../../../../assets/images/gallery/gallery-2.jpg";
import GalleryImage3 from "../../../../assets/images/gallery/gallery-3.jpg";
import GalleryImage4 from "../../../../assets/images/gallery/gallery-4.jpg";
import GalleryImage5 from "../../../../assets/images/gallery/gallery-5.jpg";
import GalleryImage6 from "../../../../assets/images/gallery/gallery-6.jpg";
import GalleryImage7 from "../../../../assets/images/gallery/gallery-7.jpg";
import GalleryImage8 from "../../../../assets/images/gallery/gallery-8.jpg";

export type ActivityCategory =
  | "Bireysel Terapi"
  | "Grup Terapisi"
  | "Sanat ve Yaratıcı Etkinlikler"
  | "Bilişsel ve Sosyal Etkinlikler"
  | "Hareket ve Motor Etkinlikler"
  | "Farkındalık ve Güvenlik Etkinlikleri";

export interface Activity {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  category: ActivityCategory;
  image: string;
  isFeatured?: boolean;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "İnce Motor Etkinlikleri",
    shortDescription:
      "İnce motor becerileri ve el-göz koordinasyonunu desteklemeye yönelik yapılandırılmış etkinlikler.",
    description:
      "İnce motor etkinlikleri, bireylerin günlük yaşam becerilerinde önemli rol oynayan el-göz koordinasyonu ve motor planlama yetkinliklerini desteklemeyi amaçlar. Ergoterapi temelli çalışmalar; kavrama, kesme, boyama ve sıralama gibi uygulamalarla yapılandırılmış ve güvenli bir ortamda gerçekleştirilir.",
    category: "Hareket ve Motor Etkinlikler",
    image: GalleryImage1,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Kaba Motor ve Denge Etkinlikleri",
    shortDescription:
      "Denge, koordinasyon ve büyük kas gruplarını destekleyen hareket temelli grup etkinlikleri.",
    description:
      "Bu etkinlikler, bireylerin kaba motor becerilerini ve bedensel farkındalıklarını artırmayı hedefler. Uzmanlar eşliğinde planlanan hareket çalışmaları; denge, yön bulma ve koordinasyonu destekleyici uygulamalar içerir.",
    category: "Hareket ve Motor Etkinlikler",
    image: GalleryImage2,
  },
  {
    id: 3,
    title: "Yaratıcı Sanat Etkinlikleri",
    shortDescription:
      "Sanat temelli uygulamalarla duygusal ifade, yaratıcılık ve üretkenliğin desteklenmesi.",
    description:
      "Yaratıcı sanat etkinlikleri, bireylerin duygu ve düşüncelerini sanat yoluyla ifade etmelerini destekler. Resim, boyama ve farklı materyallerle gerçekleştirilen çalışmalar; dikkat, yaratıcılık ve içsel farkındalık gelişimini hedefler.",
    category: "Sanat ve Yaratıcı Etkinlikler",
    image: GalleryImage3,
  },
  {
    id: 4,
    title: "Afet Farkındalık Etkinlikleri",
    shortDescription:
      "Olası afet durumlarına yönelik bilinç ve güvenli davranış geliştirmeyi amaçlayan etkinlikler.",
    description:
      "Bu etkinlikler, afet durumlarında doğru ve güvenli davranışların benimsenmesini destekler. Uygulamalı ve bilgilendirici içerikler ile farkındalık ve sorumluluk bilinci güçlendirilir.",
    category: "Farkındalık ve Güvenlik Etkinlikleri",
    image: GalleryImage4,
  },
  {
    id: 5,
    title: "Dil ve İletişim Etkinlikleri",
    shortDescription:
      "İletişim, ifade ve dil becerilerini desteklemeye yönelik bireysel olarak planlanan çalışmalar.",
    description:
      "Dil ve iletişim etkinlikleri, bireylerin kendilerini daha etkin ifade etmelerini desteklemeyi amaçlar. Alıcı ve ifade edici dil, kelime dağarcığı ve iletişimsel etkileşim alanlarında kişiye özel yapılandırılmış uygulamalar gerçekleştirilir.",
    category: "Bireysel Terapi",
    image: GalleryImage5,
    isFeatured: true,
  },
  {
    id: 6,
    title: "Konuşma ve Artikülasyon Etkinlikleri",
    shortDescription:
      "Konuşma anlaşılırlığını ve ses üretimini destekleyen bireysel terapi etkinlikleri.",
    description:
      "Bu etkinlikler, seslerin doğru ve anlaşılır biçimde üretilmesini desteklemeyi hedefler. Artikülasyon çalışmaları ve ağız-motor uygulamalar ile iletişim becerilerinin etkinliği artırılır.",
    category: "Bireysel Terapi",
    image: GalleryImage6,
  },
  {
    id: 7,
    title: "Kutu Oyunları ve Etkileşim Etkinlikleri",
    shortDescription:
      "Dikkat, hafıza, problem çözme ve sosyal etkileşimi destekleyen grup etkinlikleri.",
    description:
      "Bu etkinlikler, bilişsel süreçlerin desteklenmesiyle birlikte sosyal etkileşim ve grup uyumu becerilerini güçlendirmeyi amaçlar. Yapılandırılmış uygulamalar ile iş birliği ve iletişim becerileri geliştirilir.",
    category: "Bilişsel ve Sosyal Etkinlikler",
    image: GalleryImage7,
    isFeatured: true,
  },
  {
    id: 8,
    title: "Dinamik Grup Etkinlikleri",
    shortDescription:
      "Hareket temelli grup çalışmalarıyla sosyal uyum ve motor becerilerin desteklenmesi.",
    description:
      "Dinamik grup etkinlikleri, bireylerin hareket yoluyla fiziksel, sosyal ve iletişim becerilerini geliştirmeyi hedefler. Programlar, yapılandırılmış ve güvenli bir ortamda uzmanlar eşliğinde yürütülür.",
    category: "Grup Terapisi",
    image: GalleryImage8,
  },
];
