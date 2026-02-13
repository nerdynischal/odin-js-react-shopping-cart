import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Shop</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="100" />
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;
