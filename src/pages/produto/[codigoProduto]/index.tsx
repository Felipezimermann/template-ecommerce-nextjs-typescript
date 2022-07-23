import { interfaceLoja } from "../../../interfaces/layouts";
import { LayoutLoja } from "../../../layouts/layoutLoja";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "../../../styles/produto.module.css";
import ImagensProduto from "../../../components/produto/imagensProduto";

const Produto: interfaceLoja = () => {
  // const [codigoProduto, setCodigoProduto] = useState<any>();
  const route = useRouter();

  useEffect(() => {}, [route.query.codigoProduto]);

  return (
    <>
      <div className={style.corpo}>
        <div className={style.menu}>
          Celular e Smartphone iPhone iPhone 11 iPhone 11 Apple 64GB Branco 6,1”
          12MP iOSs
        </div>
        <div className={style.titulo}>
          iPhone 11 Apple 64GB Branco 6,1” 12MP iOS
        </div>
        <div className={style.imagens}>
          <ImagensProduto />
        </div>
      </div>
    </>
  );
};

Produto.layoutProps = { layout: LayoutLoja };

export default Produto;
