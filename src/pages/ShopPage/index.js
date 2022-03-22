import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import DisplayProducts from "./DisplayProduct";
const ShopPage = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      //console.log("products from my backend?", response);
      setProductList(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="shop-container">
      <div className="sideBar">
        <div className="categories"></div>
        <div className="ratings-items"></div>
        <div className="price-filter"></div>
      </div>
      <div className="body">
        {productList.map((product, index) => {
          return (
            
            <DisplayProducts
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              mainImage={product.mainImage}
              rating={product.rating}
            />
          );
        })}
      </div>
    </div>  
  );
};

// or if you are using the components/index.js exports
export { ShopPage };
