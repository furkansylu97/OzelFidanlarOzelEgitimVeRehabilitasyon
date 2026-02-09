import { useEffect, useState } from "react";
import { navData } from "./navData";
import NavItem from "./NavItem";
import { Container } from "../../container/Container";
import { socialLinks } from "./SocialLinks";

const StickyNavbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        hidden lg:block fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }
      `}
    >
      <div className="flex h-16 w-full items-center justify-center bg-[#001064]/50 backdrop-blur-md shadow-lg">
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

export default StickyNavbar;
