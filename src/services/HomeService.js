import { APICore, setAuthorization } from "../api/apiCore";
const api = new APICore();

const getSlides = async () => {
  try {
    const baseUrl = "/home/slides";
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const baseUrl = "/home/products";
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSlides, getProducts };
