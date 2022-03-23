import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <NavLink to="/" className="footer-logo">
          The<span className="footer-right-logo">Shop</span>
        </NavLink>
      </div>
      <div className="footer-right">
        <div className="categories">
          <h3 className="footer-title">Categories</h3>
          <ul>
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
          {/* ^ should be replaced with links in the future */}
        </div>
        <div className="account">
          <h3 className="footer-title">My account</h3>
          <ul>
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
          {/* ^ should be replaced with links in the future */}
        </div>
        <div className="contacts-social-link">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-links">
            <div className="social-links-item facebook"></div>
            <div className="social-links-item instagram"></div>
            <div className="social-links-item twitter"></div>
            {/* ^ should be replaced with links in the future */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
