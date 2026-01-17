import React from "react";
import { socialLinks } from "../header/navbar/SocialLinks";
import FooterMap from "./FooterMap";

const FooterSocial = () => {
  return (
    <div className="w-full">
      <h4 className="text-lg font-semibold mb-5 text-[#74ae38] tracking-wide">
        Bizi Takip Edin
      </h4>

      <div className="flex gap-2">
        {socialLinks.map(({ href, icon, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#74ae38] hover:border-[#74ae38] transition"
          >
            <img src={icon} alt={alt} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <FooterMap />
    </div>
  );
};

export default FooterSocial;
