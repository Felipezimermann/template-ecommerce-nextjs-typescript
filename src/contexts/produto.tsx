import { iInfoProd } from "../interfaces/produto";
export const infoProduto = async (
  codigoProduto: string | string[] | undefined
) =>
  new Promise<iInfoProd>((resolver, reject) => {
    fetch(`../api/infoProduto?codigoProduto=${codigoProduto}`)
      .then(async (response) => {
        resolver(response.json());
      })
      .catch((error) => {
        reject(error);
      });
  });
