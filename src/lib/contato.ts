export const WHATSAPP_NUMBER = "5511964880129";
export const WHATSAPP_DISPLAY = "(11) 96488-0129";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
