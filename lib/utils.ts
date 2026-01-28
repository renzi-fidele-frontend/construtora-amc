import { IEmpreendimento } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function analisarCor(categoria: IEmpreendimento["categoria"]) {
   if (categoria === "Lançamento") return "bg-lancamento";
   if (categoria === "Pré-lançamento") return "bg-prelancamento";
   if (categoria === "Entregue") return "bg-entregue";
   if (categoria === "Urbanismo") return "bg-urbanismo";
   return "";
}
