import { useState } from "react";
import { LayoutLoja } from "../layouts/layoutLoja";
import { interfaceLoja } from "../interfaces/layouts";
import Car from "../components/shop/Car";
import { interfacePageProps } from "../interfaces/loja";
import { adicionarCarrinho } from "../contexts/home";

const Home: interfaceLoja = (props: interfacePageProps) => {
  const { quantidadeIntens, setQuantidadeIntens } = props.carrinho;

  return (
    <>
      <button
        onClick={() => {
          adicionarCarrinho({
            carrinho: quantidadeIntens,
            setCarrinho: setQuantidadeIntens,
          });
        }}
      >
        Comprar
      </button>
      <Car value={quantidadeIntens} />
      <button
        onClick={() => {
          adicionarCarrinho({
            carrinho: quantidadeIntens,
            setCarrinho: setQuantidadeIntens,
            remover: true,
          });
        }}
      >
        Remover
      </button>
    </>
  );
};

Home.layoutProps = { layout: LayoutLoja };

export default Home;
