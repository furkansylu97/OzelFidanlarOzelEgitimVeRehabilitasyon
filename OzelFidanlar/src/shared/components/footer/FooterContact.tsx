import React from "react";
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/phone.svg";
import Location from "../../../assets/icons/map.svg";
import Whatsapp from "../../../assets/icons/whatsapp.svg";

const FooterContact = () => {
  return (
    <div className="px-2 lg:px-10 border-b border-[#74ae38] lg:border-none">
      <h4 className="mb-4 lg:mb-5 text-lg font-semibold text-[#74ae38] tracking-wide">İletişim</h4>

      <ul className="space-y-4 text-sm mb-4 lg:mb-0">
        <li className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full border border-[#74ae38] flex items-center justify-center">
            <img src={Mail} alt="Email" className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">Email</span>
            <a
              href="mailto:pendikfidanlar@gmail.com"
              className="text-white/80 hover:text-[#74ae38] transition-colors"
            >
              pendikfidanlar@gmail.com
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full border border-[#74ae38] flex items-center justify-center">
            <img src={Phone} alt="Telefon" className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">Telefon</span>
            <a
              href="tel:+905526584455"
              className="text-white/80 hover:text-[#74ae38] transition-colors"
            >
              +90 552 658 44 55
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full border border-[#74ae38] flex items-center justify-center">
            <img src={Whatsapp} alt="WhatsApp" className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">WhatsApp</span>
            <a
              href="https://wa.me/905526584455?text=Merhaba,%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#74ae38] transition-colors"
            >
              Hızlı Mesaj Gönder
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3 ">
          <div className="w-9 h-9 rounded-full border border-[#74ae38] flex items-center justify-center">
            <img src={Location} alt="Adres" className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-white">Adres</span>
            <a
              href="https://www.google.com/maps?q=Özel+Fidanlar+Özel+Eğitim+Ve+Rehabilitasyon+Merkezi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-[#74ae38]"
            >
              Pendik, İstanbul
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
