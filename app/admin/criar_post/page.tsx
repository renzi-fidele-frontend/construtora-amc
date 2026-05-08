"use client";
import Container from "@/components/layout/Container";
import RichEditor from "@/app/admin/components/RichEditor";
import SectionIntro from "@/components/shared/SectionIntro";

export default function CriarPost() {
   return (
      <Container className="py-25">
         <SectionIntro titulo="Adicione um artigo" descricao="Adicione um artigo para o blog da construtora AMC" className="items-start!" />
         <RichEditor content="" onChange={() => {}} />
      </Container>
   );
}
