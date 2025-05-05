import React, { useEffect, useState } from "react";
import { cartAPI } from "../api";

export default function Cart({ userId }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    cartAPI.get(`/cart/${userId}`).then((r) => setItems(r.data));
  }, [userId]);
  return items.length ? (
    items.map((item, i) => (
      <div key={i}>
        {item.name} — ${item.price}
      </div>
    ))
  ) : (
    <p>Cart is empty</p>
  );
}
