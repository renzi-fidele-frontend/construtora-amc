import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import dayjs from "dayjs";
import LinhaArtigo from "../components/LinhaArtigo";
import { apanhar_artigos } from "@/lib/blog";
import { IArtigo } from "@/models/Artigo";

dayjs.locale("pt-br");

const GerirPosts = async () => {
   const { artigos } = await apanhar_artigos(1000, 1);
   const _artigos = JSON.parse(JSON.stringify(artigos)) as IArtigo[];

   return (
      <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25 flex flex-col items-center">
         <SectionIntro
            className="text-center"
            titulo="Gerencie os artigos do Blog"
            descricao="Edite ou remova um artigo do blog da construtora AMC"
         />
         <table className="border border-collapse border-theme1 table-auto sm:[&_th]:border [&_td]:border md:text-lg">
            <thead className="bg-theme1 text-white">
               <tr className="*:p-2">
                  <th className="whitespace-nowrap hidden lg:table-cell">Data de publicação</th>
                  <th>Artigo</th>
                  <th className="hidden md:table-cell">Ações</th>
               </tr>
            </thead>
            {/* TODO: Adicionar loading de esqueleto para melhoria da UI */}
            <tbody>{_artigos && _artigos?.map((artigo, k) => <LinhaArtigo artigo={artigo} key={k} />)}</tbody>
         </table>
      </Container>
   );
};
export default GerirPosts;
