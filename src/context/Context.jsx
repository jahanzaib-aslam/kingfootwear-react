/* eslint-disable react/prop-types */
import { allProducts } from "@/data/products";
import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { getWishList } from "@/services/WishlistService";
const dataContext = React.createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  const AuthUser = useSelector((state) => state);

  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const addProductToCart = (id) => {
    if (!cartProducts.filter((elm) => elm.id == id)[0]) {
      const item = {
        ...allProducts.filter((elm) => elm.id == id)[0],
        quantity: 1,
      };
      setCartProducts((pre) => [...pre, item]);

      document
        .getElementById("cartDrawerOverlay")
        .classList.add("page-overlay_visible");
      document.getElementById("cartDrawer").classList.add("aside_visible");
    }
  };

  const addProductToCart2 = (product) => {
    if (!cartProducts.filter((elm) => elm.id == product.id)[0]) {
      const item = {
        id: product.id,
        imgSrc: product.imgSrc,
        imgAlt: product.name,
        category: "Dresses",
        title: product.title,
        price: product.price,
        reviews: "8k+ reviews",
        quantity: 1,
      };

      console.log(product);

      setCartProducts((pre) => [...pre, item]);

      document
        .getElementById("cartDrawerOverlay")
        .classList.add("page-overlay_visible");
      document.getElementById("cartDrawer").classList.add("aside_visible");
    }
  };

  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id)[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };
  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  //get wishlist from local storage and save in wishlist statee
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  //if wishlist state changes, save wishlist in local storage
  useEffect(() => {
    if (AuthUser) {
      const fetchWishList = async () => {
        const data = await getWishList();
        if (data) {
          const newIds = data.data.map((item) => item.product.id);

          localStorage.setItem("wishlist", JSON.stringify(newIds));
        }
      };

      fetchWishList();
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  }, [wishList]);

  const contextElement = {
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    addProductToCart2,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
  };
  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
