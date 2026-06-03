import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { apanhar_artigo } from "@/lib/blog";
import FormularioDoArtigo from "../../components/FormularioDoArtigo";
import { IArtigo } from "@/models/Artigo";

type Props = { params: Promise<{ id: string }> };

export default async function EditarPost({ params }: Props) {
   const { id } = await params;
   const artigo = await apanhar_artigo(undefined, id);
   const _artigo = JSON.parse(JSON.stringify(artigo.artigo)) as IArtigo;

   return (
      <Container className="py-25">
         <SectionIntro
            titulo="Edição do artigo"
            descricao="Melhore a qualidade do artigo para o blog da construtora AMC"
            className="items-start!"
         />
         <FormularioDoArtigo artigoAtual={_artigo} />
      </Container>
   );
}
