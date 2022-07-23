import Image from "next/image";
import { useState } from "react";
import style from "../../styles/imagensProduto.module.css";

const ImagensProduto = () => {
  const [imagemPrincipal, setImagemPrincipal] = useState("celular_1.webp");
  return (
    <>
      <section className={style.corpo}>
        <div className={style.menuPaiImagens}>
          <div
            onMouseOver={() => setImagemPrincipal("celular_1.webp")}
            className={style.menuImagens}
          >
            <Image
              src="/celulares/celular_1.webp"
              width={80}
              height={70}
              alt="celular"
            />
          </div>
          <div
            id="imagens2"
            onMouseOver={() => setImagemPrincipal("celular_2.webp")}
            className={style.menuImagens}
          >
            <Image
              src="/celulares/celular_2.webp"
              width={80}
              height={70}
              alt="celular"
            />
          </div>
          <div
            id="imagens3"
            onMouseOver={() => setImagemPrincipal("celular_3.webp")}
            className={style.menuImagens}
          >
            <Image
              src="/celulares/celular_3.webp"
              width={80}
              height={70}
              alt="celular"
            />
          </div>
          <div
            id="imagens4"
            onMouseOver={() => setImagemPrincipal("celular_4.webp")}
            className={style.menuImagens}
          >
            <Image
              src="/celulares/celular_4.webp"
              width={80}
              height={70}
              alt="celular"
            />
          </div>
        </div>
        <div>
          <Image
            src={`/celulares/${imagemPrincipal}`}
            width={600}
            height={700}
            alt="celular"
          />
        </div>
      </section>
    </>
  );
};

export default ImagensProduto;
