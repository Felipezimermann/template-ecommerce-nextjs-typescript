import styles from "../../styles/carroceu.module.css";
import Image from "next/image";
import iCarroceu from "../../interfaces/carroceu";

const Carroceu = (props: iCarroceu) => {
  const { img, preco, precoDesconto, desconto, parcelado } = props;
  return (
    <div className={styles.corpo}>
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
    </div>
  );
};

export default Carroceu;
