import { APICore } from "../api/apiCore";
const api = new APICore();

const getProduct = async (productId) => {
  try {
    const baseUrl = "/product/detail/" + productId;
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async (filter = null) => {
  try {
    const baseUrl = "/product/get/" + filter;
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getProduct, getProducts };
