import { createFileRoute } from "@tanstack/react-router";
import { SegmentPage } from "@/components/site/SegmentPage";

export const Route = createFileRoute("/saude")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Médicos e Clínicas em Rio Preto | Seller" },
      {
        name: "description",
        content:
          "Contabilidade especializada em saúde: médicos, dentistas, psicólogos e clínicas. Equiparação hospitalar, PJ médica e menos imposto em Rio Preto.",
      },
      { property: "og:title", content: "Contabilidade para a Área da Saúde | Seller Contabilidade" },
      {
        property: "og:description",
        content: "PJ médica, equiparação hospitalar e planejamento tributário para clínicas.",
      },
    ],
  }),
  component: SaudePage,
});

function SaudePage() {
  return (
    <SegmentPage
      content={{
        eyebrow: "Especialidade · Saúde",
        title: "Contabilidade para médicos, dentistas e",
        highlight: "clínicas",
        subtitle:
          "Você cuida dos pacientes, a Seller cuida dos números. Estruturamos sua PJ, reduzimos a carga tributária legalmente e mantemos suas obrigações em dia.",
        results: [
          { value: "até 60%", label: "menos imposto vs. PF" },
          { value: "48h", label: "para estruturar sua PJ" },
          { value: "0", label: "custo de migração" },
          { value: "100%", label: "atendimento digital" },
        ],
        pains: [
          "Carnê-leão e imposto altíssimo recebendo como pessoa física.",
          "Dúvidas sobre equiparação hospitalar e redução da base de cálculo (8%/32%).",
          "Recebimentos de plantões, convênios e consultório particular misturados.",
          "Notas fiscais de serviço e retenções de ISS feitas fora do prazo.",
          "Sociedade entre profissionais sem contrato social adequado.",
          "Falta de pró-labore e distribuição de lucros definidos corretamente.",
        ],
        services: [
          {
            title: "PJ médica sob medida",
            text: "Escolha do CNAE, regime tributário e enquadramento ideal para o seu tipo de atuação.",
          },
          {
            title: "Equiparação hospitalar",
            text: "Análise de viabilidade e execução para reduzir IRPJ e CSLL da sua clínica.",
          },
          {
            title: "Rotina fiscal completa",
            text: "Emissão de notas, guias, folha dos funcionários e apuração mensal sem atrasos.",
          },
        ],
      }}
    />
  );
}
