import axios from "axios";

export const productAPI = axios.create({
  baseURL: process.env.REACT_APP_PRODUCT_URL,
});
export const cartAPI = axios.create({
  baseURL: process.env.REACT_APP_CART_URL,
});
export const checkoutAPI = axios.create({
  baseURL: process.env.REACT_APP_CHECKOUT_URL,
});
