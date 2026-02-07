const ContactMapSection = () => {
  return (
    <section className="w-full h-[30vh] md:h-72 lg:h-105">
      <iframe
        title="Merkez Konumu"
        src="https://www.google.com/maps?q=40.8736882,29.2607257&hl=tr&z=15&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </section>
  );
};

export default ContactMapSection;
