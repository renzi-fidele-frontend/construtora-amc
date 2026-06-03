import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImagemEditavelView from "./ImagemEditavelView";
import {  Plugin, PluginKey } from "@tiptap/pm/state";
import { remover_imagem } from "@/lib/cloudinary";

/** Esta extensão representa uma imagem no editor de texto.
 * - A imagem pode ser removida do cloudinary e do editor
 * - A imagem pode ser alinhada a esquerda, a direita ou ao centro
 */
export const ImagemEditavel = Image.extend({
   addAttributes() {
      return {
         ...this.parent?.(),
         alignment: {
            default: "left",
         },
         publicId: {
            default: null,
         },
      };
   },
   addNodeView() {
      return ReactNodeViewRenderer(ImagemEditavelView);
   },
   addProseMirrorPlugins() {
      return [
         new Plugin({
            key: new PluginKey("imagemEditavel"),
            // Removendo do cloudinary quando uma imagem for removida do editor sem ser pelo botão de remoção
            appendTransaction: (transactions, oldState, newState) => {
               const imagensAntigas: string[] = [];
               const imagensNovas: string[] = [];

               // Percorrendo o documento antigo
               oldState.doc.descendants((node) => {
                  if (node.type.name === "image" && node.attrs.publicId) {
                     imagensAntigas.push(node.attrs.publicId);
                  }
               });

               // Percorrendo o documento novo
               newState.doc.descendants((node) => {
                  if (node.type.name === "image" && node.attrs.publicId) {
                     imagensNovas.push(node.attrs.publicId);
                  }
               });

               // Detectando imagens removidas
               const imagensRemovidas = imagensAntigas.filter((id) => !imagensNovas.includes(id));

               // Removendo as imagens removidas do cloudinary
               imagensRemovidas.forEach((id) => {
                  remover_imagem(id);
               });

               return null;
            },
         }),
      ];
   },
});
