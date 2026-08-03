import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Btn from "./Btn";
import Form from "next/form";

const BlogSearchBar = () => {
   return (
      <Form action="/blog/search" className="flex items-center gap-2 sm:gap-3 mb-4">
         <Input name="text" className="placeholder:text-sm sm:placeholder:text-xl border-theme1" placeholder="Busque por artigos sobre o mercado imobiliário" />
         <Btn type="submit" className="py-1.75! sm:py-1.5! px-3!">
            <span className="hidden sm:block">Pesquisar</span>
            <span className="sm:hidden">
               <Search />
            </span>
         </Btn>
      </Form>
   );
};
export default BlogSearchBar;
