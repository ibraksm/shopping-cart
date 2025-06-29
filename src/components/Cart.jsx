import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

export default function Cart({ cartItems, handleAddToCart }) {
  const totalArticles = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <>
      <Navbar nbItemsInCart={cartItems.length} />
      <h2>Your cart</h2>
      <div className="checkout-container">
        <h5>
          Total price ({totalArticles} articles) : {totalPrice.toFixed(2)} €
        </h5>
        <button className="checkout-btn">Check out</button>
      </div>
      <ul>
        {cartItems.map(({ product, quantity }) => (
          <li key={product.id}>
            <ProductCard product={product} quantity={quantity} handleAddToCart={handleAddToCart}/>
          </li>
        ))}
      </ul>
    </>
  );
}
