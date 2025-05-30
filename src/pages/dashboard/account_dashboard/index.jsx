import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Dashboard from "@/components/otherPages/Dashboard";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";

import MetaComponent from "@/components/common/MetaComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const metadata = {
  title: "Dashboard-account || Uomo eCommerce Reactjs Template",
  description: "Uomo eCommerce Reactjs Template",
};

export default function AccountPage() {
  const AuthUser = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthUser) {
      navigate("/");
    }
  }, [AuthUser, navigate]);

  return (
    AuthUser && (
      <>
        <MetaComponent meta={metadata} />
        <Header1 />
        <main className="page-wrapper">
          <div className="mb-4 pb-4"></div>
          <section className="my-account container">
            <h2 className="page-title">My Account</h2>
            <div className="row">
              <DashboardSidebar />
              <Dashboard />
            </div>
          </section>
        </main>

        <div className="mb-5 pb-xl-5"></div>
        <Footer1 />
      </>
    )
  );
}
