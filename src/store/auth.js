import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  loggedInVar: false,
  userInfo:{},
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state,action) {
      state.loggedInVar = true;
      state.userInfo=action.payload;
  },
    logout(state) {
       state.loggedInVar = false; 
      state.userInfo={};
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
