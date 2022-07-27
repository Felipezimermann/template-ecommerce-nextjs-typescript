import { interfaceLoja } from "../../../interfaces/layouts";
import { LayoutLoja } from "../../../layouts/layoutLoja";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "../../../styles/produto.module.css";
import ImagensProduto from "../../../components/produto/imagensProduto";
import { infoProduto } from "../../../contexts/produto";
import { iInfoProd } from "../../../interfaces/produto";

const Produto: interfaceLoja = () => {
  const route = useRouter();

  const [dados, setDados] = useState<iInfoProd>();

  useEffect(() => {
    const infoProd = async () => {
      const { codigoProduto } = route.query;
      if (codigoProduto !== undefined) {
        infoProduto(codigoProduto)
          .then((resposta) => {
            setDados(resposta);
          })
          .catch((error) => console.log(error));
      }
    };
    infoProd();
  }, [route.query]);

  return (
    <>
      <div className={style.corpo}>
        <div className={style.menu}></div>
        <div className={style.titulo}>{dados?.titulo}</div>
        <div className={style.imagens}>
          <ImagensProduto imagens={dados?.imagens} />
        </div>
      </div>
    </>
  );
};

Produto.layoutProps = { layout: LayoutLoja };

export default Produto;
