import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./openCartSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducers,
  },
});

export default store;
