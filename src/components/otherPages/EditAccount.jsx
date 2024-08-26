import { useState } from "react";
import {
  updateUserProfile,
  resetCustomerPassword,
} from "@/services/AuthService";
import { useDispatch } from "react-redux";
export default function EditAccount({ user }) {
  const [formData, setFormData] = useState([]);
  const [formPasswordData, setFormPasswordData] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateUserProfile(formData, dispatch);
  };

  const handlePasswordChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormPasswordData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    resetCustomerPassword(formPasswordData);
  };

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__edit">
        <div className="my-account__edit-form">
          <div className="row">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="needs-validation"
            >
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_first_name"
                    placeholder="First Name"
                    required
                    name="name"
                    defaultValue={user.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="account_first_name">Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="account_last_name"
                    placeholder="Last Name"
                    required
                    name="phone"
                    defaultValue={user.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="account_last_name">Phone</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="account_email"
                    placeholder="Email Address"
                    required
                    name="email"
                    defaultValue={user.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="account_email">Email Address</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
            <div className="col-md-12">
              <div className="my-3">
                <h5 className="text-uppercase mb-0">Password Change</h5>
              </div>
            </div>
            <form onSubmit={handlePasswordSubmit} method="POST">
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_current_password"
                    placeholder="Current password"
                    name="current_password"
                    onChange={handlePasswordChange}
                    required
                  />
                  <label htmlFor="account_current_password">
                    Current password
                  </label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    id="account_new_password"
                    placeholder="New password"
                    required
                    onChange={handlePasswordChange}
                    name="new_password"
                  />
                  <label htmlFor="account_new_password">New password</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating my-3">
                  <input
                    type="password"
                    className="form-control"
                    data-cf-pwd="#account_new_password"
                    id="account_confirm_password"
                    placeholder="Confirm new password"
                    name="confirm_password"
                    required
                    onChange={handlePasswordChange}
                  />
                  <label htmlFor="account_confirm_password">
                    Confirm new password
                  </label>
                  <div className="invalid-feedback">
                    Passwords did not match!
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="my-3">
                  <button type="submit" className="btn btn-primary">
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
