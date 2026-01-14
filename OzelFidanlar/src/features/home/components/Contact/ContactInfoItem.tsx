import type { ContactInfo } from "../../data/Contact/contactInfo";

interface Props {
  item: ContactInfo;
}

const ContactInfoItem = ({ item }: Props) => {
  return (
    <div className="flex items-start gap-4 text-white">
      <div className="w-12 h-12 flex items-center justify-center bg-white/10 border-2 border-[#74ae38] rounded-full">
        <img src={item.icon} alt={item.title} className={item.iconClassName} />
      </div>

      <div className="text-sm leading-relaxed whitespace-pre-line">
        <span className="font-semibold block">{item.title}</span>

        {item.href ? (
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="hover:text-[#74ae38] transition-colors"
            aria-label={item.title}
          >
            {item.value}
          </a>
        ) : (
          <span>{item.value}</span>
        )}
      </div>
    </div>
  );
};

export default ContactInfoItem;
