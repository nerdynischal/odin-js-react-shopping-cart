import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Shop smarter.</h1>
        <p>A clean, modern shopping experience built with React.</p>
        <Link to="/shop" className="hero-btn">
          Start Shopping
        </Link>
      </div>
    </section>
  );
}

export default Home;
