import {
  FaCommentDots,
  FaMicrophoneAlt,
  FaStream,
  FaBrain,
} from "react-icons/fa";

export const languageAndSpeechDisorderTypes = {
  hero: {
    title: "Dil ve Konuşma Bozukluğu Çeşitleri",
    imageAlt: "Dil ve Konuşma Bozukluğu Çeşitleri",
  },

  intro: [
    "Dil ve Konuşma Bozuklukları, bireyin iletişim becerilerini farklı şekillerde etkileyebilen çeşitli alt türlerden oluşur.",

    "Her bireyin yaşadığı güçlük farklıdır ve doğru destek için bozukluğun türünün doğru şekilde belirlenmesi büyük önem taşır.",
  ],

  paragraphs: [
    `
    Dil bozuklukları, bireyin dili anlama ve kullanma becerilerinde
    yaşadığı güçlükleri kapsarken; konuşma bozuklukları ses üretimi,
    konuşma akıcılığı ve konuşmanın anlaşılırlığıyla ilişkilidir.
    `,
    `
    Bu bozukluklar erken çocukluk döneminde fark edilebileceği gibi,
    gelişim sürecinde ya da sonradan da ortaya çıkabilir.
    Doğru değerlendirme süreci, etkili bir müdahale planının temelini oluşturur.
    `,
  ],

  highlights: [
    {
      icon: FaCommentDots,
      title: "Dil Bozuklukları",
      text: "Alıcı ve ifade edici dil becerilerinde yaşanan; kelime dağarcığı, cümle kurma ve anlamlandırma güçlüklerini kapsar.",
    },
    {
      icon: FaMicrophoneAlt,
      title: "Konuşma Sesi Bozuklukları",
      text: "Seslerin yanlış, eksik ya da hatalı üretilmesiyle ortaya çıkan artikülasyon ve fonolojik bozuklukları içerir.",
    },
    {
      icon: FaStream,
      title: "Akıcılık Bozuklukları",
      text: "Konuşma sırasında duraklamalar, tekrarlar ve bloklarla kendini gösteren kekemelik gibi durumları kapsar.",
    },
    {
      icon: FaBrain,
      title: "Motor Konuşma Bozuklukları",
      text: "Konuşma kaslarının planlanması ve koordinasyonundaki güçlüklerden kaynaklanan apraksi ve dizartri gibi durumları içerir.",
    },
  ],

  closing: [
    "Her dil ve konuşma bozukluğu türü, bireyin ihtiyaçlarına göre özel değerlendirme ve müdahale gerektirir.",

    "Kurumumuzda, bilimsel temelli değerlendirme araçlarıyla bozukluğun türünü belirleyerek kişiye özel terapi süreçleri planlıyoruz.",
  ],
};
