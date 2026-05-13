"use client";
import Container from "@/components/layout/Container";
import RichEditor from "@/app/admin/components/RichEditor";
import SectionIntro from "@/components/shared/SectionIntro";
import { Input } from "@/components/ui/input";

// TODO: Adicionar a funcionalidade de publicar um artigo
export default function CriarPost() {
   return (
      <Container className="py-25">
         <SectionIntro titulo="Adicione um artigo" descricao="Adicione um artigo para o blog da construtora AMC" className="items-start!" />
         <form className="[&_input]:border-theme1 [&_fieldset]:flex [&_fieldset]:flex-col [&_fieldset]:gap-1.5 **:data-placeholder:text-theme1!">
            {/* Título */}
            <fieldset>
               <label htmlFor="titulo">Titulo do artigo</label>
               <Input name="titulo" id="titulo" />
            </fieldset>
            {/* Descrição */}
            <fieldset className="mt-5 mb-5">
               <label htmlFor="descricao">Descrição do artigo</label>
               <textarea className="w-full border border-theme1 h-23 p-3" name="descricao" id="descricao"></textarea>
            </fieldset>

            {/* Thumbnail */}
            {/* Foto de destaque */}

            <fieldset>
               <label>Conteúdo do artigo</label>
               {/* Conteúdo */}
               <RichEditor onChange={() => {}} />
            </fieldset>
         </form>
      </Container>
   );
}
