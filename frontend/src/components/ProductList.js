import React, { useEffect, useState } from "react";
import { productAPI } from "../api";

export default function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productAPI.get("/products").then((res) => setProducts(res.data));
  }, []);
  return products.map((p) => (
    <div key={p._id}>
      <h3>{p.name}</h3>
      <p>${p.price}</p>
      <button onClick={() => addToCart(p)}>Add to Cart</button>
    </div>
  ));
}
