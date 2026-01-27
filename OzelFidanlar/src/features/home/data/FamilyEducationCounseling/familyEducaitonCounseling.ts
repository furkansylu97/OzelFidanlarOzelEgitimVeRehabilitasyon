import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

export interface FamilyEducationCounselingData {
  title: string;
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  about: {
    paragraphs: string[];
  };
  benefits: string[];
  scope: string[];
  targetAudience: string[];
  note: string;
}

export const familyEducationCounselingData: FamilyEducationCounselingData = {
  title: "Aile Eğitimi ve Danışmanlık",
  slug: "family-education-counseling",
  hero: {
    title: "Aile Eğitimi ve Danışmanlık",
    subtitle:
      "Sağlıklı aile ilişkileri, çocuğun akademik ve duygusal gelişiminin temelini oluşturur.",
    image: heroDefault,
  },
  about: {
    paragraphs: [
      "Aile eğitimi ve danışmanlık hizmetimiz; ebeveynlerin çocuklarının gelişim süreçlerini daha bilinçli şekilde değerlendirmelerini, yaşanan davranışsal ve duygusal zorlukların nedenlerini anlamalarını ve sağlıklı çözüm yolları geliştirmelerini hedefler.",
      "Süreç, ailenin ihtiyaçlarına göre planlanan; bilimsel temelli, etik ilkelere uygun ve yapılandırılmış danışmanlık görüşmelerinden oluşur.",
    ],
  },
  benefits: [
    "Çocuğun gelişimsel ihtiyaçlarını doğru analiz edebilme",
    "Etkili sınır koyma ve davranış yönetimi becerileri",
    "Aile içi iletişimi güçlendiren sağlıklı yaklaşımlar",
    "Ebeveyn olarak daha bilinçli ve güvenli adımlar atabilme",
  ],
  scope: [
    "Ebeveyn tutumları ve aile içi iletişim becerilerinin güçlendirilmesi",
    "Davranış problemleriyle sağlıklı ve sürdürülebilir baş etme yöntemleri",
    "Gelişim dönemlerine uygun ebeveynlik yaklaşımları hakkında rehberlik",
    "Okul ve sosyal yaşamda karşılaşılan zorluklara yönelik aile odaklı destek",
  ],
  targetAudience: [
    "Özel gereksinimli çocuk aileleri",
    "Gelişimsel destek ihtiyacı olan çocuk ebeveynleri",
    "Davranışsal zorluklar yaşayan çocukların aileleri",
    "Ebeveynlik becerilerini güçlendirmek isteyen aileler",
  ],
  note: "Bu hizmet, ailenin güçlü yönlerini destekleyerek çocuğun gelişim sürecini bütüncül bir yaklaşımla ele alır.",
};
