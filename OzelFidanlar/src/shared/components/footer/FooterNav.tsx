import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="px-2 lg:px-8 border-b border-[#74ae38] lg:border-none">
      <h4 className="text-lg font-semibold mb-4 lg:mb-5 tracking-wide text-[#74ae38]">Kurumsal</h4>
      <ul className="space-y-3 font-medium text-white/80 mb-8 lg:mb-0">
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
