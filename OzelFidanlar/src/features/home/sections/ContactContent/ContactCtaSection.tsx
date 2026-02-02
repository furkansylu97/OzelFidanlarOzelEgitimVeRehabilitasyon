import { Container } from "../../../../shared/components/container/Container";

const ContactCtaSection = () => {
  return (
    <section className="py-20 bg-[#001064]">
      <div className="flex items-center justify-center">
        <Container>
          <div className="text-center text-white max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">
              Size Yardımcı Olmaktan Memnuniyet Duyarız
            </h2>
            <p className="text-white/80 mt-4">
              Sorularınız ve randevu talepleriniz için bizimle iletişime
              geçebilirsiniz.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactCtaSection;
