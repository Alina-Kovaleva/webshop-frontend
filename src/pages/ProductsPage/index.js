import "./styles.css";

import { useEffect, useState } from "react";
import axios from "axios";

import DisplayProducts from "../ShopPage/DisplayProduct";
import { Footer } from "../../components";

const ProductsPage = () => {
  //   const URL = "http://localhost:4000/products";

  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      console.log("response: ", response);
      setProductList(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //   console.log(productList);
  return (
    <div>
      <div className="product-page-content-flex">
        {!productList
          ? "Loading"
          : productList.map((product, index) => {
              return (
                <div>
                  <DisplayProducts
                    key={index}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    mainImage={product.mainImage}
                    rating={product.rating}
                  />
                </div>
              );
            })}
      </div>
      <Footer />
    </div>
  );
};

export { ProductsPage };
