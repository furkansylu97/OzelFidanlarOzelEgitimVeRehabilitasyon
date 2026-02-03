import React from "react";
import { navData } from "./navData";
import NavItem from "./NavItem";
import { Container } from "../../container/Container";
import { socialLinks } from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="hidden lg:block absolute top-40 left-0 w-full z-20">
      <div className="flex h-16 w-full items-center justify-center bg-[#001064]/50">
        <Container>
          <div className="flex w-full items-center justify-between text-white font-semibold">
            <ul className="flex items-center px-4 gap-4">
              {navData.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon}
                    alt={alt}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
