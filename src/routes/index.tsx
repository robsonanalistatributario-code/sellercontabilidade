import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Stethoscope,
  Scale,
  Briefcase,
  MessageCircle,
  UserRound,
  PhoneCall,
  HeartHandshake,
  Clock,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/site/Pricing";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/contato";
import { pageHead } from "@/lib/seo";

const head = pageHead({
  path: "/",
  title: "Seller Contabilidade | Contador Humanizado em Rio Preto",
  description:
    "Contabilidade moderna com atendimento individual em São José do Rio Preto. Um contador dedicado com nome e telefone para saúde, prestadores de serviços e advogados.",
  ogDescription:
    "Tecnologia por trás, gente na frente: contador dedicado, atendimento individual e imposto no menor valor legal.",
});

export const Route = createFileRoute("/")({
  head: () => ({
    ...head,
    links: [
      ...head.links,
      { rel: "preload", as: "image", href: "/logo-seller.webp", fetchpriority: "high" },
    ],
  }),
  component: Index,
});

const segments = [
  {
    to: "/saude",
    icon: Stethoscope,
    title: "Área da saúde",
    text: "Médicos, dentistas, psicólogos e clínicas. PJ médica, equiparação hospitalar e imposto reduzido.",
  },
  {
    to: "/servicos",
    icon: Briefcase,
    title: "Prestadores de serviços",
    text: "Consultores, TI, marketing e engenharia. Fator R monitorado todos os meses por um contador.",
  },
  {
    to: "/advogados",
    icon: Scale,
    title: "Advogados",
    text: "Sociedade unipessoal, OAB e controle de honorários de êxito com quem entende do setor.",
  },
] as const;

const humanPillars = [
  {
    icon: UserRound,
    title: "Um contador com nome",
    text: "Você não fala com robô nem com fila de atendimento. Sempre a mesma pessoa cuidando da sua empresa.",
  },
  {
    icon: PhoneCall,
    title: "Telefone e WhatsApp direto",
    text: "Dúvida de imposto às 18h? Você manda mensagem e conversa com gente de verdade.",
  },
  {
    icon: HeartHandshake,
    title: "Reunião individual todo mês",
    text: "Analisamos seu faturamento junto com você e mostramos onde sobra e onde escapa dinheiro.",
  },
  {
    icon: Clock,
    title: "Tecnologia que economiza seu tempo",
    text: "Notas, guias e documentos no automático. A tecnologia trabalha no fundo, o humano fica na frente.",
  },
] as const;

const comparison = [
  { them: "Você vira um número em um painel", us: "Você tem um contador responsável pelo seu CNPJ" },
  { them: "Suporte por chatbot e ticket", us: "WhatsApp e telefone com resposta humana" },
  { them: "Ninguém revisa seu imposto", us: "Revisão mensal do regime e do Fator R" },
  { them: "Cada mês fala com alguém diferente", us: "Mesmo time do começo ao fim" },
] as const;

const stats = [
  { value: "+300", label: "Empresas atendidas" },
  { value: "1 p/ 1", label: "Contador dedicado" },
  { value: "24h", label: "Resposta no WhatsApp" },
  { value: "17 anos", label: "De estrada em Rio Preto" },
] as const;

const testimonials = [
  {
    quote:
      "Saí de um escritório 100% digital onde ninguém me respondia. Aqui eu ligo e falo com a pessoa que cuida da minha clínica.",
    author: "Dra. Marina R.",
    role: "Clínica odontológica · Rio Preto",
  },
  {
    quote:
      "Revisaram meu Fator R e minha retirada. Passei a pagar bem menos imposto no mesmo faturamento.",
    author: "Rafael T.",
    role: "Consultoria de TI",
  },
  {
    quote:
      "Atendimento próximo de verdade. Sinto que tenho um contador, não um aplicativo.",
    author: "Dr. Henrique M.",
    role: "Advogado · Sociedade unipessoal",
  },
] as const;

const steps = [
  { title: "Conversa sem compromisso", text: "Entendemos seu momento, seu faturamento e suas dores atuais." },
  { title: "Diagnóstico do seu imposto", text: "Mostramos quanto você paga hoje e quanto poderia pagar." },
  { title: "Transição feita por nós", text: "Assumimos a conversa com o contador antigo e organizamos tudo." },
  { title: "Rotina com contador dedicado", text: "Você passa a ter acompanhamento individual todo mês." },
] as const;

function Index() {
  return (
    <Page>
      <div className="hero-glow border-b border-border/60">
        <Section className="py-20 md:py-28">
          <Eyebrow>São José do Rio Preto · SP</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl uppercase leading-[1.03] md:text-6xl">
            A contabilidade do futuro tem{" "}
            <span className="text-gradient-brand">gente de verdade te atendendo</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Tecnologia por trás, pessoas na frente. Na Seller você tem um contador dedicado,
            atendimento individual e revisão do seu imposto todo mês — sem chatbot, sem fila,
            sem falar com um estranho diferente a cada ligação.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={whatsappLink("Olá! Quero falar com um contador da Seller.")} target="_blank" rel="noreferrer">
                Falar com um contador <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/planos">Ver planos e preços</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
            Atendimento individual · Troca de contador sem custo · {WHATSAPP_DISPLAY}
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/70 p-5 backdrop-blur"
              >
                <dt className="font-display text-3xl text-gradient-brand">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <Section>
        <Eyebrow>Atendimento humanizado</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-2xl uppercase md:text-4xl">
          Digitalizar demais afastou o cliente do contador.{" "}
          <span className="text-gradient-brand">Nós fizemos o contrário.</span>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {humanPillars.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-brand"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <p.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="border-y border-border/60 bg-surface">
        <Section>
          <h2 className="max-w-2xl text-2xl uppercase md:text-4xl">
            A diferença no dia a dia
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-base text-muted-foreground">Contabilidade só automatizada</h3>
              <ul className="mt-5 space-y-3">
                {comparison.map((c) => (
                  <li key={c.them} className="text-sm text-muted-foreground">
                    — {c.them}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/40 bg-card p-7 shadow-brand">
              <h3 className="text-base">Seller Contabilidade</h3>
              <ul className="mt-5 space-y-3">
                {comparison.map((c) => (
                  <li key={c.us} className="flex gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{c.us}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Eyebrow>Especialidades</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-2xl uppercase md:text-4xl">
          Um especialista que entende o <span className="text-gradient-brand">seu mercado</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {segments.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-brand"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <s.icon className="size-6" />
              </span>
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
          <h2 className="text-2xl uppercase md:text-4xl">Quem já trocou conta a diferença</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-2xl border border-border bg-card p-7">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {t.author}
                  <span className="mt-1 block text-xs font-normal uppercase tracking-wide text-muted-foreground">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <h2 className="text-2xl uppercase md:text-4xl">Como começamos juntos</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl text-gradient-brand">0{i + 1}</span>
              <h3 className="mt-3 text-base">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Pricing />

      <div className="border-t border-border/60 bg-surface">
        <Section className="text-center">
          <h2 className="mx-auto max-w-2xl text-2xl uppercase md:text-4xl">
            Quer um contador que <span className="text-gradient-brand">atende você pelo nome</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Converse com um especialista da Seller e receba hoje o diagnóstico do seu imposto.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={whatsappLink("Olá! Quero o diagnóstico do meu imposto com a Seller.")} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Falar no WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/planos">Ver planos</Link>
            </Button>
          </div>
        </Section>
      </div>
    </Page>
  );
}
