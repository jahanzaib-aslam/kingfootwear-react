import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import RelatedSlider from "@/components/singleProduct/RelatedSlider";
import SingleProduct12 from "@/components/singleProduct/SingleProduct12";
import { allProducts } from "@/data/products";
import MetaComponent from "@/components/common/MetaComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "@/services/ProductService";

const metadata = {
  title: "Shop Single 1 || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function ProductDetailsPage1() {
  const [serverProduct, setServerProduct] = useState([]);

  let params = useParams();
  const productId = params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productId);
      if (data) {
        setServerProduct(data.data);
      }
    };

    fetchProduct();
  }, []);

  const product =
    allProducts.filter((elm) => elm.id == productId)[0] || allProducts[0];

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-md-1 pb-md-3"></div>
        {serverProduct && (
          <>
            <SingleProduct12 product={product} serverProduct={serverProduct} />
            <RelatedSlider products={serverProduct.related_products} />
          </>
        )}
      </main>
      <Footer1 />
    </>
  );
}
