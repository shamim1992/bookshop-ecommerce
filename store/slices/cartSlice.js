const { createSlice, current } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
  totalAmount: 0,
};

function calcTotalAmount(data) {
  return data.reduce((sum, item) => sum + parseFloat(item.price), 0);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //  state.items.push(action.payload);
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const data = state.items.filter((item) => item.id !== action.payload);
      state.items = data;
    },
    increasCartQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decreaseCartQty(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    clearCart(state, action) {
      state.items = [];
    },
    setCartItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  setCartItems,
  increasCartQty,
  decreaseCartQty,
} = cartSlice.actions;
export default cartSlice.reducer;
