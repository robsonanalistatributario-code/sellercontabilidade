export const WHATSAPP_NUMBER = "5517991009231";
export const WHATSAPP_DISPLAY = "(17) 99100-9231";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
