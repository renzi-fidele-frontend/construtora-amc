/** Path relativo aos icones de destaque. */
export type IIcone =
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
   | "sacada-com-churasqueira"
   | "telefone"
   | "lounge-bar"
   | "brinquedoteca"
   | "pergolados"
   | "coworking"
   | "car-wash" | "portaria" | "tenis-de-praia";
   // TODO: Add the following icones to the source folder


export interface IEmpreendimento {
   categoria: "Lançamento" | "Pré-lançamento" | "Entregue" | "Urbanismo";
   nome: string;
   /** Tamanho da imagem 352 x 198 */
   thumbnail: string;
   thumbIcons: IIcone[];
   estado: string;
   endereco_curto: string;
   destaque: string;
   descricao_area: string;
   /** Tamanho das imagens 40 x 40 */
   icones: IIcone[];
   destacado: boolean;
   id: string;
   detalhes: {
      fundoDestaque: string;
      ilustracoes: string[];
      plantas: string[];
      implantacao: string[];
      logomarca: string;
      bio: string[];
      minhaCasa: boolean;
      endereco_em_texto: string;
      endereco_real: string;
      coordenadas: {
         lat: number;
         lng: number;
      };
   };
}

export interface ICardArtigo {
   titulo: string;
   descricao: string;
   data: Date;
   link: string;
   thumbnail: string;
}

export interface IDepoimento {
   foto: string;
   texto: string;
   autor: string;
   empreendimento: string;
}

export interface IInfraestrutura {
   titulo: string;
   foto: string;
   destaques: string[];
}

export interface ICliente {
   titulo: string;
   destaques?: string[];
   descricao?: string;
}

export interface IIconeComDescricao {
   nome: IIcone;
   descricao: string;
}

export interface ILugar {
   lat: number;
   lng: number;
}
