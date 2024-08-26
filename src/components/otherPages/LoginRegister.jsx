import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser, loginUser } from "@/services/AuthService";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContextElement } from "@/context/Context";
export default function LoginRegister() {
  const [formData, setFormData] = useState([]);
  const [loginFormData, setLoginFormData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const k in formData) {
      data.append(k, formData[k]);
    }
    registerUser(formData, dispatch, navigate);
  };

  const handleLoginChange = (e) => {
    const { name, value, checked, type } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const k in loginFormData) {
      data.append(k, loginFormData[k]);
    }

    loginUser(loginFormData, dispatch, navigate);
  };

  return (
    <section className="login-register container">
      <h2 className="d-none">Login & Register</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        method="post"
        className="needs-validation"
      >
        <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="login-tab"
              data-bs-toggle="tab"
              href="#tab-item-login"
              role="tab"
              aria-controls="tab-item-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="register-tab"
              data-bs-toggle="tab"
              href="#tab-item-register"
              role="tab"
              aria-controls="tab-item-register"
              aria-selected="false"
            >
              Register
            </a>
          </li>
        </ul>
      </form>
      <div className="tab-content pt-2" id="login_register_tab_content">
        <div
          className="tab-pane fade show active"
          id="tab-item-login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="login-form">
            <form
              onSubmit={handleLoginSubmit}
              method="post"
              className="needs-validation"
            >
              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="Email address *"
                  required
                  onChange={handleLoginChange}
                />
                <label>Email address *</label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodInput"
                  placeholder="Password *"
                  onChange={handleLoginChange}
                  required
                />
                <label htmlFor="customerPasswodInput">Password *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    defaultValue=""
                  />
                  <label className="form-check-label text-secondary">
                    Remember me
                  </label>
                </div>
                <Link to="/reset_password" className="btn-text ms-auto">
                  Lost password?
                </Link>
              </div>

              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Log In
              </button>

              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">No account yet?</span>{" "}
                <a href="#register-tab" className="btn-text js-show-register">
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form">
            <form onSubmit={handleSubmit} className="needs-validation">
              <div className="form-floating mb-3">
                <input
                  name="name"
                  type="text"
                  className="form-control form-control_gray"
                  id="customerNameRegisterInput"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="customerNameRegisterInput">Full Name</label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerEmailRegisterInput"
                  placeholder="Email address *"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="customerEmailRegisterInput">
                  Email address *
                </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  name="phone"
                  type="number"
                  className="form-control form-control_gray"
                  id="customerPhoneRegisterInput"
                  placeholder="Phone Number *"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="customerPhoneRegisterInput">
                  Phone Number *
                </label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodRegisterInput"
                  placeholder="Password *"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="customerPasswodRegisterInput">Password *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <p className="m-0">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>

              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer icon={true} />
    </section>
  );
}
