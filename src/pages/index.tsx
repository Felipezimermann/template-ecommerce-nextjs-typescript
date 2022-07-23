import { useEffect, useState } from "react";
import { LayoutLoja } from "../layouts/layoutLoja";
import { interfaceLoja } from "../interfaces/layouts";
import Car from "../components/shop/Car";
import { interfacePageProps } from "../interfaces/loja";
import { buscarColecao } from "../contexts/home";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import CardProduto from "../components/produto/card";
import iCardProduto from "../interfaces/cards";

const Home: interfaceLoja = (props: interfacePageProps) => {
  const { quantidadeIntens, setQuantidadeIntens } = props.carrinho;
  const [coleccaoCelular, setcoleccaoCelular] = useState<iCardProduto[]>();

  useEffect(() => {
    const carregaColecoes = async () => {
      try {
        // setcoleccaoCelular(await buscarColecao({ codigo: 1 }));
        buscarColecao({ codigo: 1 })
          .then((dados) => setcoleccaoCelular(dados))
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    };
    carregaColecoes();
  }, []);

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
            width={460}
            height={200}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <Image
            src="/banner2.webp"
            width={460}
            height={200}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <Image
            src="/banner1.webp"
            width={460}
            height={200}
            alt="banner"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <h2>💙 Os MELHORES da semana</h2>
      <div className={styles.grupos_produtos}>
        <>
          {coleccaoCelular?.map((produto, key) => (
            <CardProduto
              titulo={produto.titulo}
              desconto={produto.desconto}
              preco={produto.preco}
              precoDesconto={produto.precoDesconto}
              img={produto.img}
              parcelado={produto.parcelado}
              key={key}
              codigo={produto.codigo}
            />
          ))}
        </>
      </div>
    </div>
  );
};

Home.layoutProps = { layout: LayoutLoja };

export default Home;
