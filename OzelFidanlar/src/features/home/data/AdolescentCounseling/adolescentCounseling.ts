import heroDefault from "../../../../assets/images/home/hero/slide-9.jpg";

export interface AdolescenceCounselingData {
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

export const adolescenceCounselingData: AdolescenceCounselingData = {
  title: "Ergenlik Dönemi Danışmanlığı",
  slug: "adolescence-counseling",
  hero: {
    title: "Ergenlik Dönemi Danışmanlığı",
    subtitle:
      "Ergenlik, bireyin kimlik gelişimini şekillendiren; duygusal, sosyal ve bilişsel değişimlerin yoğun yaşandığı kritik bir dönemdir.",
    image: heroDefault,
  },

  about: {
    paragraphs: [
      "Ergenlik dönemi danışmanlığı; bireyin yaşadığı duygusal dalgalanmaları, kimlik arayışını ve sosyal uyum süreçlerini sağlıklı şekilde yönetebilmesini desteklemeyi amaçlar.",
      "Bu süreçte ergenin yaşına, gelişim düzeyine ve bireysel ihtiyaçlarına uygun olarak yapılandırılmış görüşmeler gerçekleştirilir. Danışmanlık süreci; güven, gizlilik ve bilimsel temellere dayalı bir yaklaşımla yürütülür.",
    ],
  },

  benefits: [
    "Duyguları tanıma ve sağlıklı ifade edebilme becerisi",
    "Özgüven ve benlik algısının güçlenmesi",
    "Stres, kaygı ve öfke ile baş etme yollarının geliştirilmesi",
    "Akademik ve sosyal yaşamda karşılaşılan sorunlara çözüm becerisi",
  ],

  scope: [
    "Ergenlik dönemine özgü duygusal ve davranışsal değişimlerin ele alınması",
    "Özgüven, kimlik gelişimi ve benlik saygısının desteklenmesi",
    "Akran ilişkileri ve sosyal uyum becerilerinin güçlendirilmesi",
    "Akademik motivasyon, sınav kaygısı ve stres yönetimi çalışmaları",
  ],

  targetAudience: [
    "Ergenlik dönemindeki çocuklar ve gençler",
    "Duygusal dalgalanmalar yaşayan ergen bireyler",
    "Özgüven ve sosyal uyum sorunları yaşayan gençler",
    "Akademik veya sınav kaygısı yaşayan ergenler",
  ],

  note: "Danışmanlık süreci, ergen bireyin kendini güvende hissedeceği bir ortamda; bireysel farklılıklara saygı duyularak yürütülür.",
};
