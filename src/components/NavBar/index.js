import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="nav-row left">
        <div className="container">
          <NavLink to="/" className="nav-link nav-logo">
            The<span className="right-logo">Shop</span>
          </NavLink>
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/shop"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/details/1"
            className="nav-link"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            Contact
          </NavLink>
        </div>
        <div>
          <form>
            <input className="nav-search" type="text" name="search"></input>
          </form>
        </div>
      </div>
      <div className="nav-row right">
        <div className="login icon"></div>
        {/* ^ should seend us to login page */}
        <div className="cart icon"></div>
        {/* ^ shouls seend us to  shoping cart page*/}
        <div className="favorite icon"></div>
        {/* ^ should seend us to favorites page */}
      </div>
    </div>
  );
}
export { NavBar };
