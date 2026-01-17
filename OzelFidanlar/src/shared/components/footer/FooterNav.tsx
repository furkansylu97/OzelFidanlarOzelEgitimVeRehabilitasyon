import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="px-8">
      <h4 className="text-lg font-semibold mb-5 tracking-wide text-[#74ae38]">Kurumsal</h4>
      <ul className="space-y-3 font-medium text-white/80">
        <li className="hover:text-[#74ae38] hover:translate-x-1 transition-all">
          <Link to="/about">Hakkımızda</Link>
        </li>
        <li className="hover:text-[#74ae38] hover:translate-x-1 transition-all">
          <Link to="/trainings">Eğitimlerimiz</Link>
        </li>
        <li className="hover:text-[#74ae38] hover:translate-x-1 transition-all">
          <Link to="/services">Hizmetlerimiz</Link>
        </li>
        <li className="hover:text-[#74ae38] hover:translate-x-1 transition-all">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:text-[#74ae38] hover:translate-x-1 transition-all">
          <Link to="/contact">İletişim</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
