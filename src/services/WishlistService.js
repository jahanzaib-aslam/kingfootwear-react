import { APICore, setAuthorization } from "../api/apiCore";
import { toast } from "react-toastify";
const api = new APICore();

const addOrRemove = async (productId) => {
  const AuthUser = api.getLoggedInUser();
  setAuthorization(AuthUser.token);
  try {
    const baseUrl = "/wishlist/addOrRemove/" + productId;
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      toast.success(response.data.message, {
        icon: "🚀",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getWishList = async () => {
  const AuthUser = api.getLoggedInUser();
  setAuthorization(AuthUser.token);
  try {
    const baseUrl = "/wishlist/getList";
    const response = await api.get(`${baseUrl}`);
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { addOrRemove, getWishList };
