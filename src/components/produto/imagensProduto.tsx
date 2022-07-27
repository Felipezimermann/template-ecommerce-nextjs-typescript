import Image from "next/image";
import { useEffect, useState } from "react";
import style from "../../styles/imagensProduto.module.css";
import { iInfoProd } from "../../interfaces/produto";

const ImagensProduto = (props: iInfoProd) => {
  const { imagens } = props;

  const [imagemPrincipal, setImagemPrincipal] = useState("/");

  useEffect(() => {
    if (imagens) {
      setImagemPrincipal(imagens[0]);
    }
  }, [imagens]);
  return (
    <>
      <section className={style.corpo}>
        <div className={style.menuPaiImagens}>
          {imagens?.map((image, key) => (
            <div key={key}>
              <div
                onMouseOver={() => setImagemPrincipal(image)}
                className={style.menuImagens}
              >
                <Image
                  key={key}
                  src={image}
                  width={80}
                  height={70}
                  alt="celular"
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            src={`${imagemPrincipal}`}
            width={500}
            height={500}
            alt="celular"
          />
        </div>
      </section>
    </>
  );
};

export default ImagensProduto;
