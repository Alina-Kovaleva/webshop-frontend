import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
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
    // <NavLink
    //   className="nav-link-to-details-prosuct"
    //   to={`/details/${props.id}`}
    // >
    <div className="product-container-row">
      <div className="product-detail-image">
        <NavLink
          className="nav-link-to-details-prosuct"
          to={`/details/${props.id}`}
        >
          <img className="image" alt={props.title} src={props.mainImage} />
        </NavLink>
      </div>
      <div className="product-detail-column">
        <div className="product-detail-head-column">
          <div className="product-detail-title">
            <NavLink
              className="nav-link-to-details-prosuct"
              to={`/details/${props.id}`}
            >
              {props.title}
            </NavLink>
          </div>
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
          <div className="add-to-cart-i">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </div>
          <div className="add-to-favorite-i">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </div>
          <div className="add-to-zoom-i">
            <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
    // </NavLink>
  );
}
