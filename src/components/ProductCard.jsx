import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAdd() {
    onAddToCart(product, quantity);
    setQuantity(1);
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <div className="product-card-content">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <div className="spacer" />

        <div className="quantity-controls">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>

        <button className="add-btn" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
