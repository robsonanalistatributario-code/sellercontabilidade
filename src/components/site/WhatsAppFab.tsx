import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contato";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Olá! Vim pelo site da Seller Contabilidade.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-3 text-sm font-bold text-primary-foreground shadow-brand transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
