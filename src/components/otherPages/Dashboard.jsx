import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Dashboard() {
  const AuthUser = useSelector((state) => state);
  return (
    AuthUser && (
      <div className="col-lg-9">
        <div className="page-content my-account__dashboard">
          <p>
            Hello <strong>{AuthUser.name}</strong>
          </p>
          <p>
            From your account dashboard you can view your
            <Link className="unerline-link" to="/account_orders">
              recent orders
            </Link>
            , manage your
            <Link className="unerline-link" to="/account_edit_address">
              shipping and billing addresses
            </Link>
            , and
            <Link className="unerline-link" to="/account_edit">
              edit your password and account details.
            </Link>
          </p>
        </div>
      </div>
    )
  );
}
