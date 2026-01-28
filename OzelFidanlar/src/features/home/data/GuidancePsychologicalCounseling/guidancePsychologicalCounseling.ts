import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

export interface GuidancePsychologicalCounselingData {
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

export const guidancePsychologicalCounselingData: GuidancePsychologicalCounselingData =
  {
    title: "Rehberlik ve Psikolojik Danışmanlık",
    slug: "guidance-psychological-counseling",

    hero: {
      title: "Rehberlik ve Psikolojik Danışmanlık",
      subtitle:
        "Rehberlik ve psikolojik danışmanlık hizmeti; bireyin kendini tanımasını, duygusal, sosyal ve akademik alanlarda daha sağlıklı kararlar almasını destekleyen profesyonel bir süreçtir.",
      image: heroDefault,
    },

    about: {
      paragraphs: [
        "Rehberlik ve psikolojik danışmanlık süreci; bireyin yaşadığı akademik, duygusal ve sosyal zorlukları anlamasına ve bu alanlarda çözüm yolları geliştirmesine yardımcı olur.",
        "Bu süreçte bireyin ihtiyaçları, yaş düzeyi ve yaşam koşulları dikkate alınarak güven temelli, etik ve bilimsel yaklaşımlar doğrultusunda destek sağlanır. Amaç, bireyin içsel kaynaklarını fark etmesini ve yaşam kalitesini artırmasını sağlamaktır.",
      ],
    },

    benefits: [
      "Kendini tanıma ve farkındalık düzeyinin artması",
      "Duygusal dengeyi güçlendirme ve stresle başa çıkma becerileri",
      "Akademik ve sosyal problemlere sağlıklı çözüm yolları geliştirme",
      "Özgüven ve karar verme becerilerinin desteklenmesi",
    ],

    scope: [
      "Bireysel rehberlik ve psikolojik danışmanlık görüşmeleri",
      "Akademik, sosyal ve duygusal sorunlara yönelik destek",
      "Sınav kaygısı, motivasyon ve özgüven çalışmaları",
      "Hedef belirleme, karar verme ve problem çözme becerileri",
    ],

    targetAudience: [
      "Akademik veya duygusal destek ihtiyacı olan öğrenciler",
      "Sınav kaygısı ve stres yaşayan bireyler",
      "Kendini tanımak ve kişisel gelişimini desteklemek isteyenler",
      "Karar verme sürecinde profesyonel rehberlik arayan bireyler",
    ],

    note: "Rehberlik ve psikolojik danışmanlık süreci, gizlilik ve etik ilkeler çerçevesinde bireyin ihtiyaçlarına göre planlanır.",
  };
