"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import Toolbar from "./Toolbar";
import styles from "./RichEditor.module.css";
import TextAlign from "@tiptap/extension-text-align";
import { ImagemEditavel } from "../extensions/ImagemEditavel";

interface Props {
   content?: string;
   onChange?: (html: string) => void;
}

export default function RichEditor({ content, onChange }: Props) {
   // Inicializando o text editor
   // TODO: Instalar a extenção de tabelas e de emojis para resolver o bug que quebra ao colar um emoji
   // FIXME: Descobrir porque o editor quebra ao colar uma imagem, NB: Mostra o erro width=null
   const editor = useEditor({
      extensions: [
         StarterKit.configure({
            link: { openOnClick: false },
         }),
         TextAlign.configure({ types: ["heading", "paragraph"] }),
         ImagemEditavel,
      ],
      content,
      onUpdate: ({ editor }) => {
         if (!onChange) return;
         onChange(editor.getHTML());
      },
      immediatelyRender: false,
   });

   // Atualizando o conteúdo do editor
   useEffect(() => {
      if (!editor || !content) return;
      if (content !== editor.getHTML()) {
         editor.commands.setContent(content);
      }
   }, [content, editor]);

   if (!editor) {
      return null;
   }

   return (
      <div className={styles.ct + " border border-theme1 p-2"}>
         <Toolbar editor={editor} />
         <EditorContent className="*:min-h-60" editor={editor} />
      </div>
   );
}
