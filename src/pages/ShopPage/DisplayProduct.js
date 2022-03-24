import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearchPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function DisplayProducts(props) {
  return (
    <div className="product-container-row">
      <div className="product-image">
        <img className="image" alt={props.categoryId} src={props.mainImage} />
      </div>

      <div className="product-content">
        <div className="product-title">{props.title}</div>

        <div className="price-rating">
          <div className="price">{props.price}$</div>
          <div className="ratings">{props.rating}</div>
        </div>

        <div className="product-description">
          <p>{props.description}</p>
        </div>

        <div className="iconbar">
          <div className="cart icon">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </div>
          <div className="favorite icon">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </div>
          <div className="zoom icon">
            <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
