import { APICore, setAuthorization } from "../api/apiCore";
import { toast } from "react-toastify";
import { register, logout, update } from "@/redux/auth/authSlice";
import { getWishList } from "./WishlistService";
const AppURL = import.meta.env.VITE_API_URL;

const api = new APICore();

const registerUser = async (params, dispatch, navigate = null) => {
  try {
    const baseUrl = "/customer/register";
    const response = await api.create(`${baseUrl}`, params);
    response.then((response) => {
      if (response.status === 200) {
        const data = response.data;
        if (response.data.code == 1) {
          dispatch(register(data.data));
          toast.success(data.message, {
            icon: "🚀",
          });
          window.location.reload();
        }
      }
    });
  } catch (error) {
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
};

const loginUser = async (params, dispatch, navigate = null) => {
  try {
    const baseUrl = "/customer/login";
    const response = await api.create(`${baseUrl}`, params);
    const user = response.data.data;
    api.setLoggedInUser(user);
    setAuthorization(user.token);

    toast.success(response.data.message, {
      icon: "🚀",
    });

    setTimeout(() => {
      if (navigate) {
        navigate("/");
      }
    }, 2000);
  } catch (error) {
    api.setLoggedInUser(null);
    setAuthorization(null);
  }
};

const logoutUserService = async (dispatch, navigate = null) => {
  try {
    const baseUrl = "/customer/logout";
    const AuthUser = api.getLoggedInUser();
    setAuthorization(AuthUser.token);
    const response = await api.create(`${baseUrl}`);
    api.setLoggedInUser(null);
    setAuthorization(null);
    console.log("going to dispatch");
    dispatch(logout());
    toast.success(response.data.message, {
      icon: "🚀",
    });

    setTimeout(() => {
      if (navigate) {
        navigate("/");
      }
    }, 2000);
  } catch (error) {
    console.log("error");
    console.log(error);
    // api.setLoggedInUser(null);
    // setAuthorization(null);
  }
};

const updateUserProfile = async (params, dispatch) => {
  const AuthUser = api.getLoggedInUser();
  setAuthorization(AuthUser.token);

  try {
    const baseUrl = "/customer/update/" + AuthUser.id;
    const response = await api.update(`${baseUrl}`, params);
    if (response.status === 200) {
      const data = response.data;
      if (response.data.code == 1) {
        dispatch(update(data.data));
        api.setLoggedInUser(data.data);
        toast.success(data.message, {
          icon: "🚀",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const resetCustomerPassword = async (params) => {
  const AuthUser = api.getLoggedInUser();
  setAuthorization(AuthUser.token);

  try {
    const baseUrl = "/customer/resetPassword/" + AuthUser.id;
    const response = await api.update(`${baseUrl}`, params);
    if (response.status === 200) {
      const data = response.data;
      if (response.data.code == 1) {
        toast.success(data.message, {
          icon: "🚀",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export {
  registerUser,
  loginUser,
  logoutUserService,
  updateUserProfile,
  resetCustomerPassword,
};
