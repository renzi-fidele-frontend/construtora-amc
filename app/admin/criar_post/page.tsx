"use client";
import Container from "@/components/layout/Container";
import RichEditor from "@/app/admin/components/RichEditor";
import SectionIntro from "@/components/shared/SectionIntro";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import Image from "next/image";
import Btn from "@/components/shared/Btn";

// TODO: Adicionar a funcionalidade de publicar um artigo
export default function CriarPost() {
   const [previaThumbanil, setPreviaThumbnail] = useState<ArrayBuffer | string | null>(null);
   const [previaDestaque, setPreviaDestaque] = useState<ArrayBuffer | string | null>(null);
   // Inputs do formulário
   const tituloRef = useRef<HTMLInputElement>(null);
   const descricaoRef = useRef<HTMLTextAreaElement>(null);
   const thumbnailRef = useRef<HTMLInputElement>(null);
   const destaqueRef = useRef<HTMLInputElement>(null);
   const conteudoRef = useRef<string>(null);

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

   function publicarArtigo(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      // Verificando se todos os inputs foram preenchidos
      if (!tituloRef.current || !descricaoRef.current || !thumbnailRef?.current?.files || !destaqueRef?.current?.files || !conteudoRef.current)
         return;

      // Pegando os dados do formulário
      const titulo = tituloRef.current?.value;
      const descricao = descricaoRef.current?.value;
      const thumbnail = thumbnailRef.current?.files?.[0];
      const destaque = destaqueRef.current.files[0];
      const conteudo = conteudoRef.current;

      // Enviando os dados para o backend
      const data = new FormData();
      data.append("titulo", titulo);
      data.append("descricao", descricao);
      data.append("thumbnail", thumbnail);
      data.append("destaque", destaque);
      data.append("conteudo", conteudo);

      
   }

   return (
      <Container className="py-25">
         <SectionIntro titulo="Adicione um artigo" descricao="Adicione um artigo para o blog da construtora AMC" className="items-start!" />
         <form
            onSubmit={publicarArtigo}
            className="flex flex-col gap-5 [&_input]:border-theme1 [&_fieldset]:flex [&_fieldset]:flex-col [&_fieldset]:gap-1.5 **:data-placeholder:text-theme1!"
         >
            {/* Título */}
            <fieldset>
               <label htmlFor="titulo">Titulo do artigo</label>
               <Input ref={tituloRef} required name="titulo" id="titulo" />
            </fieldset>

            {/* Descrição */}
            <fieldset>
               <label htmlFor="descricao">Descrição do artigo</label>
               <textarea ref={descricaoRef} required className="w-full border border-theme1 h-23 p-3" name="descricao" id="descricao"></textarea>
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
               <input
                  ref={thumbnailRef}
                  required
                  className="hidden"
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  id="thumbnail"
                  onChange={renderizarPreviaThumbnail}
               />
            </fieldset>

            {/* Foto de destaque */}
            <fieldset>
               <label>
                  Foto de destaque <small>(1200x900)</small>
               </label>
               <label htmlFor="destaque" className="cursor-pointer hover:opacity-80 hover:text-theme2 transition group relative text-center">
                  <div className="p-70 bg-zinc-300">
                     <div className="rounded border-3 border-theme1 group-hover:border-theme2 transition border-dashed p-8 w-fit mx-auto">
                        <Plus className="size-14" />
                     </div>
                     <p className="mt-4">Clique para carregar uma imagem</p>
                  </div>
                  {/* Prévia */}
                  {previaDestaque && (
                     <Image
                        className="absolute inset-0 w-full h-full object-cover"
                        src={String(previaDestaque)}
                        alt="Foto de destaque do artigo"
                        width={1200}
                        height={900}
                     />
                  )}
               </label>
               {/* Input invisível */}
               <input
                  ref={destaqueRef}
                  required
                  className="hidden"
                  type="file"
                  name="destaque"
                  accept="image/*"
                  id="destaque"
                  onChange={renderizarPreviaDestaque}
               />
            </fieldset>

            {/* Conteúdo */}
            <fieldset>
               <label>Conteúdo do artigo</label>
               <RichEditor
                  onChange={(html) => {
                     conteudoRef.current = html;
                  }}
               />
            </fieldset>

            <Btn>Publicar artigo</Btn>
         </form>
      </Container>
   );
}
