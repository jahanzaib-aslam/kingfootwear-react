import { openModalUserlogin } from "@/utlis/aside";
import { othersMenuItems } from "@/data/menu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUserService } from "@/services/AuthService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isActiveParentMenu = (menus) => {
    return menus.some(
      (menu) => menu.href.split("/")[1] == pathname.split("/")[1],
    );
  };

  const { pathname } = useLocation();

  const logoutUser = async () => {
    const data = await logoutUserService(dispatch, navigate);
  };

  const AuthUser = useSelector((state) => state);

  return (
    <div className="navigation__item">
      <a
        href="#"
        className={`navigation__link ${
          isActiveParentMenu(othersMenuItems) ? "menu-active" : ""
        }`}
      >
        <svg
          onClick={!AuthUser ? openModalUserlogin : (e) => e.preventDefault}
          className="d-block"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use href="#icon_user" />
        </svg>
      </a>
      {AuthUser && (
        <ul className="default-menu list-unstyled">
          <li className="sub-menu__item">
            <Link
              to="/account_dashboard"
              className={`menu-link menu-link_us-s`}
            >
              My Account
            </Link>
          </li>
          <li className="sub-menu__item">
            <Link
              to="#"
              className={`menu-link menu-link_us-s`}
              onClick={logoutUser}
            >
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
