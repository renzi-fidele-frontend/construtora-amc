import { useEditorState, type Editor } from "@tiptap/react";
import { ArrowUpToLine, Bold, Italic, List, ListOrdered, LucideProps, TextQuote, Underline } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
   editor: Editor;
}
interface IButton {
   name: string;
   action: () => boolean;
   icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
   isActive?: () => boolean;
}
interface IHeading {
   label: string;
   level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Toolbar = ({ editor }: Props) => {
   useEditorState({
      editor,
      selector: (ctx) => ctx.editor.state,
   });

   // Headings
   const headings: IHeading[] = [
      { label: "H1", level: 1 },
      { label: "H2", level: 2 },
      { label: "H3", level: 3 },
      { label: "H4", level: 4 },
      { label: "H5", level: 5 },
      { label: "H6", level: 6 },
   ];

   // Botões de formatação de texto
   const buttons: IButton[] = [
      { name: "Italico", icon: Italic, action: () => editor.chain().focus().toggleItalic().run(), isActive: () => editor.isActive("italic") },
      { name: "Negrito", icon: Bold, action: () => editor.chain().focus().toggleBold().run(), isActive: () => editor.isActive("bold") },
      {
         name: "Sublinhar",
         icon: Underline,
         action: () => editor.chain().focus().toggleUnderline().run(),
         isActive: () => editor.isActive("underline"),
      },
      {
         name: "Blockquote",
         icon: TextQuote,
         action: () => editor.chain().focus().toggleBlockquote().run(),
         isActive: () => editor.isActive("blockquote"),
      },
      {
         name: "Lista de bullets",
         icon: List,
         action: () => editor.chain().focus().toggleBulletList().run(),
         isActive: () => editor.isActive("bulletList"),
      },
      {
         name: "Lista numérica",
         icon: ListOrdered,
         action: () => editor.chain().focus().toggleOrderedList().run(),
         isActive: () => editor.isActive("orderedList"),
      },
   ];

   return (
      <div className="flex gap-2 mb-3 ">
         {/* Headings */}
         {headings.map(({ label, level }) => (
            <button
               className="p-3 border rounded cursor-pointer hover:bg-theme1 hover:text-white transition-all data-[active=true]:bg-theme1! data-[active=true]:text-white!"
               data-active={editor.isActive("heading", { level })}
               onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
               key={level}
            >
               {label}
            </button>
         ))}
         {/* Rest of buttons */}
         {/* TODO: Adicionar o tooltip de cada botão */}
         {buttons.map(({ name, icon: Icon, action, isActive }) => (
            <button
               className="p-3 border rounded cursor-pointer hover:bg-theme1 hover:text-white transition-all data-[active=true]:bg-theme1! data-[active=true]:text-white!"
               data-active={isActive && isActive()}
               onClick={action}
               key={name}
            >
               <Icon />
            </button>
         ))}
      </div>
   );
};
export default Toolbar;

// Headings, Text aligniment, Bold, Italic, Linethrough, Underline, Superscript, Subscript, Colors, Image, Links, Separator
