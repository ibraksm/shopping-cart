import "../assets/index.css";
import "../assets/reset.css";
import "../styles/ProductCard.css";

export default function ProductCard({ product, quantity, handleAddToCart }) {
  return (
    <div className="product-card-container">
      <h3>{product.title}</h3>
      <img
        className="product-card-img"
        src={product.image}
        alt={product.title}
      />
      <div className="quantity-container">
        <button
          className="decrement-btn"
          onClick={() => handleAddToCart(product, -1)}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          className="increment-btn"
          onClick={() => handleAddToCart(product)}
        >
          +
        </button>
      </div>
      <p>Price : {product.price.toFixed(2)}</p>
    </div>
  );
}
