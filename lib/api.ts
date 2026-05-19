import { IArtigo } from "@/models/Artigo";

// Aqui estão todas as funcionalidades que fazer as requisições públicas ao back-end
interface IResponse {
   artigos: IArtigo[];
   totalPaginas: number;
}
export async function apanhar_artigos(limite: number, pagina: number) {
   const res = await fetch(`${process.env.DOMAIN}/api/blog/apanhar_artigos?limit=${limite}&page=${pagina}`);
   const data = await res.json();
   return data as IResponse;
}

export async function apanhar_artigos_mais_ligos() {
   const res = await fetch(`${process.env.DOMAIN}/api/blog/apanhar_artigos_mais_ligos`);
   const data = await res.json();
   return data as { artigos: IArtigo[] };
}
