import React from "react";
import { Container } from "../container/Container";

const FooterBottom = () => {
  return (
    <div className="flex items-center justify-center border-t border-white/20 py-4 text-sm">
      <Container className="justify-center lg:justify-between">
        <span>
          © {new Date().getFullYear()} Özel Fidanlar.
          Tüm hakları saklıdır.
        </span>

        <span className="hidden lg:block text-white/70 px-2 lg:px-20">
          Özel Eğitim & Rehabilitasyon Merkezi
        </span>
      </Container>
    </div>
  );
};

export default FooterBottom;
