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

/** Gera um slug com base em qualquer texto entregue */
export function slugify(text: string) {
   return text
      ? text
           .toString()
           .normalize("NFD")
           .replace(/[\u0300-\u036f]/g, "")
           .toLowerCase()
           .trim()
           .replace(/\s+/g, "-")
           .replace(/[^\w-]+/g, "")
           .replace(/--+/g, "-")
      : "";
}

/** Gerar um array contendo Integers de 1 até o length. */
export function gerarArray(length = 0) {
   return Array.from({ length }, (v, i) => i + 1);
}
