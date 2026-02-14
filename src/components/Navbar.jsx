import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cart }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          ShopEasy
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/shop">Shop</Link>
        <Link to="/cart" className="cart-link">
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
