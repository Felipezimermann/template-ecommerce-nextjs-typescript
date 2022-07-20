import styles from "../../styles/carroceu.module.css";
import Image from "next/image";
import iCardProduto from "../../interfaces/cards";
import Link from "next/link";

const CardProduto = (props: iCardProduto) => {
  const { img, preco, precoDesconto, desconto, parcelado, codigo } = props;
  return (
    <div className={styles.corpo}>
      <Link href={`/produto/${codigo}`} passHref>
        <a>
          <div>
            <Image
              src={`/${img}`}
              width={227}
              height={180}
              alt="banner"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div>{props.titulo}</div>
          <div className={styles.preco}>{preco}</div>
          <strong style={{ fontSize: "24px" }}>{precoDesconto}</strong>
          <div style={{ fontSize: "15px" }}>
            no pix{" "}
            <span style={{ color: "rgb(89, 192, 11)" }}>
              ({desconto}% de desconto)
            </span>
            <div>{parcelado}</div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardProduto;
