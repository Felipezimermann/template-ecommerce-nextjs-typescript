// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { iInfoProd } from "../../interfaces/produto";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iInfoProd>
) {
  const { codigoProduto } = req.query;
  const produtos: iInfoProd = {};
  switch (codigoProduto) {
    case "3":
      produtos.titulo = "iPhone 11 Apple 64GB Branco 6,1” 12MP iOS";
      (produtos.imagens = [
        "/celulares/celular_1.webp",
        "/celulares/celular_2.webp",
        "/celulares/celular_3.webp",
        "/celulares/celular_4.webp",
      ]),
        res.status(200).json(produtos);
      break;
    case "4":
      produtos.titulo = "Fritadeira Elétrica sem Óleo/Air Fryer Mondial";
      (produtos.imagens = [
        "/fritadeira/img1.webp",
        "/fritadeira/img2.webp",
        "/fritadeira/img3.webp",
        "/fritadeira/img4.webp",
      ]),
        res.status(200).json(produtos);

      break;

    default:
      res.status(400).json({});
  }
}
