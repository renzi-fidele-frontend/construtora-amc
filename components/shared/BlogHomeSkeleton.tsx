import Link from "next/link";
import Container from "../layout/Container";
import CardBlog from "./CardBlog";
import SectionIntro from "./SectionIntro";
import Btn from "./Btn";
import { gerarArray } from "@/lib/utils";

const BlogHomeSkeleton = () => {
   return (
      <section className="pt-18 sm:pt-24 pb-18 sm:pb-24.5">
         <Container>
            <SectionIntro className="text-center" titulo="Blog" descricao="Fique por dentro dos últimos artigos da AMC" />
            {/* Listagem desktop */}
            <div className="grid lg:grid-cols-2 gap-8">
               {gerarArray(4).map((v) => (
                  <CardBlog key={v} />
               ))}
            </div>
            {/* Separador */}
            <hr className="mt-6 sm:mt-10 md:mt-16 mb-7" />
            <div className="flex justify-center">
               <Link href="/blog">
                  <Btn className="uppercase">Ver mais artigos</Btn>
               </Link>
            </div>
         </Container>
      </section>
   );
};
export default BlogHomeSkeleton;
