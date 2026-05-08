import { useEditorState, type Editor } from "@tiptap/react";
import { Bold, Italic, LucideProps, TextQuote, Underline } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
   editor: Editor;
}
interface IButton {
   name: string;
   action: () => boolean;
   icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
   isActive: () => boolean;
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

   const buttons: IButton[] = [
      { name: "italic", icon: Italic, action: () => editor.chain().focus().toggleItalic().run(), isActive: () => editor.isActive("italic") },
      { name: "bold", icon: Bold, action: () => editor.chain().focus().toggleBold().run(), isActive: () => editor.isActive("bold") },
      {
         name: "underline",
         icon: Underline,
         action: () => editor.chain().focus().toggleUnderline().run(),
         isActive: () => editor.isActive("underline"),
      },
      {
         name: "blockquote",
         icon: TextQuote,
         action: () => editor.chain().focus().toggleBlockquote().run(),
         isActive: () => editor.isActive("blockquote"),
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
         {buttons.map(({ name, icon: Icon, action, isActive }) => (
            <button
               className="p-3 border rounded cursor-pointer hover:bg-theme1 hover:text-white transition-all data-[active=true]:bg-theme1! data-[active=true]:text-white!"
               data-active={isActive()}
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
