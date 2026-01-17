import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../../assets/icons/headerlogo.svg";

const FooterBrand = () => {
  return (
    <div className="flex flex-col gap-6">
      <Link to="/" className="flex">
        <div className="flex items-center justify-center">
          <img
            src={FooterLogo}
            alt="Özel Fidanlar Logo"
            className="w-16 h-16"
          />
          <div className="text-white text-base font-semibold leading-snug">
            Özel Fidanlar
            <br />
            Özel Eğitim ve
            <br />
            Rehabilitasyon Merkezi
          </div>
        </div>
      </Link>

      <p className="text-sm text-white/80 px-4 italic leading-relaxed">
        Çocuklarımızın bireysel gelişimini destekleyen, bilimsel temelli eğitim
        ve rehabilitasyon hizmetleri sunuyoruz.
      </p>
    </div>
  );
};

export default FooterBrand;
