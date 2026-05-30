import { apanhar_artigo } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export default async function EditarPost({ params }: Props) {
   const { slug } = await params;
   const artigo = await apanhar_artigo(slug);

   return (
      <div>
         <h1>Editar post: {}</h1>
      </div>
   );
}
