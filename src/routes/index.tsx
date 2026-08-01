import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Stethoscope,
  Scale,
  Briefcase,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Repeat,
} from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seller Contabilidade | Contabilidade Digital em Rio Preto" },
      {
        name: "description",
        content:
          "Contabilidade digital em São José do Rio Preto para saúde, prestadores de serviços e advogados. Abra sua empresa sem pagar honorários de abertura.",
      },
      { property: "og:title", content: "Seller Contabilidade | Contabilidade Digital em Rio Preto" },
      {
        property: "og:description",
        content:
          "Especialistas em saúde, serviços e advocacia. Abertura de empresa gratuita em Rio Preto.",
      },
    ],
  }),
  component: Index,
});

const segments = [
  {
    to: "/saude",
    icon: Stethoscope,
    title: "Área da saúde",
    text: "Médicos, dentistas, psicólogos e clínicas. PJ médica e equiparação hospitalar.",
  },
  {
    to: "/servicos",
    icon: Briefcase,
    title: "Prestadores de serviços",
    text: "Consultores, TI, marketing e engenharia. Fator R monitorado todo mês.",
  },
  {
    to: "/advogados",
    icon: Scale,
    title: "Advogados",
    text: "Sociedade unipessoal, registro na OAB e controle de honorários de êxito.",
  },
] as const;

const steps = [
  { title: "Diagnóstico gratuito", text: "Entendemos sua atuação e simulamos o melhor regime." },
  { title: "Documentos online", text: "Você envia tudo pelo WhatsApp e assina digitalmente." },
  { title: "Empresa aberta", text: "CNPJ, alvará e certificado digital sem honorários." },
  { title: "Rotina no automático", text: "Notas, guias e folha com contador dedicado." },
] as const;

const differentials = [
  { icon: FileCheck2, title: "Abertura sem honorários", text: "Você não paga nada pela abertura da empresa." },
  { icon: MessageCircle, title: "Contador no WhatsApp", text: "Time dedicado, resposta em até 24h úteis." },
  { icon: ShieldCheck, title: "Especialista por segmento", text: "Quem cuida de você entende do seu mercado." },
  { icon: Repeat, title: "Troca de contador grátis", text: "Assumimos toda a transição com o antigo escritório." },
] as const;

function Index() {
  return (
    <Page>
      <div className="hero-glow border-b border-border/60">
        <Section className="py-20 md:py-28">
          <Eyebrow>São José do Rio Preto · SP</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl uppercase leading-[1.03] md:text-6xl">
            Abra sua empresa em Rio Preto{" "}
            <span className="text-gradient-brand">sem pagar honorários de abertura</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Contabilidade digital com especialistas em saúde, prestadores de serviços e
            advocacia. Você foca no seu negócio, a Seller resolve imposto, nota fiscal e
            burocracia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/abertura-gratuita">
                Abrir empresa grátis <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            Sem taxa de adesão · Sem multa de cancelamento · 100% online
          </p>
        </Section>
      </div>

      <Section>
        <Eyebrow>Especialidades</Eyebrow>
        <h2 className="mt-5 text-2xl uppercase md:text-4xl">
          Uma contabilidade feita para o seu segmento
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {segments.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary"
            >
              <s.icon className="size-8 text-cyan" />
              <h3 className="mt-5 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ver página
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <div className="border-y border-border/60 bg-surface">
        <Section>
          <h2 className="text-2xl uppercase md:text-4xl">Como funciona</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-lg border border-border bg-card p-6">
                <span className="font-display text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Section>
        <h2 className="text-2xl uppercase md:text-4xl">Por que a Seller</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="flex gap-4 rounded-lg border border-border bg-card p-6"
            >
              <d.icon className="size-6 shrink-0 text-cyan" />
              <div>
                <h3 className="text-base">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-t border-border/60 bg-surface">
        <Section className="text-center">
          <h2 className="mx-auto max-w-2xl text-2xl uppercase md:text-4xl">
            Pronto para abrir sua empresa <span className="text-gradient-brand">sem custo</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Fale com um especialista da Seller e receba a simulação do seu imposto hoje.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/abertura-gratuita">Quero abrir minha empresa</Link>
          </Button>
        </Section>
      </div>
    </Page>
  );
}
