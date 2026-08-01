import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/abertura-gratuita")({
  head: () => ({
    meta: [
      { title: "Abertura de Empresa Grátis em Rio Preto | Seller Contabilidade" },
      {
        name: "description",
        content:
          "Abra sua empresa em Rio Preto sem pagar honorários de abertura. CNPJ, alvará e certificado digital com a Seller Contabilidade, 100% online.",
      },
      {
        property: "og:title",
        content: "Abra Sua Empresa em Rio Preto Sem Pagar Honorários de Abertura",
      },
      {
        property: "og:description",
        content: "Abertura de CNPJ gratuita com contador especialista no seu segmento.",
      },
    ],
  }),
  component: AberturaPage,
});

const included = [
  "Consulta de viabilidade e nome empresarial",
  "Registro na Junta Comercial e CNPJ",
  "Inscrição municipal e alvará de funcionamento",
  "Enquadramento no melhor regime tributário",
  "Certificado digital e-CNPJ orientado",
  "Emissão da primeira nota fiscal com apoio do time",
];

const faq = [
  {
    q: "A abertura é realmente gratuita?",
    a: "Sim. Você não paga honorários de abertura para a Seller. As únicas despesas são as taxas obrigatórias dos órgãos públicos (Junta Comercial, prefeitura e certificado digital), cobradas por eles e informadas antes de qualquer etapa.",
  },
  {
    q: "Quanto tempo leva para abrir minha empresa?",
    a: "Em média de 3 a 7 dias úteis após o envio dos documentos, variando conforme a atividade e a análise da prefeitura de São José do Rio Preto.",
  },
  {
    q: "Preciso ir até o escritório?",
    a: "Não. Todo o processo é digital: envio de documentos pelo WhatsApp e assinatura eletrônica dos contratos.",
  },
  {
    q: "Atendem outras cidades da região?",
    a: "Sim. Somos de Rio Preto e atendemos toda a região e o Brasil de forma 100% online.",
  },
];

function AberturaPage() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", atividade: "" });

  const message = encodeURIComponent(
    `Olá! Quero abrir minha empresa com a Seller Contabilidade.\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nAtividade: ${form.atividade}`,
  );

  return (
    <Page>
      <div className="hero-glow border-b border-border/60">
        <Section className="grid gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>Abertura gratuita</Eyebrow>
            <h1 className="mt-5 text-4xl uppercase leading-[1.05] md:text-5xl">
              Abra sua empresa em Rio Preto{" "}
              <span className="text-gradient-brand">sem pagar honorários de abertura</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground md:text-lg">
              A Seller Contabilidade abre seu CNPJ sem cobrar honorários. Você paga apenas as
              taxas obrigatórias dos órgãos públicos e já começa com um contador especialista
              no seu segmento.
            </p>
            <ul className="mt-8 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-5 shrink-0 text-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-7 shadow-brand">
            <h2 className="text-xl uppercase">Comece agora</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha e continue no WhatsApp com um especialista.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(`https://wa.me/5517999990000?text=${message}`, "_blank");
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="(17) 99999-0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="atividade">Sua atividade</Label>
                <Input
                  id="atividade"
                  required
                  value={form.atividade}
                  onChange={(e) => setForm({ ...form, atividade: e.target.value })}
                  placeholder="Ex: médico, advogado, consultor de TI"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Quero abrir minha empresa <ArrowRight className="size-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Sem compromisso. Resposta em até 24h úteis.
              </p>
            </form>
          </div>
        </Section>
      </div>

      <div className="bg-surface">
        <Section>
          <h2 className="text-2xl uppercase md:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
      </div>
    </Page>
  );
}
