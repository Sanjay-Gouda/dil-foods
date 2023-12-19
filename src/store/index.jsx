import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import products from "./slices/productList";
const store = configureStore({
  reducer: {
    cart,
    products,
  },
});

export default store;
