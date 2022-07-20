import { interfeceAdicionarCarrinho } from "../interfaces/home";
import { iBuscarColecao } from "../interfaces/home";
import iCardProduto from "../interfaces/cards";

export const adicionarCarrinho = (props: interfeceAdicionarCarrinho) => {
  const { setCarrinho, carrinho, quantidadeDeIntens, remover } = props;
  if (remover) {
    setCarrinho(+carrinho - 1);
  } else {
    if (quantidadeDeIntens !== null) {
      setCarrinho(+carrinho + 1);
    } else {
      setCarrinho(carrinho + quantidadeDeIntens);
    }
  }
};

export const buscarColecao = async (props: iBuscarColecao) =>
  new Promise<iCardProduto[]>((resolver, reject) => {
    const { codigo } = props;

    fetch("api/colecoes")
      .then(async (response) => {
        resolver(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
