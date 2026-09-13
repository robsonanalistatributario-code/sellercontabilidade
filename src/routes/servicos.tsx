import { createFileRoute } from "@tanstack/react-router";
import { SegmentPage } from "@/components/site/SegmentPage";
import { pageHead, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    ...pageHead({
      path: "/servicos",
      title: "Contabilidade para Prestadores de Serviços | Seller Rio Preto",
      description:
        "Contabilidade digital para prestadores de serviços, consultores, TI, marketing e agências em Rio Preto. Simples Nacional otimizado e Fator R.",
      ogTitle: "Contabilidade para Prestadores de Serviços | Seller",
      ogDescription:
        "Fator R, Simples Nacional e rotina fiscal 100% digital para quem vive de serviços.",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Contabilidade para prestadores de serviços",
            description:
              "Contabilidade digital para consultores, TI, marketing, engenharia e agências, com monitoramento do Fator R.",
            path: "/servicos",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", path: "/" },
            { name: "Prestadores de serviços", path: "/servicos" },
          ]),
        ),
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <SegmentPage
      content={{
        eyebrow: "Especialidade · Serviços",
        title: "Contabilidade para prestadores de",
        highlight: "serviços",
        subtitle:
          "Consultores, TI, marketing, engenharia, agências e autônomos. Estruturamos sua empresa para pagar o mínimo de imposto dentro da lei e emitir notas em minutos.",
        results: [
          { value: "6%", label: "alíquota possível com Fator R" },
          { value: "24h", label: "resposta do seu contador" },
          { value: "0", label: "taxa de abertura" },
          { value: "+400", label: "empresas atendidas" },
        ],
        pains: [
          "Pagar 15,5% no Anexo V quando poderia pagar 6% no Anexo III.",
          "Emitir nota fiscal manualmente e errar retenções de ISS, IR e INSS.",
          "MEI estourando o limite de faturamento sem plano de transição.",
          "Contratos com PJ e pessoas físicas sem respaldo contábil.",
          "Não saber quanto pode retirar da empresa como lucro isento.",
          "Contador que só aparece na hora de pedir documento.",
        ],
        services: [
          {
            title: "Planejamento do Fator R",
            text: "Monitoramos folha e faturamento todo mês para manter você no anexo mais barato.",
          },
          {
            title: "Notas e guias no automático",
            text: "Emissão de NFS-e, cálculo de impostos e envio das guias com lembrete de vencimento.",
          },
          {
            title: "Consultoria de crescimento",
            text: "Pró-labore, distribuição de lucros e relatórios para você decidir com número na mão.",
          },
        ],
      }}
    />
  );
}
