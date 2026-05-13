import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { removerImagemNoCloudinary } from "@/lib/admin";
import { NodeViewProps, NodeViewWrapper } from "@tiptap/react";
import { Loader, TextAlignCenter, TextAlignEnd, TextAlignStart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ImagemEditavelView({ node, editor, getPos }: NodeViewProps) {
   const { src, alt, width, height, alignment, publicId } = node.attrs;
   const [loading, setLoading] = useState(false);

   async function removerDoEditor() {
      setLoading(true);
      // Remover do cloudinary
      if (publicId) {
         await removerImagemNoCloudinary(publicId);
      }

      // Remover do editor
      const posicao = getPos();
      if (posicao === undefined) return;
      editor
         .chain()
         .focus()
         .deleteRange({ from: posicao, to: posicao + node.nodeSize })
         .run();
      setLoading(false);
   }

   function alinharImagem(direcao: "left" | "right" | "center") {
      const posicao = getPos();
      if (posicao === undefined) return;

      editor.chain().focus().setNodeSelection(posicao).updateAttributes("image", { alignment: direcao }).run();
   }

   const botoes = [
      { name: "Remover imagem", icon: Trash2, action: () => removerDoEditor() },
      { name: "Alinhar à esquerda", icon: TextAlignStart, action: () => alinharImagem("left") },
      { name: "Alinhar ao centro", icon: TextAlignCenter, action: () => alinharImagem("center") },
      { name: "Alinhar à direita", icon: TextAlignEnd, action: () => alinharImagem("right") },
   ];

   return (
      <NodeViewWrapper>
         <figure id="blog-image">
            <div>
               <figure className="flex" style={{ justifyContent: alignment }}>
                  <div className="group w-fit relative transition hover:outline-2 hover:outline-theme1">
                     <Image width={width} height={height} src={src} alt={alt} />
                     {/* Ações */}
                     <div className="hidden group-hover:flex fade-in border border-zinc-400 absolute bottom-1 end-1 bg-zinc-50  items-center p-1 rounded gap-1">
                        {botoes.map(({ icon: Icon, action, name }, k) => (
                           <Tooltip key={k}>
                              <TooltipTrigger>
                                 <div
                                    className="cursor-pointer p-1 border border-zinc-400 rounded hover:bg-theme1 hover:text-white transition"
                                    onClick={action}
                                 >
                                    <Icon className="size-5" />
                                 </div>
                              </TooltipTrigger>
                              <TooltipContent>{name}</TooltipContent>
                           </Tooltip>
                        ))}
                     </div>
                     {/* Overlay de loading */}
                     {loading && (
                        <div className="absolute inset-0 bg-white flex flex-col gap-2 items-center justify-center opacity-60">
                           <Loader className="animate-spin" />
                           <p>Removendo a imagem...</p>
                        </div>
                     )}
                  </div>
               </figure>
            </div>
         </figure>
      </NodeViewWrapper>
   );
}
