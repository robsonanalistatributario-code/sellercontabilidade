import { createFileRoute } from "@tanstack/react-router";
import { SegmentPage } from "@/components/site/SegmentPage";

export const Route = createFileRoute("/advogados")({
  head: () => ({
    meta: [
      { title: "Contabilidade para Advogados e Sociedades de Advogados | Seller" },
      {
        name: "description",
        content:
          "Contabilidade especializada para advogados em Rio Preto: registro na OAB, sociedade unipessoal, honorários de êxito e menor carga tributária.",
      },
      { property: "og:title", content: "Contabilidade para Advogados | Seller Contabilidade" },
      {
        property: "og:description",
        content: "Sociedade unipessoal de advocacia, OAB e tributação otimizada de honorários.",
      },
    ],
  }),
  component: AdvogadosPage,
});

function AdvogadosPage() {
  return (
    <SegmentPage
      content={{
        eyebrow: "Especialidade · Advocacia",
        title: "Contabilidade para advogados e",
        highlight: "sociedades",
        subtitle:
          "Da abertura da sociedade unipessoal ao controle dos honorários de êxito. Falamos a linguagem do seu escritório e cuidamos da OAB, do fisco e da folha.",
        results: [
          { value: "SUIPRO", label: "sociedade unipessoal" },
          { value: "6%", label: "carga inicial no Simples" },
          { value: "0", label: "honorário de abertura" },
          { value: "Digital", label: "documentos assinados online" },
        ],
        pains: [
          "Receber honorários como pessoa física e pagar até 27,5% de IR.",
          "Registro da sociedade na OAB e na Receita feito de forma errada.",
          "Honorários de êxito e sucumbência sem controle de competência.",
          "Rateio entre sócios e distribuição de lucros sem formalização.",
          "Retenções em alvarás e RPVs contabilizadas incorretamente.",
          "Escritório sem contabilidade que entenda o regime da advocacia.",
        ],
        services: [
          {
            title: "Abertura na OAB",
            text: "Constituição da sociedade unipessoal ou pluripessoal com registro na Seccional.",
          },
          {
            title: "Gestão de honorários",
            text: "Controle de contratos, êxito, sucumbência e emissão correta das notas.",
          },
          {
            title: "Fiscal e folha do escritório",
            text: "Apuração mensal, ISS, admissão de estagiários e colaboradores em dia.",
          },
        ],
      }}
    />
  );
}
