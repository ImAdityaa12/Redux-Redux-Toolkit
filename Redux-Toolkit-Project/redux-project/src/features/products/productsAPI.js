import axios from "axios";

export function fetchProduts() {
  return axios.get('http://localhost:8080/products')
}
