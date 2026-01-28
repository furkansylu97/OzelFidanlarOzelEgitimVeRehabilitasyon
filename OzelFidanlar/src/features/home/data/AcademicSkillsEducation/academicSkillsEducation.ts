import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

export interface AcademicSkillsEducationData {
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

export const academicSkillsEducationData: AcademicSkillsEducationData = {
  title: "Akademik Beceri Eğitimi",
  slug: "academic-skills-education",

  hero: {
    title: "Akademik Beceri Eğitimi",
    subtitle:
      "Akademik beceri eğitimi; öğrencinin öğrenme sürecini planlamasını, verimli çalışmasını ve akademik potansiyelini en üst düzeye çıkarmasını hedefleyen yapılandırılmış bir destek sürecidir.",
    image: heroDefault,
  },

  about: {
    paragraphs: [
      "Akademik beceri eğitimi; öğrencinin ders çalışma alışkanlıklarını geliştirmeyi, zaman yönetimini öğrenmesini ve öğrenme sürecini daha etkili hale getirmesini amaçlar.",
      "Bu eğitim sürecinde öğrencinin bireysel öğrenme stili, akademik ihtiyaçları ve hedefleri dikkate alınarak kişiye özel bir yol haritası oluşturulur. Süreç, motivasyonu artıran ve sürdürülebilir başarıyı destekleyen bilimsel yaklaşımlarla yürütülür.",
    ],
  },

  benefits: [
    "Etkili ders çalışma ve öğrenme stratejileri kazanma",
    "Zaman yönetimi ve planlama becerilerinin geliştirilmesi",
    "Akademik motivasyonun ve sorumluluk bilincinin artması",
    "Sınavlara daha sistemli ve kontrollü hazırlanabilme",
  ],

  scope: [
    "Öğrenme stillerinin belirlenmesi ve uygun çalışma yöntemlerinin geliştirilmesi",
    "Zaman yönetimi, planlı çalışma ve hedef belirleme çalışmaları",
    "Dikkat, odaklanma ve motivasyon artırıcı teknikler",
    "Sınav süreci yönetimi ve akademik stresle baş etme becerileri",
  ],

  targetAudience: [
    "Akademik performansını artırmak isteyen öğrenciler",
    "Ders çalışma alışkanlığı kazanmakta zorlanan bireyler",
    "Zaman yönetimi ve planlama sorunu yaşayan öğrenciler",
    "Sınav sürecinde destek ihtiyacı duyan öğrenciler",
  ],

  note: "Akademik beceri eğitimi süreci, öğrencinin bireysel ihtiyaçlarına göre planlanır ve düzenli geri bildirimlerle desteklenir.",
};
