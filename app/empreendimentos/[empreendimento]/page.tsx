import Breadcrumb from "@/components/shared/Breadcrumb";
import { empreendimentos } from "@/data/data";

const Empreendimento = async ({ params }: { params: Promise<{ empreendimento: string }> }) => {
   const { empreendimento: id } = await params;
   const empreendimentoEncontrado = encontrarEmpreendimento(id);

   function encontrarEmpreendimento(idEmpreendimento: string) {
      return empreendimentos.find((v) => v.id === idEmpreendimento);
   }

   return (
      <div>
         <Breadcrumb
            links={[
               { titulo: "Início", href: "/" },
               { titulo: "Empreendimentos", href: "/empreendimentos" },
               { titulo: String(empreendimentoEncontrado?.nome), href: `/empreendimentos/${id}`, ativo: true },
            ]}
         />
      </div>
   );
};
export default Empreendimento;
