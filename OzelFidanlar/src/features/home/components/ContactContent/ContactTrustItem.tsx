import React from "react";

interface Props {
  item: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
}

const ContactTrustItem: React.FC<Props> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-300/40 text-amber-400">
        <Icon size={22} />
      </div>

      <div>
        <h4 className="font-semibold text-gray-900">{item.title}</h4>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>
    </div>
  );
};

export default ContactTrustItem;
