import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";

let store = configureStore({
  reducer: {
    shoppingCart: cartReducers,
  },
});

export default store;
