import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="container">
        <h2>Your Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}

      <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
