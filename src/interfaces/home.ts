export interface interfeceAdicionarCarrinho {
  codigo?: number;
  quantidadeDeIntens?: number;
  setCarrinho: Function;
  carrinho: number;
  remover?: boolean;
}

export interface iBuscarColecao {
  nome?: string;
  codigo?: number;
}
