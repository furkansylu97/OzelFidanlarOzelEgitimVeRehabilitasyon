import FooterMapImage from "../../../assets/images/home/footer/footer-map.jpeg";

const FooterMap = () => {
  return (
    <div className="w-56 mt-6">
      <a
        href="https://www.google.com/maps?q=Özel+Fidanlar+Özel+Eğitim+Ve+Rehabilitasyon+Merkezi"
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-xl border border-white/20 hover:border-[#74ae38] transition"
      >
        <img
          src={FooterMapImage}
          alt="Özel Fidanlar Özel Eğitim ve Rehabilitasyon Merkezi Konumu"
          className="w-full h-40 object-cover hover:scale-105 transition duration-300"
        />
      </a>
    </div>
  );
};

export default FooterMap;
