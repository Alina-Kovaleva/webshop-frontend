import React from "react";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";

import { Footer } from "../../components";
// import { Hero } from "./components";
import "./styles.css";

const DetailsPage = () => {
  const route_parameter = useParams();
  // console.log("our product id : ", route_parameter.id);
  const [product, setProduct] = useState();

  const fetchProductData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/products/${route_parameter.id}`
      );
      console.log("our product - ", response.data);
      setProduct(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  const rating = {
    size: 25,
    value: product?.rating,
    isHalf: true,
    edit: false,
  };

  const randomNumberReview = () => {
    // const number = Math.floor(Math.random() * 90) + 10;
    // return number;
    const x = Math.sin(product?.id) * 10000;
    return Math.floor(Math.abs(x - Math.floor(x)) * 90) + 10;
  };

  // console.log(randomNumberReview);

  return (
    <div className="details-page">
      {/* <Hero /> */}
      <div className="details-page-container flex">
        {!product ? (
          "Loading"
        ) : (
          <div className="content">
            <div className="det-page-nav flex">
              <p>
                Home.Shop.
                <span className="current-product">{product.title}</span>
              </p>
            </div>
            <div className="product flex">
              <div className="product-img">
                {/* <div className="img-prevue">
            added 3 prevue picture
          </div> */}
                <img className="main-image" src={product.mainImage}></img>
              </div>
              <div className="product-content">
                <div className="product-header">
                  <div className="product-title">{product.title}</div>
                  <div className="rating-container flex">
                    <div className="star flex">
                      <ReactStars {...rating} />
                    </div>
                    <div>({randomNumberReview()})</div>
                    <button className="add-review">add review</button>
                  </div>
                  <div className="price">€{product.price}</div>
                </div>
                <div className="product-discription">
                  <p>{product.description}</p>
                </div>
                <div className="cart-favorite">
                  <button className="add-to-cart">add to cart</button>
                  <button className="favorite-btn">favorite</button>
                </div>
                <div className="product-categories">
                  <p className="text-darc-blue">
                    Categories: {product.category?.title}
                  </p>
                </div>
                <div className="flex">
                  <div className="text-darc-blue">Share</div>
                  <div className="social-links">
                    <div className="facebook-round round-icons"></div>
                    <div className="insta-round round-icons"></div>
                    <div className="twitter-round round-icons"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bottom">
          <div className="bottom-content">
            <div className="product-nav">
              <Link className="product-nav-link active" to="">
                Description
              </Link>
              {/* <div>Description</div> */}
              <Link className="product-nav-link" to="">
                Additional Info
              </Link>
              {/* <div>Additional Info</div> */}
              <Link className="product-nav-link" to="">
                Reviews
              </Link>
              {/* <div>Reviews</div> */}
            </div>
            <h3 className="bottom-content-title">Varius tempor.</h3>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
            <h3 className="bottom-content-title">More details</h3>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// or if you are using the components/index.js exports
export { DetailsPage };
