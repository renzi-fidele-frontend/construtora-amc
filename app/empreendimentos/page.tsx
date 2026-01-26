import Container from "@/components/layout/Container";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import SectionIntro from "@/components/shared/SectionIntro";
import { empreendimentos } from "@/data/data";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
               <SectionIntro
                  className="items-start!"
                  titulo="Empreendimentos"
                  descricao="Descubra todos os empreendimentos feitos pela AMC Construções"
               />
               {/* Listagem dos empreendimentos */}
               <div className="flex gap-12 *:basis-[calc(33.3%-48px)] justify-between flex-wrap">
                  {empreendimentos.map((v, k) => (
                     <CardEmpreendimento largura="w-full" empreendimento={v} key={k} />
                  ))}
               </div>
            </Container>
         </section>
      </div>
   );
}
