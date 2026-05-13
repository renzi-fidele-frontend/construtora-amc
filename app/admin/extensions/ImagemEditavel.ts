import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImagemEditavelView from "./ImagemEditavelView";

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
});
