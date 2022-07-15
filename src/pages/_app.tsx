import "../styles/globals.css";
import { LojaProps, LayoutProps } from "../interfaces/layouts";

import { useState } from "react";
import { props } from "../contexts/loja";

function MyApp({ Component, pageProps }: LojaProps) {
  const [sacola, setSacola] = useState(0);

  pageProps = props({
    carrinho: {
      quantidadeIntens: sacola,
      setQuantidadeIntens: setSacola,
    },
  });

  const Layout =
    Component.layoutProps?.layout ||
    ((props: LayoutProps) => <>{props.children}</>);

  const { carrinho } = pageProps;

  return (
    <>
      <Layout carrinho={carrinho.quantidadeIntens}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
