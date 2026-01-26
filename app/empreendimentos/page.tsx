import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ListagemDeEmpreendimentos from "./listing";

// TODO: Implementar a funcionalidade de paginação a página dos empreendimentos
export default function Empreendimentos() {
   return (
      <div>
         {/* Banner do topo */}
         <Image width={1914} height={431} src="/img/banners/empreendimentos.jpg" alt="Banner ilustrando a capa da página de empreendimento" />
         {/* Breadcrumb */}
         <nav className="bg-zinc-100 text-zinc-600 font-light">
            <Container className="flex items-center gap-2 py-4.5">
               <ChevronsRight className="size-4" /> <Link href="/">Início</Link> <ChevronsRight className="size-4" />{" "}
               <Link className="font-medium" href="/empreendimentos">
                  Empreendimentos
               </Link>
            </Container>
         </nav>
         <section>
            <Container className="py-25">
               <SectionIntro className="items-start! mb-2!" titulo="Empreendimentos" />
               <ListagemDeEmpreendimentos />
            </Container>
         </section>
      </div>
   );
}
