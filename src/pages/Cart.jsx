function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          <h3>{item.product.title}</h3>
          <img src={item.product.image} alt={item.product.title} width="100" />
          <p>Price: ${item.product.price}</p>

          <div>
            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity > 1 ? item.quantity - 1 : 1,
                )
              }
            >
              -
            </button>

            <span style={{ margin: "0 10px" }}>{item.quantity}</span>

            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
              +
            </button>
          </div>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
