import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Shop1 from "@/components/shoplist/Shop1";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import { useEffect, useState } from "react";

const metadata = {
  title: "Shop 1 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};

import { getProducts } from "@/services/ProductService";

export default function ShopPage1() {
  const [products, setProducts] = useState([]);

  let params = useParams();
  const filter = params.filter;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(filter);
      if (data) {
        setProducts(data.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <Shop1 products={products} />
      </main>
      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
