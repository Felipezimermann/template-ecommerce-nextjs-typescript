import { interfaceLayoutLoja } from "../interfaces/layouts";
import Header from "../components/header";

export const LayoutLoja = (props: interfaceLayoutLoja) => {
  const { carrinho, children } = props;
  return (
    <>
      <Header shoppingCart={carrinho} />
      {children}
      <footer>rodapé</footer>
    </>
  );
};
