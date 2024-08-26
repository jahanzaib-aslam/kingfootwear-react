import LoginFormPopup from "@/components/common/LoginFormPopup";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Features from "@/components/common/features/Features";
import Hero from "@/components/homes/home-1/Hero";
import Products1 from "@/components/homes/home-1/Products1";
import Products2 from "@/components/homes/home-1/Products2";
import Products3 from "@/components/homes/home-1/Products3";
import Products5 from "@/components/homes/home-1/Products5";

import MetaComponent from "@/components/common/MetaComponent";

import { getProducts } from "@/services/HomeService";
import { useEffect, useState } from "react";

const metadata = {
  title: "KingsFootwear",
  description: "A complete one stop Shoes shop",
};
export default function HomePage1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (data) {
        setProducts(data.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <div>
        <Header1 />
        <main className="page-wrapper">
          <Hero />
          <div className="mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5"></div>
          <div className="pb-1"></div>
          <Products1 product={products?.product1} />
          <div className="mb-4 pb-4 mb-xl-5 pb-xl-5"></div>
          <Products2
            product={products?.product2}
            categories={products?.categories}
          />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          <Products3 banner={products?.banner_image} />
          <div className="mb-3 mb-xl-5 pb-1 pb-xl-5"></div>
          {/* <Products4 /> */}
          <div className="mb-5 pb-1 pb-xl-4"></div>
          <Products5 product={products?.limited_edition} />
          {/* <InstaGram /> */}
          <div className="mb-4 pb-4 pb-xl-5 mb-xl-5"></div>
          <div className="bg-white">
            <Features />{" "}
          </div>
        </main>
        <Footer1 />
        <LoginFormPopup />{" "}
      </div>
    </>
  );
}
