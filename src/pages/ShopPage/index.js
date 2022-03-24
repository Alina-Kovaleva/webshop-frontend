import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import DisplayProducts from "./DisplayProduct";
import { isDisabled } from "@testing-library/user-event/dist/utils";


// const icon= require( "react-icon-rating")
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

  //
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

  return (
    <div>
      <div className="shop-container">
        <div className="sideBar">
          <div className="categories">
            <h3>Categories</h3>

            <div>
              <input
                type="checkbox"
                value="Electronics"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              ></input>
              <label>Electronics</label>
            </div>

            <div>
              <input
                type="checkbox"
                value="Jewelery"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              ></input>
              <label>Jewelery</label>
            </div>

            <div>
              <input
                type="checkbox"
                value="Men's Clothing"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              ></input>
              <label>Men's Clothing</label>
            </div>

            <div>
              <input
                type="checkbox"
                value="Women's Clothing"
                onChange={(e) => {
                  if (e.target.checked) {
                    setCategory(e.target.value);
                  }
                }}
              ></input>
              <label>Women's Clothing</label>
            </div>
          </div>

          <div className="ratings-items">
            <h3>Rating Item</h3>
            <div>
              <input
                type="checkbox"
                value={5}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRates(e.target.value);
                  }
                }}
              ></input>
              <label>rating[4.5-5]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={4}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRates(e.target.value);
                  }
                }}
              ></input>
              <label>rating[3.5-4]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={3}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRates(e.target.value);
                  }
                }}
              ></input>
              <label>rating[2.5-3]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={2}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRates(e.target.value);
                  }
                }}
              ></input>
              <label>rating[1.5-2]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={1}
                onChange={(e) => {
                  if (e.target.checked) {
                    setRates(e.target.value);
                  }
                }}
              ></input>
              <label>rating[0-1.5]</label>
            </div>
          </div>

          <div className="price-filter">
            <h3>price-filter</h3>
            <div>
              <input
                type="checkbox"
                value={200}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPrices(e.target.value);
                  }
                }}
              ></input>
              <label>range[0-200]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={400}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPrices(e.target.value);
                  }
                }}
              ></input>
              <label>range[200-400]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={800}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPrices(e.target.value);
                  }
                }}
              ></input>
              <label>range[400-800]</label>
            </div>

            <div>
              <input
                type="checkbox"
                value={1000}
                onChange={(e) => {
                  if (e.target.checked) {
                    setPrices(e.target.value);
                  }
                }}
              ></input>
              <label>range[800-1000]</label>
            </div>
          </div>
        </div>
        <div>
          {filteredPrice.map((product, index) => {
            return (
              offset <= index &&
              index <= offset + 4 && (
                <DisplayProducts
                  key={index}
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
        <div className="btn">
          <button onClick={getPreviousProducts} disabled={offset === 0}>
            Previous
          </button>
        </div>
        <div className="btn">
          <button onClick={getNextProducts} disabled={offset === 15}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// or if you are using the components/index.js exports
export { ShopPage };
