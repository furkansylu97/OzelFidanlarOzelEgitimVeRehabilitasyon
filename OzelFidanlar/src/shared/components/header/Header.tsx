import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderInfoItem from "./HeaderInfoItem";
import HeaderLogo from "../../../assets/icons/headerlogo.svg";
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/phone.svg";
import Location from "../../../assets/icons/map.svg";
import { Container } from "../container/Container";
import Navbar from "./navbar/Navbar";
import MobileMenu from "./navbar/MobileMenu";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className="w-full relative lg:static">
        <header className="w-full bg-[#001064] flex h-32 lg:h-40 lg:py-0 items-center justify-center">
          <Container className="justify-between">
            <div className="flex items-center">
              <div className="flex justify-center items-center aspect-square shrink-0">
                <Link to="/">
                  <img
                    src={HeaderLogo}
                    alt="Özel Fidanlar Logo"
                    className="w-16 h-16 lg:w-20 lg:h-20"
                  />
                </Link>
              </div>
              <div className="text-white text-xs lg:text-sm font-semibold shrink-0 whitespace-normal">
                Özel Fidanlar <br />
                Özel Eğitim Ve <br />
                Rehabilitasyon Merkezi
              </div>
            </div>
            <div className="lg:flex hidden justify-between gap-8">
              <HeaderInfoItem icon={Mail} title="Email">
                <a
                  href="mailto:pendikfidanlar@gmail.com"
                  className="transition-colors duration-200 hover:text-[#74ae38]"
                >
                  pendikfidanlar@gmail.com
                </a>
              </HeaderInfoItem>

              <HeaderInfoItem icon={Phone} title="Telefon">
                <a
                  href="tel:+905526584455"
                  className="transition-colors duration-200 hover:text-[#74ae38]"
                >
                  +90 552 658 44 55
                </a>
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
                  className="transition-colors duration-200 hover:text-[#74ae38]"
                >
                  Pendik, İstanbul
                </a>
              </HeaderInfoItem>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Mobil Menü"
              aria-expanded={mobileOpen}
              className="
              lg:hidden
              flex items-center justify-center
              w-11 h-11
              text-white
              rounded-md
              hover:bg-white/10
              transition-colors
              z-50
            "
            >
              {mobileOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
            <MobileMenu
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
            />
          </Container>
        </header>
        <Navbar />
      </div>
    </>
  );
};
