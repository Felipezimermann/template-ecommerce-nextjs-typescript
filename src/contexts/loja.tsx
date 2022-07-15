import { interfacePageProps } from "../interfaces/loja";

export const props = (props: interfacePageProps) => {
  const { quantidadeIntens, setQuantidadeIntens } = props.carrinho;
  return {
    carrinho: {
      quantidadeIntens,
      setQuantidadeIntens,
    },
  };
};
