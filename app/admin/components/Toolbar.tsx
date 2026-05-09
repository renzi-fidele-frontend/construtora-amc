import Btn from "@/components/shared/Btn";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEditorState, type Editor } from "@tiptap/react";
import { Bold, Italic, Link, List, ListOrdered, LucideProps, SeparatorHorizontal, TextQuote, Underline } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";

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
   const linkRef = useRef<HTMLInputElement | null>(null);

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
      { name: "Separador", icon: SeparatorHorizontal, action: () => editor.chain().focus().setHorizontalRule().run() },
   ];

   // Estilo padrão
   const buttonStyle =
      "leading-0 p-2.5 border rounded cursor-pointer hover:bg-theme1 hover:text-white transition-all data-[active=true]:bg-theme1! data-[active=true]:text-white!";

   // TODO: Resolver o problema do link amanhã
   function handleLink() {
      if (editor.isActive("link")) {
         editor.chain().focus().unsetLink().run();
      } else {
         if (linkRef.current) editor.chain().focus().toggleLink({ href: linkRef.current.value }).run();
      }
   }

   return (
      <div className="flex gap-2 mb-2.5">
         {/* Headings */}
         {headings.map(({ label, level }) => (
            <Tooltip key={level}>
               <TooltipTrigger asChild>
                  <button
                     className={buttonStyle}
                     data-active={editor.isActive("heading", { level })}
                     onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
                  >
                     {label}
                  </button>
               </TooltipTrigger>
               <TooltipContent>Título {level}</TooltipContent>
            </Tooltip>
         ))}

         {/* Outras formatações de texto */}
         {buttons.map(({ name, icon: Icon, action, isActive }) => (
            <Tooltip key={name}>
               <TooltipTrigger asChild>
                  <button className={buttonStyle} data-active={isActive && isActive()} onClick={action}>
                     <Icon />
                  </button>
               </TooltipTrigger>
               <TooltipContent>{name}</TooltipContent>
            </Tooltip>
         ))}

         {/* Hiperlink */}
         {!editor.isActive("link") ? (
            <Popover>
               <PopoverTrigger asChild>
                  <button className={buttonStyle} data-active={editor.isActive("link")}>
                     <Link />
                  </button>
               </PopoverTrigger>
               <PopoverContent>
                  <PopoverTitle>Adicionar link:</PopoverTitle>
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                        handleLink();
                     }}
                     className="mt-1.5"
                  >
                     <Input ref={linkRef} placeholder="Insira o link" type="url" />
                     <div onClick={handleLink}>
                        <Btn className="px-4! py-1.5! mt-2.5">Adicionar</Btn>
                     </div>
                  </form>
               </PopoverContent>
            </Popover>
         ) : (
            <Tooltip>
               <TooltipTrigger asChild>
                  <button onClick={handleLink} className={buttonStyle} data-active={editor.isActive("link")}>
                     <Link />
                  </button>
               </TooltipTrigger>
               <TooltipContent>Remover link</TooltipContent>
            </Tooltip>
         )}
      </div>
   );
};
export default Toolbar;

// Headings, Text aligniment, Bold, Italic, Linethrough, Underline, Superscript, Subscript, Colors, Image, Links, Separator
