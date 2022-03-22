import "./styles.css";

export default function DisplayProducts(props) {
  return (
    <div className="product-container-row">
      <div className="product-image">
        <img className="image" alt={props.categoryId} src={props.mainImage} />
      </div>

      <div className="product-details-column">
        <div className="product-title">{props.title}</div>
        <div className="price-rating-row">
          <div>{props.price}</div>
          <div>{props.rating}</div>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <div className="product-iconbar-row">iconbar</div>

        {/* <li>{props.categoryId}</li> */}
      </div>
    </div>
  );
}
