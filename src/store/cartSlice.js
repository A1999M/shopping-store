import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "userCart",
  initialState: {
    basket: [],
  },
  reducers: {
    increment(state, action) {
      let index = state.basket.findIndex((item) => {
        return item.id == action.payload;
      });
      let newItem = {
        ...state.basket[+index],
        count: state.basket[+index].count + 1,
        totalPrice:
          (state.basket[+index].count + 1) * state.basket[+index].price,
      };
      state.basket.splice(index, 1, newItem);
    },
    decrement(state, action) {
      let index = state.basket.findIndex((item) => {
        return item.id == action.payload;
      });
      let newItem = {
        ...state.basket[+index],
        count: state.basket[+index].count - 1,
        totalPrice:
          (state.basket[+index].count - 1) * state.basket[+index].price,
      };
      state.basket.splice(index, 1, newItem);
    },
    setCartItems(state, action) {
      state.basket = action.payload;
    },
    removeCartItems(state, action) {
      let index = state.basket.findIndex((item) => {
        return item.id == action.payload;
      });
      state.basket.splice(index, 1);
    },
  },
});

export let cartActions = cartSlice.actions;
export default cartSlice.reducer;
