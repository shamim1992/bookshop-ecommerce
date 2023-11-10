const { createSlice, current } = require("@reduxjs/toolkit");
const initialState = {
  categoryId: 0,
  outlet: 0,
  outletDrawer: false,
};
const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setOutlet(state, action) {
      state.outlet = action.payload;
    },
    setOpenOutletDrawer(state, action) {
      state.outletDrawer = action.payload;
    },
  },
});

export const { setCategoryId, setOutlet, setOpenOutletDrawer } =
  utilSlice.actions;
export default utilSlice.reducer;
