import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/site/Page";
import { Pricing } from "@/components/site/Pricing";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/contato";
import { pageHead, faqJsonLd, breadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/planos")({
  head: () => ({
    ...pageHead({
      path: "/planos",
      title: "Planos de Contabilidade | Seller Contabilidade Rio Preto",
      description:
        "Planos Basic (R$ 397), Plus (R$ 497) e Premium. Contabilidade digital em Rio Preto com atendimento online, humanizado ou personalizado.",
      ogTitle: "Planos de Contabilidade | Seller Contabilidade",
      ogDescription:
        "Basic R$ 397, Plus R$ 497 e Premium a consultar. Preço fechado, sem surpresas.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Planos de contabilidade digital",
          serviceType: "Serviços de contabilidade",
          url: `${SITE_URL}/planos`,
          provider: { "@type": "AccountingService", name: SITE_NAME, url: SITE_URL },
          areaServed: { "@type": "City", name: "São José do Rio Preto" },
          offers: [
            {
              "@type": "Offer",
              name: "Basic",
              price: "397.00",
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              name: "Plus",
              price: "497.00",
              priceCurrency: "BRL",
              url: `${SITE_URL}/planos`,
              availability: "https://schema.org/InStock",
            },
          ],
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faq)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Planos", path: "/planos" },
          ]),
        ),
      },
    ],
  }),
  component: Planos,
});

const faq = [
  {
    q: "Tem taxa de adesão ou fidelidade?",
    a: "Não. Você entra sem taxa de adesão, sem contrato de fidelidade e pode cancelar quando quiser.",
  },
  {
    q: "O que acontece se eu contratar funcionários no Basic?",
    a: "Fazemos o upgrade para o Plus, que inclui a folha de até 3 funcionários e o departamento pessoal completo.",
  },
  {
    q: "Como funciona a troca do meu contador atual?",
    a: "Nós cuidamos de toda a transição: solicitamos os arquivos, conferimos as obrigações e assumimos a rotina. Você só assina.",
  },
  {
    q: "A abertura da empresa é cobrada?",
    a: "Não. Em Rio Preto a abertura é sem honorários para quem contrata qualquer um dos planos.",
  },
] as const;

function Planos() {
  return (
    <Page>
      <div className="hero-glow border-b border-border/60">
        <Section className="py-16 text-center md:py-20">
          <Eyebrow>Planos Seller</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl uppercase leading-[1.05] md:text-6xl">
            Contabilidade com <span className="text-gradient-brand">preço transparente</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Três níveis de atendimento para acompanhar o crescimento da sua empresa — do
            profissional que está começando à clínica com equipe completa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={whatsappLink("Olá! Quero entender qual plano é ideal para mim.")} target="_blank" rel="noreferrer">
                Descobrir meu plano ideal <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/abertura-gratuita">Abrir empresa grátis</Link>
            </Button>
          </div>
        </Section>
      </div>

      <Pricing />

      <div className="border-t border-border/60 bg-surface">
        <Section>
          <h2 className="text-2xl uppercase md:text-4xl">Perguntas frequentes</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <div key={f.q} className="rounded-xl border border-border bg-card p-6">
                <h3 className="flex items-start gap-2 text-base">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan" />
                  {f.q}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Page>
  );
}
