function CartItem({ item, updateQuantity, removeFromCart }) {
  const { id, product, quantity } = item;

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />

      <div className="cart-details">
        <h3>{product.title}</h3>
        <p>${product.price}</p>

        <div className="cart-controls">
          <button
            onClick={() => updateQuantity(id, quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => updateQuantity(id, quantity + 1)}>+</button>
        </div>

        <button className="remove-btn" onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
