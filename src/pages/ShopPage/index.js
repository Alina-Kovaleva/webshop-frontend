import { useEffect } from "react";
import axios from "axios";

const ShopPage = () => {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");
        console.log("products from my backend?", response);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

// or if you are using the components/index.js exports
export { ShopPage };
