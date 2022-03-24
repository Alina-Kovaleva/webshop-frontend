import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import {
  faHeart,
  faSearchPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function DisplayProducts(props) {
  const rating = {
    size: 12,
    value: props.rating,
    isHalf: true,
    edit: false,
  };
  return (
    <div className="product-container-row">
      <div className="product-detail-image">
        <img className="image" alt={props.title} src={props.mainImage} />
      </div>
      <div className="product-detail-column">
        <div className="product-detail-head-column">
          <div className="product-detail-title">{props.title}</div>
          <div className="product-detail-price-rating-row">
            <div className="product-price">€{props.price}</div>
            <div className="product-rating">
              <ReactStars {...rating} />
            </div>
          </div>
        </div>
        <div className="product-detail-description">
          <p>{props.description}</p>
        </div>
        <div className="product-detail-icon-row">
          <div className="add-to-cart">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </div>
          <div className="add-to-favorite">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </div>
          <div className="add-to-zoom">
            <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
