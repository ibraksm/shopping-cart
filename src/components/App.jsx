import Navbar from "./Navbar";
import "../assets/reset.css";
import "../assets/index.css";
import "../styles/App.css";
import Products from "./Products";

export default function App({products, cartItems, handleAddToCart}) {
  return (
    <>
      <Navbar nbItemsInCart={cartItems.length} />
      <Products
        products={products}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
}
