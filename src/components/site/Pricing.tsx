import { Check, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contato";

export type Plan = {
  name: string;
  price: string;
  suffix?: string;
  tagline: string;
  service: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    price: "R$ 397",
    suffix: "/mês",
    tagline: "Para quem está começando e não tem folha de pagamento.",
    service: "Atendimento online",
    features: [
      "Sem folha de pagamento",
      "Atendimento 100% online",
      "Escrituração fiscal e contábil",
      "Emissão de guias e apuração de impostos",
      "Pró-labore do titular",
      "Entrega de todas as obrigações acessórias",
    ],
  },
  {
    name: "Plus",
    price: "R$ 697",
    suffix: "/mês",
    tagline: "Para empresas com equipe enxuta que querem contador de verdade.",
    service: "Atendimento humanizado",
    featured: true,
    features: [
      "Até 3 funcionários na folha",
      "Atendimento humanizado com contador dedicado",
      "Departamento pessoal completo (admissão, férias, rescisão)",
      "Planejamento tributário anual",
      "Monitoramento do Fator R",
      "Suporte prioritário no WhatsApp",
    ],
  },
  {
    name: "Premium",
    price: "A consultar",
    tagline: "Para clínicas, sociedades e operações com estrutura maior.",
    service: "Atendimento personalizado",
    features: [
      "Folha sob medida, sem limite de funcionários",
      "Atendimento personalizado e reuniões periódicas",
      "BPO financeiro e relatórios gerenciais",
      "Planejamento tributário e societário contínuo",
      "Equiparação hospitalar e regimes especiais",
      "Consultoria dedicada ao seu segmento",
    ],
  },
];

export function Pricing({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="planos" className={compact ? "py-14 md:py-20" : ""}>
      <div className="text-center">
        <Eyebrow>Planos e preços</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-2xl uppercase md:text-4xl">
          Preço fechado, <span className="text-gradient-brand">sem surpresa no fim do mês</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Escolha o plano do seu momento. A abertura da empresa continua sem honorários.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "relative flex h-full flex-col rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1",
              p.featured
                ? "border-primary/60 shadow-brand lg:scale-[1.03]"
                : "border-border hover:border-primary/40 hover:shadow-brand",
            ].join(" ")}
          >
            {p.featured && (
              <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
                <Sparkles className="size-3" /> Mais escolhido
              </span>
            )}
            <h3 className="text-xl uppercase">{p.name}</h3>
            <p className="mt-2 min-h-10 text-sm text-muted-foreground">{p.tagline}</p>

            <div className="mt-6 flex items-end gap-1">
              <span className="font-display text-4xl leading-none text-gradient-brand">
                {p.price}
              </span>
              {p.suffix && (
                <span className="pb-1 text-sm text-muted-foreground">{p.suffix}</span>
              )}
            </div>
            <span className="mt-3 inline-flex w-fit rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {p.service}
            </span>

            <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-cyan" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              variant={p.featured ? "default" : "outline"}
              className="mt-7 w-full"
            >
              <a
                href={whatsappLink(
                  `Olá! Quero contratar o plano ${p.name} (${p.price}) da Seller Contabilidade.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                {p.price === "A consultar" ? "Solicitar proposta" : "Contratar plano"}
              </a>
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs uppercase tracking-widest text-muted-foreground">
        Sem taxa de adesão · Sem fidelidade · Troca de contador por nossa conta
      </p>
    </Section>
  );
}
