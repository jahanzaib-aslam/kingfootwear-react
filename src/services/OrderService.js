import { APICore, setAuthorization } from "../api/apiCore";
const api = new APICore();

const getOrders = async (user) => {
  setAuthorization(user.token);

  try {
    const baseUrl = "/order/list/" + user.id;
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getOrders };
