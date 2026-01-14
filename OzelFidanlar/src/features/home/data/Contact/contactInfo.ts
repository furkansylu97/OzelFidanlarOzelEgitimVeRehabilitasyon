import Mail from "../../../../assets/icons/mail.svg";
import Phone from "../../../../assets/icons/phone.svg";
import Location from "../../../../assets/icons/map.svg";
import Whatsapp from "../../../../assets/icons/whatsapp.svg";

export interface ContactInfo {
  id: number;
  icon: string;
  iconClassName?: string;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    icon: Location,
    iconClassName: "w-9 h-8",
    title: "Adres",
    value: "Pendik, İstanbul",
    href: "https://www.google.com/maps?q=Özel+Fidanlar+Özel+Eğitim+Ve+Rehabilitasyon+Merkezi",
    external: true,
  },
  {
    id: 2,
    icon: Mail,
    iconClassName: "w-6 h-6",
    title: "Email",
    value: "pendikfidanlar@gmail.com",
    href: "mailto:pendikfidanlar@gmail.com",
  },
  {
    id: 3,
    icon: Phone,
    iconClassName: "w-6 h-6",
    title: "Bizi Arayın",
    value: "(+90) 552 658 44 55",
    href: "tel:+905526584455",
  },
  {
    id: 4,
    icon: Whatsapp,
    iconClassName: "w-6 h-6",
    title: "WhatsApp İletişim",
    value: "Hızlı Mesaj Gönder",
    href: "https://wa.me/905526584455?text=Merhaba,%20bilgi%20almak%20istiyorum.",
    external: true
  },
];
