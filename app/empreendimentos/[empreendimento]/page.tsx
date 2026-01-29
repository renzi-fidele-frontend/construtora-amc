import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { empreendimentos} from "@/data/data";
import { analisarCor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import IconesCollapsivel from "./components/IconesCollapsivel";

const Empreendimento = async ({ params }: { params: Promise<{ empreendimento: string }> }) => {
   const { empreendimento: id } = await params;
   const empreendimento = encontrarEmpreendimento(id);

   function encontrarEmpreendimento(idEmpreendimento: string) {
      return empreendimentos.find((v) => v.id === idEmpreendimento);
   }

   return (
      empreendimento && (
         <div>
            <Breadcrumb
               links={[
                  { titulo: "Início", href: "/" },
                  { titulo: "Empreendimentos", href: "/empreendimentos" },
                  { titulo: String(empreendimento?.nome), href: `/empreendimentos/${id}`, ativo: true },
               ]}
            />
            {/* Vitrine */}
            <section className="py-13.5 text-zinc-500">
               <Container>
                  {/* Status */}
                  <div
                     className={`text-2xl uppercase font-medium ${analisarCor(empreendimento.categoria)} text-white py-2 px-8 relative overflow-hidden w-115`}
                  >
                     <p>{empreendimento.categoria}</p>
                     {/* Rectângulo overlay */}
                     <svg
                        className="absolute end-0 inset-y-0"
                        width="96"
                        height="55"
                        viewBox="0 0 96 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M0 0H63.5H96V55L46 54.5L0 0Z" fill="white" />
                     </svg>
                  </div>
                  {/* Detalhes */}
                  <div className="border">
                     {/* Heading */}
                     <div className="bg-zinc-50 py-3 px-8 flex items-center justify-between">
                        <div className="border-e grow">
                           <h1 className="font-semibold text-4xl text-theme1">{empreendimento?.nome}</h1>
                        </div>
                        <nav className="flex gap-15 justify-between text-lg px-14 *:hover:underline basis-[50%]">
                           <Link href="#detalhes">Detalhes</Link>
                           <Link href="#imagens">Imagens</Link>
                           <Link href="#diferenciais">Diferenciais</Link>
                           <Link href="#localizacao">Localização</Link>
                        </nav>
                     </div>
                     {/* Demonstração do empreendimento */}
                     <div className="h-100 relative flex flex-col justify-center items-end">
                        {/* Detalhes de área */}
                        <div className="bg-zinc-50 relative flex w-fit end-25 shadow-xl/50">
                           <div className="flex items-center gap-6 p-8 border [&_span]:text-5xl [&_span]:font-medium font-light text-center">
                              <p className="flex flex-col justify-center" dangerouslySetInnerHTML={{ __html: empreendimento?.destaque }}></p>
                              <div className="border h-18 border-dashed"></div>
                              <p
                                 className="flex flex-col justify-center"
                                 dangerouslySetInnerHTML={{ __html: empreendimento?.descricao_area }}
                              ></p>
                           </div>
                           {/* Logo do empreendimento */}
                           <Image
                              width={1080}
                              height={1080}
                              className="size-46"
                              src={empreendimento.detalhes.logomarca}
                              alt={`Logomarca do empreendimento ${empreendimento?.nome}`}
                           />
                        </div>
                        {/* Imagem de fundo */}
                        <Image
                           src={String(empreendimento.detalhes?.fundoDestaque)}
                           width={1920}
                           height={1080}
                           className="inset-0 absolute object-cover h-full -z-1"
                           alt="Ilustração demonstrando o empreendimento ${empreedimento.} "
                        />
                     </div>
                     {/* Ícones de destaques */}
                     <IconesCollapsivel />
                  </div>
               </Container>
            </section>
         </div>
      )
   );
};
export default Empreendimento;
