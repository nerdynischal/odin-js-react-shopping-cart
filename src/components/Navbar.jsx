import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); // need to calculate total items in cart

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/shop">Shop</Link> |{" "}
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}

export default Navbar;
