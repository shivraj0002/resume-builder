import { createSlice } from "@reduxjs/toolkit";

const initialState = { userId: "", userEmail: "", isLoggedIn: false};

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userLoginStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload
    },
  },
});

export const userAuthActions = userAuth.actions;
export default userAuth.reducer;
