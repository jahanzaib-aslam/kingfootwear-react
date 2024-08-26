import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import AccountWishlist from "@/components/otherPages/AccountWishlist";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import { getWishList } from "@/services/WishlistService";

import MetaComponent from "@/components/common/MetaComponent";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const metadata = {
  title: "Dashboard Account Wishlist || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};
export default function AccountWishlistPage() {
  const [wishList, setWishList] = useState([]);

  const AuthUser = useSelector((state) => state);

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await getWishList(AuthUser);
      if (data) {
        setWishList(data.data);
      }
    };
    fetchWishlist();
  }, []);

  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <h2 className="page-title">Wishlist</h2>
          <div className="row">
            <DashboardSidebar />
            {wishList && <AccountWishlist wishListServer={wishList} />}
          </div>
        </section>
      </main>

      <div className="mb-5 pb-xl-5"></div>
      <Footer1 />
    </>
  );
}
