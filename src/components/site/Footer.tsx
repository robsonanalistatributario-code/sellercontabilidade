import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/lib/contato";
import logo from "@/assets/logo-horizontal-branco.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center">
            <img
              src={logo.url}
              alt="Seller Contabilidade"
              className="h-11 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Contabilidade digital em São José do Rio Preto para clínicas, prestadores de
            serviços e advogados. Menos imposto, zero burocracia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide">Segmentos</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/saude" className="hover:text-foreground">
                Área da saúde
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-foreground">
                Prestadores de serviços
              </Link>
            </li>
            <li>
              <Link to="/advogados" className="hover:text-foreground">
                Advogados
              </Link>
            </li>
            <li>
              <Link to="/abertura-gratuita" className="hover:text-foreground">
                Abertura gratuita
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-cyan" /> {WHATSAPP_DISPLAY}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-cyan" /> contato@sellercontabilidade.com.br
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-cyan" /> São José do Rio Preto — SP
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Seller Contabilidade. Todos os direitos reservados.
      </div>
    </footer>
  );
}
