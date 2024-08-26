const countries = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Turkey",
];
import { useContextElement } from "@/context/Context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "@/services/CheckoutService";
import { useSelector } from "react-redux";

export default function Checkout() {
  const AuthUser = useSelector((state) => state);
  const [formData, setFormData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartProducts, totalPrice } = useContextElement();

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
    data.append("total_amount", totalPrice);
    data.append("order_items", JSON.stringify(cartProducts));
    if (AuthUser) {
      data.append("user_id", AuthUser.id);
    }

    checkout(data, dispatch, navigate);
  };

  return (
    <form onSubmit={handleSubmit} method="post">
      <div className="checkout-form">
        <div className="billing-info__wrapper">
          <h4>BILLING DETAILS</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_first_name"
                  placeholder="First Name"
                  name="first_name"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_first_name">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_last_name"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_last_name">Last Name</label>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_company_name"
                  placeholder="Company Name (optional)"
                />
                <label htmlFor="checkout_company_name">
                  Company Name (optional)
                </label>
              </div>
            </div> */}
            {/* <div className="col-md-12">
              <div className="search-field my-3">
                <div
                  className={`form-label-fixed hover-container ${
                    idDDActive ? "js-content_visible" : ""
                  }`}
                >
                  <label htmlFor="search-dropdown" className="form-label">
                    Country / Region*
                  </label>
                  <div className="js-hover__open">
                    <input
                      type="text"
                      className="form-control form-control-lg search-field__actor search-field__arrow-down"
                      id="search-dropdown"
                      name="search-keyword"
                      value={selectedRegion}
                      readOnly
                      placeholder="Choose a location..."
                      onClick={() => setIdDDActive((pre) => !pre)}
                    />
                  </div>
                  <div className="filters-container js-hidden-content mt-2">
                    <div className="search-field__input-wrapper">
                      <input
                        type="text"
                        className="search-field__input form-control form-control-sm bg-lighter border-lighter"
                        placeholder="Search"
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                      />
                    </div>
                    <ul className="search-suggestion list-unstyled">
                      {countries
                        .filter((elm) =>
                          elm.toLowerCase().includes(searchQuery.toLowerCase()),
                        )
                        .map((elm, i) => (
                          <li
                            onClick={() => {
                              setSelectedRegion(elm);
                              setIdDDActive(false);
                            }}
                            key={i}
                            className="search-suggestion__item js-search-select"
                          >
                            {elm}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="form-floating mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_street_address"
                  placeholder="Street Address *"
                  name="address"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_company_name">Street Address *</label>
              </div>
              {/* <div className="form-floating mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_street_address_2"
                  name="address2"
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_city"
                  placeholder="Town / City *"
                  name="city"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_city">Town / City *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_zipcode"
                  placeholder="Postcode / ZIP *"
                  name="zip"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_province"
                  placeholder="Province *"
                  name="province"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_province">Province *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_phone"
                  placeholder="Phone *"
                  name="phone"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_phone">Phone *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="email"
                  className="form-control"
                  id="checkout_email"
                  placeholder="Your Mail *"
                  name="email"
                  onChange={handleChange}
                />
                <label htmlFor="checkout_email">Your Mail *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-check mt-3">
                <input
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue=""
                  id="create_account"
                  name="create_account"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="create_account">
                  CREATE AN ACCOUNT?
                </label>
              </div>
              {/* <div className="form-check mb-3">
                <input
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue=""
                  id="ship_different_address"
                  name="ship_differ"
                  onChange={handleChange}
                />
                <label
                  className="form-check-label"
                  htmlFor="ship_different_address"
                >
                  SHIP TO A DIFFERENT ADDRESS?
                </label>
              </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="mt-3">
              <textarea
                className="form-control form-control_gray"
                placeholder="Order Notes (optional)"
                cols="30"
                rows="8"
                name="order_notes"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="checkout__totals-wrapper">
          <div className="sticky-content">
            <div className="checkout__totals">
              <h3>Your Order</h3>
              <table className="checkout-cart-items">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((elm, i) => (
                    <tr key={i}>
                      <td>
                        {elm.title} x {elm.quantity}
                      </td>
                      <td>Rs. {elm.price * elm.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className="checkout-totals">
                <tbody>
                  <tr>
                    <th>SUBTOTAL</th>
                    <td>Rs. {totalPrice}</td>
                  </tr>
                  <tr>
                    <th>SHIPPING</th>
                    <td>Rs. 225</td>
                  </tr>
                  {/* <tr>
                    <th>VAT</th>
                    <td>${totalPrice && 19}</td>
                  </tr> */}
                  <tr>
                    <th>TOTAL</th>
                    <td>Rs. {totalPrice && totalPrice + 225}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="checkout__payment-methods">
              <div className="form-check">
                <input
                  className="form-check-input form-check-input_fill"
                  type="radio"
                  name="checkout_payment_method"
                  id="checkout_payment_method_1"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="checkout_payment_method_1"
                >
                  Direct bank transfer
                  <span className="option-detail d-block">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.Your order will not
                    be shipped until the funds have cleared in our account.
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input form-check-input_fill"
                  type="radio"
                  name="checkout_payment_method"
                  id="checkout_payment_method_2"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkout_payment_method_2"
                >
                  Check payments
                  <span className="option-detail d-block">
                    Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                    elementum gravida nec dui. Aenean aliquam varius ipsum, non
                    ultricies tellus sodales eu. Donec dignissim viverra nunc,
                    ut aliquet magna posuere eget.
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input form-check-input_fill"
                  type="radio"
                  name="checkout_payment_method"
                  id="checkout_payment_method_3"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkout_payment_method_3"
                >
                  Cash on delivery
                  <span className="option-detail d-block">
                    Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                    elementum gravida nec dui. Aenean aliquam varius ipsum, non
                    ultricies tellus sodales eu. Donec dignissim viverra nunc,
                    ut aliquet magna posuere eget.
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input form-check-input_fill"
                  type="radio"
                  name="checkout_payment_method"
                  id="checkout_payment_method_4"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkout_payment_method_4"
                >
                  Paypal
                  <span className="option-detail d-block">
                    Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                    elementum gravida nec dui. Aenean aliquam varius ipsum, non
                    ultricies tellus sodales eu. Donec dignissim viverra nunc,
                    ut aliquet magna posuere eget.
                  </span>
                </label>
              </div>
              <div className="policy-text">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our
                <Link to="/terms" target="_blank">
                  privacy policy
                </Link>
                .
              </div>
            </div> */}
            <button className="btn btn-primary btn-checkout">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
