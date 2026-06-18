import { empreendimentos } from "@/data/data";
import { apanhar_artigos } from "@/lib/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
   const { artigos } = await apanhar_artigos(1000, 1);

   const artigosUrls = artigos.map((artigo) => ({
      url: `https://amc.eng.br/blog/${artigo.slug}`,
      lastModified: artigo.ultimaAtualizacao,
      changeFrequency: "monthly" as const,
      priority: 0.7,
   }));

   const empreendimentosUrls = empreendimentos.map((empreendimento) => ({
      url: `https://amc.eng.br/empreendimentos/${empreendimento.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
   }));

   return [
      { url: "https://amc.eng.br", priority: 1.0, changeFrequency: "weekly" },
      { url: "https://amc.eng.br/empreendimentos", priority: 0.9 },
      { url: "https://amc.eng.br/blog", priority: 0.8 },
      ...artigosUrls,
      ...empreendimentosUrls,
   ];
}
