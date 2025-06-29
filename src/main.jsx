import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
import Cart from "./components/Cart.jsx";
import { useState, useEffect } from "react";
import "./assets/reset.css";

export default function Root() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Add to cart a product n times
  const handleAddToCart = (product, n = 1) => {
    // Early validation: check for a valid product and numeric n
    if (!product || typeof n !== "number") {
      console.error("Invalid product or non-numeric quantity change (n)");
      return;
    }

    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );

      // Case 1: trying to decrement or add zero for a product not in the cart ➜ do nothing
      if (!existingItem && n <= 0) {
        console.warn("Cannot decrement a product that is not in the cart");
        return prevCart;
      }

      // Case 2: product already exists in cart ➜ update its quantity
      if (existingItem) {
        const newQuantity = existingItem.quantity + n;

        // If the new quantity is zero or less ➜ remove the product from cart
        if (newQuantity <= 0) {
          return prevCart.filter((item) => item.product.id !== product.id);
        }

        // Otherwise ➜ update the item's quantity
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }

      // Case 3: product not in cart ➜ add it with the given quantity
      return [...prevCart, { product, quantity: n }];
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          products={products}
          cartItems={cartItems}
          handleAddToCart={handleAddToCart}
        />
      ),
    },
    {
      path: "/cart",
      element: <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
