import { APICore } from "../api/apiCore";
import { toast } from "react-toastify";
const api = new APICore();

const checkout = async (params, dispatch, navigate = null) => {
  try {
    const baseUrl = "/order/create";
    const response = await api.create(`${baseUrl}`, params);
    // response.then((response) => {
    if (response.status === 200) {
      const data = response.data;
      if (response.data.code == 1) {
        //   dispatch(register(data.data));
        toast.success(data.message, {
          icon: "🚀",
        });

        if (navigate) {
          navigate("/shop_order_complete");
        }
      }
    }
    // });
  } catch (error) {
    console.log(error);
  }
};

export { checkout };
