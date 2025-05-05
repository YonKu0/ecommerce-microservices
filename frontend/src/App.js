import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const userId = "user123";
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    fetch(`${process.env.REACT_APP_CART_URL}/cart/${userId}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
  };
  const clearCart = () => {
    setCartItems([]);
    fetch(`${process.env.REACT_APP_CART_URL}/cart/${userId}`, {
      method: "DELETE",
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>My E-Commerce Store</h1>
      <ProductList addToCart={addToCart} />
      <hr />
      <Cart userId={userId} />
      <Checkout userId={userId} items={cartItems} clearCart={clearCart} />
    </div>
  );
}

export default App;
