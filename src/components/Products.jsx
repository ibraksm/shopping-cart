import "../assets/index.css";
import "../assets/reset.css";
import "../styles/Products.css";

function Products({ products, handleAddToCart }) {
  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p>{product.price} €</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
