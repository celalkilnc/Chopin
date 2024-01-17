import axios from "axios";
import { GetProductsUrl } from "../../utils/GetEndpoints";
import { GetServiceAddress } from "../../utils/GetVeriables";

export async function getProducts({ reqModel }) {
  debugger;
  await axios
    .get(
      "http://localhost:5099/api/Product/GetProducts",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
