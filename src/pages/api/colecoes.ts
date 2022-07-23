// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import iCardProduto from "../../interfaces/cards";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<iCardProduto[]>
) {
  const produtos: iCardProduto[] = [
    {
      img: "celular.webp",
      titulo: "Smartphone",
      desconto: 10,
      preco: "R$ 3.078.90",
      precoDesconto: "R$ 1.979,10",
      parcelado: "ou 9x de R$ 244,33 sem juros",
      codigo: "3",
    },
    {
      img: "imagem1.webp",
      titulo: "fritadeira",
      desconto: 10,
      preco: "R$ 2.078.90",
      precoDesconto: "R$ 979,10",
      codigo: "4",
    },
  ];
  res.status(200).json(produtos);
}
