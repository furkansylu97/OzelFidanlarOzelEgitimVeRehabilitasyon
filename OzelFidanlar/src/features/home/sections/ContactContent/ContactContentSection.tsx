import { useState } from "react";
import { Container } from "../../../../shared/components/container/Container";
import ContactInfoItem from "../../components/Contact/ContactInfoItem";
import { contactInfo } from "../../data/Contact/contactInfo";
import AppSelect from "../../../../shared/components/select/AppSelect";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const serviceOptions = [
  "Özel Eğitim Hizmetleri",
  "Aile Eğitimi ve Danışmanlık",
  "Ergenlik Dönemi Danışmanlığı",
  "Akademik Beceri Eğitimi",
  "Rehberlik ve Psikolojik Danışmanlık",
  "Özgül Öğrenme Güçlüğü",
  "Dil ve Konuşma Bozuklukları",
  "Otizm Spektrum Bozukluğu",
  "Dikkat Eksikliği ve Hiperaktivite Bozukluğu",
  "Zihinsel Yetersizlik",
  "Down Sendromu",
  "Ergoterapi",
];

const ContactContentSection = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^(\+90)?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

  const handleSubmit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    if (!form.name || !form.email || !form.phone || !form.service) {
      toast.warning("Lütfen tüm zorunlu alanları doldurunuz.", {
        position: "bottom-right",
      });
      setIsSubmitting(false);
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast.warning("Lütfen geçerli bir email adresi giriniz.", {
        position: "bottom-right",
      });
      setIsSubmitting(false);
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      toast.warning("Lütfen geçerli bir telefon numarası giriniz.", {
        position: "bottom-right",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          time: new Date().toLocaleString("tr-TR"),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Mesajınız başarıyla gönderildi 🎉", {
        position: "bottom-right",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Email gönderme hatası:", error);
      toast.error("Mesaj gönderilirken bir hata oluştu ❌", {
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex items-center justify-center bg-[#001064] py-10 h-[calc(var(--viewport-height)*0.8)]">
      <Container>
        <div className="flex items-stretch justify-between w-full gap-12">
          <div className="max-w-lg text-white flex flex-col justify-between h-full">
            <div>
              <h2 className="inline-block pl-1 text-3xl font-bold border-l-4 border-amber-300 bg-white/10">
                İletişim
              </h2>
            </div>

            <p className="text-white/80 text-base my-6">
              İletişim kanallarımız veya form aracılığıyla bize ulaşabilirsiniz
            </p>

            <div className="space-y-7">
              {contactInfo.map((item) => (
                <ContactInfoItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="flex max-w-3xl w-full h-full">
            <div className="flex flex-wrap gap-10 h-full justify-between w-full">
              <div className="flex w-full gap-5">
                <input
                  name="name"
                  placeholder="Adınız & Soyadınız *"
                  value={form.name}
                  onChange={handleChange}
                  className="input w-1/2"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Mail Adresiniz *"
                  value={form.email}
                  onChange={handleChange}
                  className="input w-1/2"
                />
              </div>

              <div className="flex w-full gap-5">
                <input
                  name="phone"
                  placeholder="Telefon Numaranız *"
                  value={form.phone}
                  onChange={handleChange}
                  className="input w-1/2"
                />

                <AppSelect
                  value={form.service}
                  onChange={(value) =>
                    setForm((prev) => ({ ...prev, service: value }))
                  }
                  placeholder="Hizmet Seçiniz"
                  options={serviceOptions}
                />
              </div>

              <textarea
                name="message"
                rows={9}
                placeholder="Mesajınız"
                value={form.message}
                onChange={handleChange}
                className="input w-full"
              />

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="
                  w-full
                  bg-[linear-gradient(94.06deg,#ffb629_-1.21%,#ffda56_58.66%,#ffd7a6_116.84%)]
                  py-4
                  rounded-lg
                  font-semibold
                  hover:font-normal
                  transition
                "
              >
                {isSubmitting ? "Gönderiliyor..." : "Mesajı Gönder"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactContentSection;
