import { useEffect, useState } from "react";
import { LayoutLoja } from "../layouts/layoutLoja";
import { interfaceLoja } from "../interfaces/layouts";
import Car from "../components/shop/Car";
import { interfacePageProps } from "../interfaces/loja";
import { adicionarCarrinho } from "../contexts/home";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Carroceu from "../components/produto/carroceu";
import iCarroceu from "../interfaces/carroceu";

const Home: interfaceLoja = (props: interfacePageProps) => {
  const { quantidadeIntens, setQuantidadeIntens } = props.carrinho;

  const produtos: iCarroceu[] = [
    {
      img: "celular.webp",
      titulo: "Smartphone",
      desconto: 10,
      preco: "R$ 3.078.90",
      precoDesconto: "R$ 1.979,10",
      parcelado: "ou 9x de R$ 244,33 sem juros",
    },
    {
      img: "imagem1.webp",
      titulo: "Smartphone",
      desconto: 10,
      preco: "R$ 3.078.90",
      precoDesconto: "R$ 1.979,10",
    },
  ];

  return (
    <div className={styles.conteudo}>
      <div className={styles.grupos_banners}>
        <div className={styles.bannerPrincipal}>
          <Image
            src="/banner_principal.webp"
            width={"600"}
            layout="responsive"
            height={100}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <Image
            src="/subbanner.webp"
            width={"600"}
            layout="responsive"
            height={100}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>

      <div className={styles.sub_grupos_banners}>
        <div>
          <Image
            src="/banner1.webp"
            width={363}
            height={163}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <Image
            src="/banner2.webp"
            width={363}
            height={163}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <Image
            src="/banner1.webp"
            width={363}
            height={163}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <h2>💙 Os MELHORES da semana</h2>
      <div className={styles.grupos_produtos}>
        <>
          {produtos.map((produto, key) => (
            <Carroceu
              titulo={produto.titulo}
              desconto={produto.desconto}
              preco={produto.preco}
              precoDesconto={produto.precoDesconto}
              img={produto.img}
              parcelado={produto.parcelado}
              key={key}
            />
          ))}
        </>
      </div>
    </div>
  );
};

Home.layoutProps = { layout: LayoutLoja };

export default Home;
