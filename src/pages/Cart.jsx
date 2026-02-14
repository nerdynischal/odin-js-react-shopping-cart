import CartItem from "../components/CartItem";

function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart-page">
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
