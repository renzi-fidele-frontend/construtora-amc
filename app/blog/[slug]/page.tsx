import Container from "@/components/layout/Container";
import { apanhar_artigo } from "@/lib/api";

export default async function PaginaArtigo({ params }: { params: Promise<{ slug: string }> }) {
   const slug = (await params).slug;
   const artigo = await apanhar_artigo(slug);

   // TODO: Adicionar a estrutura básica da página do artigo
   // TODO: Adicionar todos os artigos que estão no blog antigo da construtora para este blog
   // TODO: Ao escalar, um usuário anônimo deverá ser capaz de adicionar comentários no blog (Investigar se é boa prática ou não)
   // TODO: Investigar a possibilidade de adicionar categorias

   return (
      <Container>
         <h1>Página do artigo</h1>
         <p>{slug}</p>
      </Container>
   );
}
