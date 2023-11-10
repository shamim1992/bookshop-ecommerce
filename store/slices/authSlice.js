const { createSlice, current } = require("@reduxjs/toolkit");
const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  authDrawer: false,
  fcmToken: null,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setAuthDrawer(state, action) {
      state.authDrawer = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setFcmToken(state, action) {
      state.fcmToken = action.payload;
    },
  },
});

export const { setLoggedIn, setAuthDrawer, setUser, setFcmToken } =
  authSlice.actions;
export default authSlice.reducer;
