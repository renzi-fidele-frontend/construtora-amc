import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import FormularioDoArtigo from "../components/FormularioDoArtigo";

export default function CriarPost() {
   return (
      <Container className="py-8 sm:py-12 md:py-14 lg:py-18 xl:py-25">
         <SectionIntro titulo="Adicione um artigo" descricao="Adicione um artigo para o blog da construtora AMC" className="items-start!" />
         <FormularioDoArtigo />
      </Container>
   );
}
