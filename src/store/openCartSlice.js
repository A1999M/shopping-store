import { createSlice } from "@reduxjs/toolkit";

let openCartSlice = createSlice({
  name: "cartState",
  initialState: {
    openCart: false,
  },
  reducers: {
    handleCartState(state, action) {
      state.openCart = action.payload;
    },
  },
});

export let cartActions = openCartSlice.actions;
export default openCartSlice.reducer;
