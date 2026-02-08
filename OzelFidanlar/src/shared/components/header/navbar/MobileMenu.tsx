import { useEffect, useRef } from "react";
import { navData } from "./navData";
import MobileNavItem from "./MobileNavItem";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: Props) => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (open) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40
          transition-opacity duration-300
          lg:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      <div
        role="navigation"
        aria-label="Mobil Menü"
        style={{ touchAction: "pan-y" }}
        className={`
          fixed top-0 left-0 h-screen w-[80%] max-w-xs
          bg-[#001064]
          z-50
          will-change-transform
          transform transition-transform duration-300 ease-in-out
          lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col px-6 py-6 gap-3 text-white">
          {navData.map((item, index) => (
            <MobileNavItem
              key={`${item.label}-${index}`}
              item={item}
              onNavigate={onClose}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
