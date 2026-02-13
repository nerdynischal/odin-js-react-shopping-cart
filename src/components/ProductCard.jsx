import { useState } from "react";

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
    setQuantity(1); // reset after adding
  }

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", margin: "1rem" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />
      <p>${product.price}</p>

      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
