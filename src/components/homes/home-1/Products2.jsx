import Star from "@/components/common/Star";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import { addOrRemove } from "@/services/WishlistService";

import { useEffect, useState } from "react";

export default function Products2({ product, categories }) {
  const data = product;

  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { addProductToCart2, isAddedToCartProducts } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState("All");
  // eslint-disable-next-line no-unused-vars
  const [filtered, setFiltered] = useState(data);

  const toggleWishlistButton = (item_id) => {
    toggleWishlist(item_id);
    addOrRemove(item_id);
  };

  useEffect(() => {
    if (currentCategory == "All") {
      setFiltered(data);
    } else {
      setFiltered([
        ...data.filter((elm) => elm.filterCategory == currentCategory),
      ]);
    }
  }, [currentCategory, data]);

  {
    return (
      data && (
        <section className="products-grid container">
          <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4">
            Our Trendy <strong>Products</strong>
          </h2>

          <ul className="nav nav-tabs mb-3 text-uppercase justify-content-center">
            {categories.map((elm, i) => (
              <li
                onClick={() => setCurrentCategory(elm)}
                key={i}
                className="nav-item"
                role="presentation"
              >
                <a
                  className={`nav-link nav-link_underscore ${
                    currentCategory == elm ? "active" : ""
                  }`}
                >
                  {elm}
                </a>
              </li>
            ))}
          </ul>

          <div className="tab-content pt-2" id="collections-tab-content">
            <div
              className="tab-pane fade show active"
              id="collections-tab-1"
              role="tabpanel"
              aria-labelledby="collections-tab-1-trigger"
            >
              <div className="row">
                {filtered?.slice(0, 8).map((elm, i) => (
                  <div key={i} className="col-6 col-md-4 col-lg-3">
                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div className="pc__img-wrapper">
                        <Link to={`/product1_simple/${elm.id}`}>
                          <img
                            loading="lazy"
                            src={elm.imgSrc}
                            width="330"
                            height="400"
                            alt={elm.title}
                            className="pc__img"
                          />
                          <img
                            loading="lazy"
                            src={elm.imgSrc2}
                            width="330"
                            height="400"
                            className="pc__img pc__img-second"
                            alt="image"
                          />
                        </Link>
                        <button
                          className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                          onClick={() => addProductToCart2(elm)}
                          title={
                            isAddedToCartProducts(elm.id)
                              ? "Already Added"
                              : "Add to Cart"
                          }
                        >
                          {isAddedToCartProducts(elm.id)
                            ? "Already Added"
                            : "Add To Cart"}
                        </button>
                      </div>

                      <div className="pc__info position-relative">
                        <p className="pc__category">{elm.category}</p>
                        <h6 className="pc__title">
                          <Link to={`/product1_simple/${elm.id}`}>
                            {elm.title}
                          </Link>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price">Rs {elm.price}</span>
                        </div>
                        {/* <div className="product-card__review d-flex align-items-center">
                          <div className="reviews-group d-flex">
                            <Star stars={elm.rating} />
                          </div>
                          <span className="reviews-note text-lowercase text-secondary ms-1">
                            {elm.reviews}
                          </span>
                        </div> */}

                        <button
                          className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                            isAddedtoWishlist(elm.id) ? "active" : ""
                          }`}
                          title="Add To Wishlist"
                          onClick={() => toggleWishlistButton(elm.id)}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_heart" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <!-- /.row --> */}
              <div className="text-center mt-2">
                <Link
                  className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                  to="/shop-1"
                >
                  Discover More
                </Link>
              </div>
            </div>

            {/* <!-- /.tab-pane fade show--> */}
          </div>
          {/* <!-- /.tab-content pt-2 --> */}
        </section>
      )
    );
  }
}
