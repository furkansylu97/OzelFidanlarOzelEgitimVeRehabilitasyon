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
        <div className="header-wrapper w-full bg-[#001064] flex h-44 items-center justify-center">
          <div className="container flex justify-between px-20 mx-auto">
            <div className="flex items-center">
              <div className="flex justify-center items-center aspect-square shrink-0">
                <Link to="/">
                  <img
                    src={HeaderLogo}
                    alt="Özel Fidanlar Logo"
                    className="w-20 h-20"
                  />
                </Link>
              </div>
              <div className="text-white text-sm font-semibold shrink-0 whitespace-normal">
                Özel Fidanlar <br />
                Özel Eğitim Ve <br />
                Rehabilitasyon Merkezi
              </div>
            </div>
            <div className="md:flex hidden justify-between gap-8">
              <HeaderInfoItem icon={Mail} title="Email">
                <a href="mailto:pendikfidanlar@gmail.com">
                  pendikfidanlar@gmail.com
                </a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Phone} title="Telefon">
                <a href="tel:+905526584455">+90 552 658 44 55</a>
              </HeaderInfoItem>

              <HeaderInfoItem
                icon={Location}
                title="Adres"
                iconClassName="w-8 h-8"
              >
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
