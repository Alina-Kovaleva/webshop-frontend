import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

import DisplayProducts from "./DisplayProduct";
import ReactStars from "react-rating-stars-component";

import { Footer, Hero } from "../../components";

const ShopPage = () => {
  const [productList, setProductList] = useState([]);

  //filter
  const [category, setCategory] = useState([]);
  const [rate, setRates] = useState(0);
  const [price, setPrices] = useState(0);

  //pagination
  const [offset, setoffset] = useState(0);

  //data-fetch
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");

      setProductList(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //rating for side bar
  const rating5 = {
    size: 25,
    value: 4.5,
    isHalf: true,
    edit: false,
  };
  const rating4 = {
    size: 25,
    value: 4,
    isHalf: true,
    edit: false,
  };
  const rating3 = {
    size: 25,
    value: 3,
    isHalf: true,
    edit: false,
  };
  const rating2 = {
    size: 25,
    value: 2,
    isHalf: true,
    edit: false,
  };
  const rating1 = {
    size: 25,
    value: 1,
    isHalf: true,
    edit: false,
  };

  const randomNumberReview = (n) => {
    const x = Math.sin(n) * 10000;
    return Math.floor(Math.abs(x - Math.floor(x)) * 90) + 123;
  };

  const getNextProducts = () => {
    setoffset(offset + 5);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 5);
  };

  const filteredProducts =
    category.length === 0
      ? [...productList]
      : [...productList].filter((product) => {
          return product.category.title === category;
        });

  const filteredRate =
    rate === 0
      ? [...filteredProducts]
      : [...filteredProducts].filter((product) => {
          return Math.round(product.rating) === Math.round(rate);
        });

  const filteredPrice =
    price === 0
      ? [...filteredRate]
      : [...filteredRate].filter((product) => {
          return product.price <= price && product.price >= price - 200;
        });

  // console.log("length", filteredPrice.length);
  return (
    <div>
      <Hero />
      <div className="shop-page-column">
        <div className="shop-container-flex">
          <div className="side-bar-container-column">
            <div className="cat-container-column">
              <div className="side-bar-title">Categories</div>
              <div className="side-bar-content-column">
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value="Electronics"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory(e.target.value);
                      } else {
                        setCategory([]);
                      }
                    }}
                  ></input>
                  <div className="side-bar-checkbox-text">Electronics</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value="Jewelery"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory(e.target.value);
                      } else {
                        setCategory([]);
                      }
                    }}
                  ></input>
                  <div className="side-bar-checkbox-text">Jewelery</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value="Men's Clothing"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory(e.target.value);
                      } else {
                        setCategory([]);
                      }
                    }}
                  ></input>
                  <div className="side-bar-checkbox-text">Men's Clothing</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value="Women's Clothing"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory(e.target.value);
                      } else {
                        setCategory([]);
                      }
                    }}
                  ></input>
                  <div className="side-bar-checkbox-text">Women's Clothing</div>
                </div>
              </div>
            </div>
            <div className="rating-container-column">
              <div className="side-bar-title">Rating Item</div>
              <div className="side-bar-content-column">
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={5}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRates(e.target.value);
                      } else {
                        setRates(0);
                      }
                    }}
                  ></input>
                  <ReactStars {...rating5} />
                  <div className="rating-review">({randomNumberReview(5)})</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={4}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRates(e.target.value);
                      } else {
                        setRates(0);
                      }
                    }}
                  ></input>
                  <ReactStars {...rating4} />
                  <div className="rating-review">({randomNumberReview(4)})</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={3}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRates(e.target.value);
                      } else {
                        setRates(0);
                      }
                    }}
                  ></input>{" "}
                  <ReactStars {...rating3} />
                  <div className="rating-review">({randomNumberReview(3)})</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={2}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRates(e.target.value);
                      } else {
                        setRates(0);
                      }
                    }}
                  ></input>
                  <ReactStars {...rating2} />
                  <div className="rating-review">({randomNumberReview(2)})</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={1}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setRates(e.target.value);
                      } else {
                        setRates(0);
                      }
                    }}
                  ></input>
                  <ReactStars {...rating1} />
                  <div className="rating-review">({randomNumberReview(1)})</div>
                </div>
              </div>
            </div>
            <div className="price-container-column">
              <div className="side-bar-title">Price Filter</div>
              <div className="side-bar-content-column">
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={200}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPrices(e.target.value);
                      } else {
                        setPrices(0);
                      }
                    }}
                  ></input>
                  <div className="price-range">€0.00 - €200</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={400}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPrices(e.target.value);
                      } else {
                        setPrices(0);
                      }
                    }}
                  ></input>
                  <div className="price-range">€200 - €400</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={600}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPrices(e.target.value);
                      } else {
                        setPrices(0);
                      }
                    }}
                  ></input>
                  <div className="price-range">€400 - €800</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    type="checkbox"
                    value={800}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPrices(e.target.value);
                      } else {
                        setPrices(0);
                      }
                    }}
                  ></input>
                  <div className="price-range">€600 - €800</div>
                </div>
                <div className="side-bar-content-item">
                  <input
                    className="input-price"
                    type="checkbox"
                    value={1000}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPrices(e.target.value);
                      } else {
                        setPrices(0);
                      }
                    }}
                  ></input>
                  <div className="price-range">€800+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-container-column">
            {" "}
            {filteredPrice.map((product, index) => {
              return (
                offset <= index &&
                index <= offset + 4 && (
                  <DisplayProducts
                    key={index}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    mainImage={product.mainImage}
                    rating={product.rating}
                  />
                )
              );
            })}
          </div>
        </div>
        <div className="buttons">
          <div>
            <button
              className="btn"
              onClick={getPreviousProducts}
              disabled={offset === 0}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              className="btn"
              onClick={getNextProducts}
              disabled={offset >= filteredPrice.length - 5}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// or if you are using the components/index.js exports
export { ShopPage };
