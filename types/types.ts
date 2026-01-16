export interface IEmpreendimento {
   categoria: "Lançamento" | "Pré-lançamento" | "Pronto para morar";
   nome: string;
   /** Tamanho da imagem 352 x 198 */
   thumbnail: string;
   estado: string;
   endereco_curto: string;
   destaque: string;
   descricao_area: string;
   /** Tamanho das imagens 40 x 40 */
   icones: (
      | "academia"
      | "campo-futebool"
      | "churasqueira"
      | "game"
      | "gourmet"
      | "pet-place"
      | "pets"
      | "piscina"
      | "piso-laminado"
      | "playground"
      | "portao-automatico"
      | "sala-de-festas"
      | "spa"
   )[];
   id: string;
}