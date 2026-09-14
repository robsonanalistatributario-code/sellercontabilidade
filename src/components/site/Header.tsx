import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contato";

const nav = [
  { to: "/", label: "Início" },
  { to: "/saude", label: "Saúde" },
  { to: "/servicos", label: "Serviços" },
  { to: "/advogados", label: "Advogados" },
  { to: "/planos", label: "Planos" },
  { to: "/abertura-gratuita", label: "Abertura Grátis" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo-seller.webp"
            alt="Seller Contabilidade — contabilidade digital em São José do Rio Preto"
            width={320}
            height={80}
            fetchPriority="high"
            decoding="async"
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-semibold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <a
              href={whatsappLink("Olá! Quero falar com um contador da Seller.")}
              target="_blank"
              rel="noreferrer"
            >
              Falar com um contador
            </a>
          </Button>
        </nav>

        <button
          className="lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-surface px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-1 text-sm text-muted-foreground"
                activeProps={{ className: "py-1 text-sm text-foreground font-semibold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
