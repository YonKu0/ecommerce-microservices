import React, { useState } from "react";
import { checkoutAPI } from "../api";

export default function Checkout({ userId, items, clearCart }) {
  const [status, setStatus] = useState("");
  const handleCheckout = () => {
    checkoutAPI
      .post("/checkout", { user_id: userId, items })
      .then(() => {
        setStatus("Success!");
        clearCart();
      })
      .catch(() => setStatus("Error"));
  };
  return (
    <>
      <button onClick={handleCheckout}>Checkout</button>
      {status && <p>{status}</p>}
    </>
  );
}
