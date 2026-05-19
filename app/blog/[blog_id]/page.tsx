import Container from "@/components/layout/Container";

export default function PaginaArtigo({ params }: { params: { blog_id: string } }) {
   // TODO: Adicionar a estrutura básica da página do artigo
   // TODO: Apanhar o artigo pela ID
   // TODO: Adicionar todos os artigos que estão no blog antigo da construtora para este blog
   // TODO: Ao escalar, um usuário anônimo deverá ser capaz de adicionar comentários no blog (Investigar se é boa prática ou não)
   // TODO: Investigar a possibilidade de adicionar categorias

   return (
      <Container>
         <h1>Página do artigo</h1>
         <p>{params.blog_id}</p>
      </Container>
   );
}
