import { Link } from "react-router-dom";

export default function Products1(products = []) {
  const data = products.product;

  const firstWordCapital = (string) => {
    const words = string.split(" ");
    const firstWord = words[0];
    const restOfText = words.slice(1).join(" ");

    return firstWord;
  };

  const restString = (string) => {
    const words = string.split(" ");
    const firstWord = words[0];
    const restOfText = words.slice(1).join(" ");

    return restOfText;
  };

  {
    return (
      data && (
        <section
          className="collections-grid collections-grid_masonry"
          id="section-collections-grid_masonry"
        >
          <div className="container h-md-100">
            <div className="row h-md-100">
              <div className="col-lg-6 h-md-100">
                <div className="collection-grid__item position-relative h-md-100">
                  <div
                    className="background-img"
                    style={{
                      backgroundImage: `url(${data.section1.image})`,
                    }}
                  ></div>
                  <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                    <p className="text-uppercase mb-1">{data.section1.text1}</p>
                    <h3 className="text-uppercase">
                      <strong>{firstWordCapital(data.section1.text2)}</strong>{" "}
                      {restString(data.section1.text2)}
                    </h3>
                    <Link
                      to={data.section1.link}
                      className="btn-link default-underline text-uppercase fw-medium"
                    >
                      Shop Now
                    </Link>
                  </div>
                  {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                </div>
              </div>
              {/* <!-- /.col-md-6 --> */}

              <div className="col-lg-6 d-flex flex-column">
                <div className="collection-grid__item position-relative flex-grow-1 mb-lg-4">
                  <div
                    className="background-img"
                    style={{
                      backgroundImage: `url(${data.section2.image})`,
                    }}
                  ></div>
                  <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                    <p className="text-uppercase mb-1">
                      {" "}
                      {data.section2.text1}
                    </p>
                    <h3 className="text-uppercase">
                      <strong>{firstWordCapital(data.section2.text2)}</strong>{" "}
                      {restString(data.section2.text2)}
                    </h3>
                    <Link
                      to={data.section2.link}
                      className="btn-link default-underline text-uppercase fw-medium"
                    >
                      Shop Now
                    </Link>
                  </div>
                  {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                </div>
                <div className="position-relative flex-grow-1 mt-lg-1">
                  <div className="row h-md-100">
                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        <div
                          className="background-img"
                          style={{
                            backgroundImage: `url(${data.section3.image})`,
                          }}
                        ></div>
                        <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                          <p className="text-uppercase mb-1">
                            {" "}
                            {data.section3.text1}
                          </p>
                          <h3 className="text-uppercase">
                            <strong>
                              {firstWordCapital(data.section3.text2)}
                            </strong>{" "}
                            {restString(data.section3.text2)}
                          </h3>
                          <Link
                            to={data.section3.link}
                            className="btn-link default-underline text-uppercase fw-medium"
                          >
                            Shop Now
                          </Link>
                        </div>
                        {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                      </div>
                      {/* <!-- /.collection-grid__item --> */}
                    </div>

                    <div className="col-md-6 h-md-100">
                      <div className="collection-grid__item h-md-100 position-relative">
                        <div
                          className="background-img"
                          style={{ backgroundColor: "#f5e6e0" }}
                        ></div>
                        <div className="content_abs content_bottom content_left content_bottom-md content_left-md">
                          <h3 className="text-uppercase">
                            <strong>
                              {firstWordCapital(data.section4.text1)}
                            </strong>{" "}
                            {restString(data.section4.text1)}
                          </h3>
                          <p className="mb-1">{data.section4.text2}</p>
                          <Link
                            to={data.section4.link}
                            className="btn-link default-underline text-uppercase fw-medium"
                          >
                            Shop Now
                          </Link>
                        </div>
                        {/* <!-- /.content_abs content_bottom content_left content_bottom-md content_left-md --> */}
                      </div>
                      {/* <!-- /.collection-grid__item --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.col-md-6 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
      )
    );
  }
}
