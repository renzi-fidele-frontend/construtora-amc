import Container from "@/components/layout/Container";
import Btn from "@/components/shared/Btn";
import CardDestaque from "@/components/shared/CardDestaque";
import CardEmpreendimento from "@/components/shared/CardEmpreendimento";
import CarouselDeFotos from "@/components/shared/CarouselDeFotos";
import SectionIntro from "@/components/shared/SectionIntro";
import { artigos, empreendimentos, fotosDestaques } from "@/data/data";
import { Calendar, CalendarClock, HardHat, Store, UserStar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   return (
      <main className="overflow-x-hidden">
         {/* Seção do carousel de apresentação dos banners dos empreendimentos */}
         <CarouselDeFotos fotos={fotosDestaques} />
         {/* Seção dos empreendimentos */}
         <section className="pt-25 pb-32.5">
            <Container>
               <SectionIntro titulo="Empreendimentos" descricao="Conheça os nossos imóveis e encontre seu novo lar." />
               <div className="flex gap-14 *:basis-[fit-content] justify-center flex-wrap">
                  {empreendimentos
                     .filter((v) => v.destacado)
                     .map((v, k) => (
                        <CardEmpreendimento empreendimento={v} key={k} />
                     ))}
               </div>
               {/* Separador */}
               <hr className="mt-16 mb-7" />
               <div className="flex justify-center">
                  <Btn className="uppercase">Ver mais imóveis</Btn>
               </div>
            </Container>
         </section>
         {/* Seção do CTA para outras páginas */}
         <section className="grid grid-cols-4 relative">
            <CardDestaque
               Icone={Calendar}
               titulo={<span className="uppercase">Blog AMC</span>}
               descricao="Dicas sobre mercado imobiliário, educação financeira, decoração e mais!"
               link="/blog"
               className="bg-orange-400"
            />
            <CardDestaque
               Icone={UserStar}
               titulo={
                  <p>
                     Setor dedicado de <br />
                     <span>Qualidade</span>
                  </p>
               }
               descricao="O compromisso da AMC com o cliente."
               link="/quem_somos"
               className="bg-blue-800"
            />
            <CardDestaque
               Icone={Store}
               titulo={
                  <p className="uppercase">
                     Plantão de <br />
                     <span>Vendas</span>
                  </p>
               }
               descricao="Saiba onde encontrar um plantão de vendas perto de você."
               link="/contato"
               className="bg-emerald-600"
            />
            <CardDestaque
               Icone={HardHat}
               titulo={
                  <p className="uppercase">
                     Acompanhe sua <br />
                     <span>Obra</span>
                  </p>
               }
               descricao="Confira o status dos empreendimentos e acompanhe sua obra."
               className="bg-amber-400"
               link="/empreendimentos"
            />
            {/* Barra de opacidade */}
            <div className="absolute inset-x-0 top-0 bg-white opacity-30 h-5"></div>
         </section>
         {/* Seção do blog */}
         <section className="pt-24 pb-24.5">
            <Container>
               <SectionIntro titulo="Blog" descricao="Fique por dentro dos últimos artigos da AMC" />
               <div className="grid grid-cols-2 gap-8">
                  {artigos.map((v, k) => (
                     <div className="flex border border-b-7" key={k}>
                        <Image
                           className="w-60 h-full object-cover shrink-0"
                           unoptimized
                           width={224}
                           height={250}
                           src={v.thumbnail}
                           alt={`Ilustração do artigo sobre ${v.titulo}`}
                        />
                        <div className="py-5 px-6 flex flex-col gap-2">
                           <p className="text-theme1 font-medium flex items-center">
                              <CalendarClock className="size-5 shrink-0 me-1" /> {v.data.toLocaleDateString()}
                           </p>
                           <h6 className="text-theme1 font-medium text-xl line-clamp-2">{v.titulo}</h6>
                           <p className="line-clamp-4 text-grey my-1.5">{v.descricao}</p>
                           <Link href={`/blog/${encodeURIComponent(v.titulo)}`}>
                              <Btn className="text-sm uppercase py-2.5!">Ver mais</Btn>
                           </Link>
                        </div>
                     </div>
                  ))}
               </div>
            </Container>
         </section>
      </main>
   );
}
