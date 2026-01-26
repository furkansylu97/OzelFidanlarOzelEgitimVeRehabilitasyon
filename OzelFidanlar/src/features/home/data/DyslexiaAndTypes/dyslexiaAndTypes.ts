import { FaBookOpen, FaLanguage, FaPenNib, FaBrain } from "react-icons/fa";

export const dislexiaAndTypes = {
  hero: {
    title: "Disleksi Nedir?",
    imageAlt: "Disleksi ve Çeşitleri",
  },

  intro: [
    "Disleksi, bireyin zekâ düzeyi normal veya normalin üzerinde olmasına rağmen okuma, yazma ve dil temelli becerilerde yaşadığı özgül öğrenme güçlüğüdür.",

    "Disleksi yaşam boyu devam eden nörogelişimsel bir farklılıktır ve doğru destekle bireyin akademik ve sosyal yaşamı başarılı şekilde sürdürülebilir.",
  ],

  paragraphs: [
    `
    Disleksi, harfleri tanıma, sesleri ayırt etme ve kelimeleri doğru şekilde
    çözümleme süreçlerinde yaşanan güçlüklerle kendini gösterir. Bu durum
    bireyin öğrenme hızını ve akademik performansını etkileyebilir.
    `,
    `
    Disleksiye sahip bireyler genellikle yaratıcı düşünme, problem çözme ve
    görsel algı alanlarında güçlü yönlere sahiptir. Ancak bu güçlü yönler,
    akademik zorluklar nedeniyle çoğu zaman fark edilemeyebilir.
    `,
    `
    Erken tanılama ve bireyselleştirilmiş eğitim programları sayesinde disleksi
    bireyin öğrenme sürecini sınırlayan bir engel olmaktan çıkar.
    `,
  ],

  highlights: [
    {
      icon: FaBookOpen,
      title: "Fonolojik Disleksi",
      text: "Sesleri ayırt etme, harf ve ses ilişkisini kurmada zorluk yaşanır. Yeni ve bilinmeyen kelimelerin okunması güçtür.",
    },
    {
      icon: FaLanguage,
      title: "Yüzeysel Disleksi",
      text: "Kelimeyi bütün olarak tanımada güçlük görülür. Düzensiz yazılan kelimeler sıkça yanlış okunur.",
    },
    {
      icon: FaPenNib,
      title: "Görsel Disleksi",
      text: "Harflerin ve kelimelerin görsel olarak ayırt edilmesinde zorlanma yaşanır. Harf atlama veya ters okuma görülebilir.",
    },
    {
      icon: FaBrain,
      title: "Derin Disleksi",
      text: "Kelimenin anlamını değiştiren okuma hataları görülür. Bu tür daha nadir ve karmaşık bir disleksi türüdür.",
    },
  ],

  closing: [
    "Disleksi türleri bireyden bireye farklılık gösterebilir ve birden fazla tür aynı anda görülebilir.",

    "Uzman değerlendirmesiyle belirlenen uygun eğitim yaklaşımları, bireyin öğrenme potansiyelini en üst düzeye çıkarmayı amaçlar.",
  ],
};
