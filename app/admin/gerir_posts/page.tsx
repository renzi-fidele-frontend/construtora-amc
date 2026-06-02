"use client";
import Container from "@/components/layout/Container";
import SectionIntro from "@/components/shared/SectionIntro";
import { IArticlesResponse } from "@/lib/blog";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import LinhaArtigo from "../components/LinhaArtigo";

dayjs.locale("pt-br");

const GerirPosts = () => {
   const [artigos, setArtigos] = useState<IArticlesResponse | null>(null);

   async function refetch() {
      const res = await fetch("/api/apanhar_artigos");
      const data = (await res.json()) as IArticlesResponse;
      setArtigos(data);
   }

   useEffect(() => {
      async function apanharArtigos() {
         const res = await fetch("/api/apanhar_artigos");
         const data = (await res.json()) as IArticlesResponse;
         setArtigos(data);
      }
      if (!artigos) apanharArtigos();
   }, [artigos]);

   return (
      <Container className="py-25 flex flex-col items-center">
         <SectionIntro titulo="Gerencie os artigos do Blog" descricao="Edite ou remova um artigo do blog da construtora AMC" />
         <table className="border border-collapse border-theme1 table-auto [&_th]:border [&_td]:border text-lg">
            <thead className="bg-theme1 text-white">
               <tr className="*:p-2">
                  <th className="whitespace-nowrap">Data de publicação</th>
                  <th>Artigo</th>
                  <th>Ações</th>
               </tr>
            </thead>
            <tbody>
               {artigos?.artigos?.length && artigos?.artigos?.map((artigo, k) => <LinhaArtigo refetch={refetch} artigo={artigo} key={k} />)}
            </tbody>
         </table>
      </Container>
   );
};
export default GerirPosts;
