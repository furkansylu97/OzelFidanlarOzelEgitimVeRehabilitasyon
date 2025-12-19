import React from "react";
import { Link } from "react-router-dom";
import HeaderInfoItem from "./HeaderInfoItem";
import HeaderLogo from "../../../assets/icons/headerlogo.svg";
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/phone.svg";
import Location from "../../../assets/icons/map.svg";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper bg-[#001064] h-44 flex items-center">
          <div className="grid grid-cols-[35%_65%] container mx-32">
            <div className="flex items-center">
              <div className="flex justify-center items-center">
                <Link to="/">
                  <img
                    src={HeaderLogo}
                    alt="Özel Fidanlar Logo"
                    className="w-20 h-20"
                  />
                </Link>
              </div>
              <div className="text-white text-sm font-bold">
                Özel Fidanlar <br />
                Özel Eğitim Ve <br />
                Rehabilitasyon Merkezi
              </div>
            </div>
            <div className="grid grid-cols-[33%_27%_40%] gap-8">
              <HeaderInfoItem icon={Mail} title="Email">
                <a href="mailto:pendikfidanlar@gmail.com">
                  pendikfidanlar@gmail.com
                </a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Phone} title="Telefon">
                <a href="tel:+905526584455">+90 552 658 44 55</a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Location} title="Adres" iconClassName="w-8 h-8">
                <a
                  href="https://www.google.com/maps?q=Özel+Fidanlar+Özel+Eğitim+Ve+Rehabilitasyon+Merkezi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pendik, İstanbul
                </a>
              </HeaderInfoItem>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
