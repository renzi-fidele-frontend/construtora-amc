import Image from "@tiptap/extension-image";
import { ReactNodeViewRenderer } from "@tiptap/react";
import ImagemEditavelView from "./ImagemEditavelView";

/** Esta extensão representa uma imagem no editor de texto.
 * - A imagem pode ser removida do editor, ou seja, removida do cloudinary e do editor
 */
export const ImagemEditavel = Image.extend({
   addAttributes() {
      return {
         ...this.parent?.(),
         alignment: {
            default: "left",
         },
      };
   },
   addNodeView() {
      return ReactNodeViewRenderer(ImagemEditavelView);
   },
});
