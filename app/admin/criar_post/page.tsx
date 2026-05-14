"use client";
import Container from "@/components/layout/Container";
import RichEditor from "@/app/admin/components/RichEditor";
import SectionIntro from "@/components/shared/SectionIntro";
import { Input } from "@/components/ui/input";

// TODO: Adicionar a funcionalidade de publicar um artigo
export default function CriarPost() {
   const [previaThumbanil, setPreviaThumbnail] = useState<ArrayBuffer | string | null>(null);
   const [previaDestaque, setPreviaDestaque] = useState<ArrayBuffer | string | null>(null);

   function renderizarPreviaThumbnail(e: ChangeEvent<HTMLInputElement>) {
      if (!e.target.files) return;
      const reader = new FileReader();
      reader.onload = () => {
         setPreviaThumbnail(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
   }

   function renderizarPreviaDestaque(e: ChangeEvent<HTMLInputElement>) {
      if (!e.target.files) return;
      const reader = new FileReader();
      reader.onload = () => {
         setPreviaDestaque(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
   }

   return (
      <Container className="py-25">
         <SectionIntro titulo="Adicione um artigo" descricao="Adicione um artigo para o blog da construtora AMC" className="items-start!" />
         <form className="flex flex-col gap-5 [&_input]:border-theme1 [&_fieldset]:flex [&_fieldset]:flex-col [&_fieldset]:gap-1.5 **:data-placeholder:text-theme1!">
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
            <fieldset>
               <label>
                  Foto do thumbnail <small>(370x290)</small>
               </label>
               <label htmlFor="thumbnail" className="w-fit cursor-pointer hover:opacity-80 hover:text-theme2 transition group relative">
                  <div className="p-15 bg-zinc-300 w-fit">
                     <div className="rounded border-3 border-theme1 group-hover:border-theme2 transition border-dashed p-8 w-fit mx-auto">
                        <Plus className="size-14" />
                     </div>
                     <p className="mt-4">Clique para carregar uma imagem</p>
                  </div>
                  {/* Prévia */}
                  {previaThumbanil && (
                     <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={String(previaThumbanil)}
                        alt="Thumbnail do artigo"
                        width={300}
                        height={300}
                     />
                  )}
               </label>
               {/* Input invisível */}
               <input className="hidden" type="file" name="thumbnail" accept="image/*" id="thumbnail" onChange={renderizarPreviaThumbnail} />
            </fieldset>
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
