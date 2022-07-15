import { interfeceAdicionarCarrinho } from "../interfaces/home";

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
