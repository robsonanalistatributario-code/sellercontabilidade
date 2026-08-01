import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export type SegmentContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  pains: string[];
  services: { title: string; text: string }[];
  results: { value: string; label: string }[];
};

export function SegmentPage({ content }: { content: SegmentContent }) {
  return (
    <Page>
      <div className="hero-glow border-b border-border/60">
        <Section className="py-16 md:py-24">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl uppercase leading-[1.05] md:text-6xl">
            {content.title} <span className="text-gradient-brand">{content.highlight}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            {content.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/abertura-gratuita">
                Abrir empresa sem honorários <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/5517999990000" target="_blank" rel="noreferrer">
                Falar com especialista
              </a>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
            {content.results.map((r) => (
              <div key={r.label} className="rounded-lg border border-border bg-card p-5">
                <dt className="font-display text-3xl text-cyan">{r.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {r.label}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <Section>
        <h2 className="text-2xl uppercase md:text-4xl">O que resolvemos para você</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {content.pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-5 shrink-0 text-cyan" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div className="border-y border-border/60 bg-surface">
        <Section>
          <h2 className="text-2xl uppercase md:text-4xl">Serviços incluídos</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {content.services.map((s) => (
              <div key={s.title} className="rounded-lg border border-border bg-card p-6">
                <div className="h-1 w-10 bg-gradient-brand" />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section className="text-center">
        <h2 className="mx-auto max-w-2xl text-2xl uppercase md:text-4xl">
          Migre para a Seller sem custo e sem parar sua operação
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Cuidamos de toda a transição com seu contador atual. Você só assina.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/abertura-gratuita">Quero um diagnóstico gratuito</Link>
        </Button>
      </Section>
    </Page>
  );
}
