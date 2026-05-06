"use client";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarPlus, ChevronDownIcon, FilePenLine, LogOut, User } from "lucide-react";
import Link from "next/link";

export function AdminPanel() {
   return (
      <div className="fixed top-7 end-0 pe-5 z-5">
         <ButtonGroup>
            <Button variant="outline">
               <User /> Gerenciar
            </Button>
            <DropdownMenu>
               {/* Gatilho */}
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="pl-2!">
                     <ChevronDownIcon />
                  </Button>
               </DropdownMenuTrigger>
               {/* Conteúdo */}
               <DropdownMenuContent align="end" className="w-44 **:cursor-pointer">
                  <DropdownMenuGroup>
                     <Link href="/admin/criar_post">
                        <DropdownMenuItem>
                           <CalendarPlus />
                           Adicionar artigo
                        </DropdownMenuItem>
                     </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <Link href="/admin/gerir_posts">
                        <DropdownMenuItem>
                           <FilePenLine />
                           Gerenciar artigos
                        </DropdownMenuItem>
                     </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                     <DropdownMenuItem variant="destructive">
                        <LogOut />
                        Deslogar
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
               </DropdownMenuContent>
            </DropdownMenu>
         </ButtonGroup>
      </div>
   );
}
