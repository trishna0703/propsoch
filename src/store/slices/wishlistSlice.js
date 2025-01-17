import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const propertyId = action.payload;
      const index = state.items.indexOf(propertyId);
      if (index === -1) {
        state.items.push(propertyId);
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
