import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT } from "@/lib/data/site";

export default function InfoBar({ addressLines = CONTACT.addressLines, phone = CONTACT.phones[0], email = CONTACT.email }) {
  const items = [
    { icon: FiMapPin, text: addressLines.join(", ") },
    { icon: FiPhone, text: phone },
    { icon: FiMail, text: email },
    { icon: FiClock, text: "24/7 Front Desk" },
  ];

  return (
    <div className="relative z-10 mx-auto w-[92%] max-w-[1100px] -mt-8.5 border border-line bg-white shadow-luxury">
      <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-3.5 px-6.5 py-5.5">
            <item.icon className="h-4.5 w-4.5 flex-none text-gold" />
            <span className="font-body text-[13px] text-navy">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
