"use client";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Btn from "@/components/shared/Btn";
import { slugify } from "@/lib/utils";
import { useRouter } from "next/navigation";
import RichEditor from "./RichEditor";
import { IArtigo } from "@/models/Artigo";
import { apanhar_categorias, editar_artigo, ICategoria, publicar_artigo } from "@/lib/blog";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

/** Formulario de criação ou edição de um artigo do blog
 * @param artigo - No modo de edição, recebe o artigo a ser editado e automaticamente preenche o formulário
 */
const FormularioDoArtigo = ({ artigoAtual }: { artigoAtual?: IArtigo }) => {
   const router = useRouter();
   const [previaThumbanil, setPreviaThumbnail] = useState<ArrayBuffer | string | null>(null);
   const [previaDestaque, setPreviaDestaque] = useState<ArrayBuffer | string | null>(null);
   // Inputs do formulário
   const tituloRef = useRef<HTMLInputElement>(null);
   const descricaoRef = useRef<HTMLTextAreaElement>(null);
   const thumbnailRef = useRef<HTMLInputElement>(null);
   const destaqueRef = useRef<HTMLInputElement>(null);
   const conteudoRef = useRef<string>(null);
   const [loadingPost, setLoadingPost] = useState(false);
   const [categorias, setCategorias] = useState<ICategoria[]>([]);
   const categoriaRef = useRef<string>(null);

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

   // Publicando ou editando o artigo
   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setLoadingPost(true);

      // Pegando os dados do formulário
      const titulo = tituloRef?.current?.value;
      const descricao = descricaoRef?.current?.value;
      const thumbnail = thumbnailRef?.current?.files?.[0];
      const destaque = destaqueRef?.current?.files?.[0];
      const conteudo = conteudoRef?.current;

      // Verificando se todos os inputs foram preenchidos
      if (!titulo || !descricao || !conteudo) return;

      // Publicando o artigo
      const data = { titulo, descricao, conteudo, slug: slugify(titulo), thumbnail, destaque };
      if (!artigoAtual) {
         const publicar = await publicar_artigo(data);
         router.push(`/blog/${publicar?.slug}`);
      } else {
         // Editando o artigo
         const novoArtigo = { titulo, descricao, conteudo, slug: slugify(titulo), categoria: categoriaRef.current };
         const editar = await editar_artigo(novoArtigo, artigoAtual);
         if (editar) toast("Artigo editado com sucesso!");
      }
      setLoadingPost(false);
   }

   //  Renderizando as prévias dos imagens caso se esteja no modo de edição
   useEffect(() => {
      function renderizarImagens() {
         setPreviaThumbnail(String(artigoAtual?.thumbnail.secure_url));
         setPreviaDestaque(String(artigoAtual?.destaque.secure_url));
         conteudoRef.current = String(artigoAtual?.conteudo);
      }
      if (artigoAtual) {
         renderizarImagens();
         categoriaRef.current = String(artigoAtual.categoria);
      }
   }, [artigoAtual]);

   // Pegando as categorias
   useEffect(() => {
      async function apanhar() {
         const categs = await apanhar_categorias();
         setCategorias(categs.categorias);
      }
      if (categorias?.length === 0) apanhar();
   }, [categorias]);

   return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-col gap-5 [&_input]:border-theme1 [&_fieldset]:flex [&_fieldset]:flex-col [&_fieldset]:gap-1.5 **:data-placeholder:text-theme1!"
      >
         {/* Título */}
         <fieldset>
            <label htmlFor="titulo">Titulo do artigo</label>
            <Input defaultValue={artigoAtual && artigoAtual.titulo} required ref={tituloRef} name="titulo" id="titulo" />
         </fieldset>

         {/* Descrição */}
         <fieldset>
            <label htmlFor="descricao">Descrição do artigo</label>
            <textarea
               defaultValue={artigoAtual && artigoAtual.descricao}
               required
               ref={descricaoRef}
               className="w-full border border-theme1 h-23 p-3"
               name="descricao"
               id="descricao"
            ></textarea>
         </fieldset>

         {/* Categoria */}
         {categorias.length > 0 && (
            <fieldset>
               <label htmlFor="categoria">Categoria do artigo</label>
               <Select
                  onValueChange={(newValue) => {
                     categoriaRef.current = newValue;
                  }}
                  defaultValue={artigoAtual && String(artigoAtual.categoria)}
                  required
               >
                  <SelectTrigger className="border-theme1 cursor-pointer w-full">
                     <SelectValue placeholder="Selecione o categoria" />
                  </SelectTrigger>
                  <SelectContent>
                     {categorias?.map((categoria) => (
                        <SelectItem
                           key={categoria._id}
                           value={categoria._id}
                           className="text-white! hover:bg-theme1! transition cursor-pointer md:text-lg"
                           style={{ background: categoria.cor }}
                        >
                           {categoria.nome}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            </fieldset>
         )}

         {/* Thumbnail */}
         <fieldset>
            <label>
               Foto do thumbnail <small>(370x290)</small>
            </label>
            <label htmlFor="thumbnail" className="w-fit cursor-pointer hover:opacity-80 hover:text-theme2 transition group relative">
               <div className="p-15 md:p-18 bg-zinc-300 w-fit">
                  <div className="rounded border-3 border-theme1 group-hover:border-theme2 transition border-dashed p-5 md:p-8 w-fit mx-auto">
                     <Plus className="size-14" />
                  </div>
                  <p className="mt-4 text-center">Clique para carregar uma imagem</p>
               </div>
               {/* Prévia */}
               {previaThumbanil && (
                  <Image
                     className="absolute inset-0 w-full h-full object-left object-cover"
                     src={String(previaThumbanil)}
                     alt="Thumbnail do artigo"
                     width={300}
                     height={300}
                  />
               )}
            </label>
            {/* Input invisível */}
            <input
               required={artigoAtual ? false : true}
               ref={thumbnailRef}
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
            <label htmlFor="destaque" className="cursor-pointer hover:opacity-80 hover:text-theme2 transition group relative">
               <div className="py-20 sm:p-30 md:p-45 lg:p-70 bg-zinc-300">
                  <div className="rounded border-3 border-theme1 group-hover:border-theme2 transition border-dashed p-8 w-fit mx-auto">
                     <Plus className="size-14" />
                  </div>
                  <p className="mt-4 text-center">Clique para carregar uma imagem</p>
               </div>
               {/* Prévia */}
               {previaDestaque && (
                  <Image
                     className="absolute inset-0 w-full h-full object-cover object-left"
                     src={String(previaDestaque)}
                     alt="Foto de destaque do artigo"
                     width={1200}
                     height={900}
                  />
               )}
            </label>
            {/* Input invisível */}
            <input
               required={artigoAtual ? false : true}
               ref={destaqueRef}
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
               content={artigoAtual && artigoAtual.conteudo}
            />
         </fieldset>

         <Btn type="submit">{loadingPost ? "Publicando..." : artigoAtual ? "Salvar alterações" : "Publicar artigo"} </Btn>
      </form>
   );
};
export default FormularioDoArtigo;
