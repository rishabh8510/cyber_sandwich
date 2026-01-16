import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919770435842"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 left-8
        bg-green-500! text-white! p-4 rounded-full shadow-xl
        hover:scale-110 transition-all duration-300
        z-50
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
