"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import Toolbar from "./Toolbar";
import styles from "./RichEditor.module.css";

interface Props {
   content: string;
   onChange?: (html: string) => void;
}
export default function RichEditor({ content, onChange }: Props) {
   // Inicializando o text editor
   const editor = useEditor({
      extensions: [StarterKit],
      content,
      onUpdate: ({ editor }) => {
         if (!onChange) return;
         onChange(editor.getHTML());
      },
      immediatelyRender: false,
   });

   // Atualizando o conteúdo do editor
   useEffect(() => {
      if (!editor) return;
      if (content !== editor.getHTML()) {
         editor.commands.setContent(content);
      }
   }, [content, editor]);

   if (!editor) {
      return null;
   }

   return (
      <div>
         <Toolbar editor={editor} />
         <EditorContent className="*:border *:h-52 *:p-2" editor={editor} />
      </div>
   );
}
